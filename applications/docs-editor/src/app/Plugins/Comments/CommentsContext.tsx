import { EditorRequiresClientMethods } from '@proton/docs-shared'
import { createContext, useContext } from 'react'
import type { NodeKey } from 'lexical'

type CommentsContextValue = {
  username: string
  controller: EditorRequiresClientMethods
  removeMarkNode: (id: string) => void
  activeIDs: string[]
  markNodeMap: Map<string, Set<NodeKey>>
}

const CommentsContext = createContext<CommentsContextValue | null>(null)

export const useCommentsContext = () => {
  const context = useContext(CommentsContext)
  if (!context) {
    throw new Error('useCommentsContext must be used within a CommentsProvider')
  }
  return context
}

export const CommentsProvider = CommentsContext.Provider
