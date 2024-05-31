import {
  AnyCommentMessageData,
  CommentsMessageType,
  CommentServiceInterface,
  CommentThreadInterface,
  CommentInterface,
  InternalEventHandlerInterface,
  InternalEventInterface,
  InternalEventBusInterface,
  CommentsEvent,
  CommentMarkNodeChangeData,
} from '@proton/docs-shared'
import { CommentsApi } from '../../Api/Comments/CommentsApi'
import { EncryptComment } from '../../UseCase/EncryptComment'
import { LoggerInterface } from '@standardnotes/utils'
import { CreateRealtimeCommentMessage } from './CreateRealtimeCommentMessage'
import { DocumentKeys, NodeMeta } from '@proton/drive-store'
import { LocalCommentsState } from './LocalCommentsState'
import { HandleRealtimeCommentsEvent } from '../../UseCase/HandleRealtimeCommentsEvent'
import { CreateThread } from '../../UseCase/CreateThread'
import { CreateComment } from '../../UseCase/CreateComment'
import { LoadThreads } from '../../UseCase/LoadThreads'
import { LiveComments } from '../../Realtime/LiveComments/LiveComments'
import { WebsocketServiceInterface } from '../Websockets/WebsocketServiceInterface'
import { DocControllerEvent, RealtimeCommentMessageReceivedPayload } from '../../Controller/Document/DocControllerEvent'

export class CommentService implements CommentServiceInterface, InternalEventHandlerInterface {
  private localCommentsState: LocalCommentsState

  public readonly liveComments: LiveComments = new LiveComments(
    this.websocketService,
    this.document,
    this.userDisplayName,
    this.keys.userOwnAddress,
    this.eventBus,
  )

  constructor(
    private readonly document: NodeMeta,
    private readonly keys: DocumentKeys,
    private readonly websocketService: WebsocketServiceInterface,
    public userDisplayName: string,
    private api: CommentsApi,
    private _encryptComment: EncryptComment,
    private _createThread: CreateThread,
    private _createComment: CreateComment,
    private _loadThreads: LoadThreads,
    private _handleRealtimeEvent: HandleRealtimeCommentsEvent,
    public readonly eventBus: InternalEventBusInterface,
    private logger: LoggerInterface,
  ) {
    this.localCommentsState = new LocalCommentsState(eventBus)
    eventBus.addEventHandler(this, DocControllerEvent.RealtimeCommentMessageReceived)
  }

  public initialize(): void {
    void this._loadThreads.execute({
      lookup: this.document,
      keys: this.keys,
      commentsState: this.localCommentsState,
    })
  }

  private broadcastCommentMessage(type: CommentsMessageType, dto: AnyCommentMessageData): void {
    const message = CreateRealtimeCommentMessage(type, dto, this.keys.userOwnAddress)

    void this.websocketService.sendMessageToDocument(this.document, message, 'CommentsController')
  }

  public getTypersExcludingSelf(threadId: string): string[] {
    return this.liveComments.getTypingUsers(threadId).filter((user) => user !== this.userDisplayName)
  }

  public beganTypingInThread(threadID: string): void {
    this.logger.info('BeganTypingInThread', threadID)

    this.liveComments.setIsTypingComment(threadID, true)
  }

  public stoppedTypingInThread(threadID: string): void {
    this.logger.info('StoppedTypingInThread', threadID)

    this.liveComments.setIsTypingComment(threadID, false)
  }

  async handleEvent(event: InternalEventInterface): Promise<void> {
    if (event.type !== DocControllerEvent.RealtimeCommentMessageReceived) {
      return
    }

    const { message } = event.payload as RealtimeCommentMessageReceivedPayload

    this._handleRealtimeEvent.execute(this.localCommentsState, this.liveComments, message)
  }

  getAllThreads(): CommentThreadInterface[] {
    return this.localCommentsState.getAllThreads()
  }

  async createThread(commentContent: string): Promise<CommentThreadInterface | undefined> {
    const threadResult = await this._createThread.execute({
      text: commentContent,
      keys: this.keys,
      lookup: this.document,
      userDisplayName: this.userDisplayName,
      commentsState: this.localCommentsState,
    })

    if (threadResult.isFailed()) {
      this.logger.error(threadResult.getError())
      return undefined
    }

    const thread = threadResult.getValue()

    this.broadcastCommentMessage(CommentsMessageType.AddThread, thread.asPayload())

    return thread
  }

  async createComment(content: string, threadID: string): Promise<CommentInterface | undefined> {
    const commentResult = await this._createComment.execute({
      text: content,
      threadID,
      keys: this.keys,
      lookup: this.document,
      userDisplayName: this.userDisplayName,
      commentsState: this.localCommentsState,
    })

    if (commentResult.isFailed()) {
      this.logger.error(commentResult.getError())
      return undefined
    }

    const comment = commentResult.getValue()

    this.broadcastCommentMessage(CommentsMessageType.AddComment, { comment: comment.asPayload(), threadID })

    return comment
  }

  async editComment(threadID: string, commentID: string, content: string): Promise<boolean> {
    const thread = this.localCommentsState.findThreadById(threadID)
    if (!thread) {
      throw new Error('Thread not found')
    }

    const encryptedContent = (await this._encryptComment.execute(content, thread.markID, this.keys)).getValue()

    const result = await this.api.editComment(
      this.document.volumeId,
      this.document.linkId,
      threadID,
      commentID,
      encryptedContent,
    )
    if (result.isFailed()) {
      return false
    }

    this.localCommentsState.editComment({ commentID, threadID, content })

    this.broadcastCommentMessage(CommentsMessageType.EditComment, { commentID, threadID, content })

    return true
  }

  async deleteThread(id: string): Promise<boolean> {
    const response = await this.api.deleteThread(this.document.volumeId, this.document.linkId, id)
    if (response.isFailed()) {
      return false
    }

    this.localCommentsState.deleteThread(id)

    this.broadcastCommentMessage(CommentsMessageType.DeleteThread, { threadId: id })

    return true
  }

  async deleteComment(threadID: string, commentID: string): Promise<boolean> {
    const response = await this.api.deleteComment(this.document.volumeId, this.document.linkId, threadID, commentID)
    if (response.isFailed()) {
      return false
    }

    this.localCommentsState.deleteComment({ commentID, threadID })

    this.broadcastCommentMessage(CommentsMessageType.DeleteComment, { commentID, threadID })

    return true
  }

  async resolveThread(threadId: string): Promise<boolean> {
    const response = await this.api.resolveThread(this.document.volumeId, this.document.linkId, threadId)
    if (response.isFailed()) {
      return false
    }

    const resolvedThread = this.localCommentsState.resolveThread(threadId)
    if (!resolvedThread) {
      return false
    }

    this.eventBus.publish<CommentMarkNodeChangeData>({
      type: CommentsEvent.ResolveMarkNode,
      payload: {
        markID: resolvedThread.markID,
      },
    })

    this.broadcastCommentMessage(CommentsMessageType.ResolveThread, { threadId })

    return true
  }

  async unresolveThread(threadId: string): Promise<boolean> {
    const response = await this.api.unresolveThread(this.document.volumeId, this.document.linkId, threadId)
    if (response.isFailed()) {
      return false
    }

    const unresolvedThread = this.localCommentsState.unresolveThread(threadId)
    if (!unresolvedThread) {
      return false
    }

    this.eventBus.publish<CommentMarkNodeChangeData>({
      type: CommentsEvent.UnresolveMarkNode,
      payload: {
        markID: unresolvedThread.markID,
      },
    })

    this.broadcastCommentMessage(CommentsMessageType.UnresolveThread, { threadId })

    return true
  }
}
