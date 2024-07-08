import { type FC, type PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { c } from 'ttag';

import { Button } from '@proton/atoms/Button';
import { Prompt } from '@proton/components/index';
import { useBulkSelect } from '@proton/pass/components/Bulk/BulkSelectProvider';
import { VaultSelect, VaultSelectMode, useVaultSelectModalHandles } from '@proton/pass/components/Vault/VaultSelect';
import { WithVault } from '@proton/pass/components/Vault/WithVault';
import { useConfirm } from '@proton/pass/hooks/useConfirm';
import {
    itemBulkDeleteIntent,
    itemBulkMoveIntent,
    itemBulkRestoreIntent,
    itemBulkTrashIntent,
    itemDeleteIntent,
    itemMoveIntent,
    itemRestoreIntent,
    itemTrashIntent,
} from '@proton/pass/store/actions';
import { selectItemSecureLinks, selectSecureLinksByItems } from '@proton/pass/store/selectors';
import type { BulkSelectionDTO, ItemRevision, MaybeNull } from '@proton/pass/types';
import { uniqueId } from '@proton/pass/utils/string/unique-id';

/** Ongoing: move every item action definition to this
 * context object. This context should be loosely connected */
type ItemActionsContextType = {
    delete: (item: ItemRevision) => void;
    deleteMany: (items: BulkSelectionDTO) => void;
    move: (item: ItemRevision, mode: VaultSelectMode) => void;
    moveMany: (items: BulkSelectionDTO) => void;
    restore: (item: ItemRevision) => void;
    restoreMany: (items: BulkSelectionDTO) => void;
    trash: (item: ItemRevision) => void;
    trashMany: (items: BulkSelectionDTO) => void;
};

const ItemActionsContext = createContext<MaybeNull<ItemActionsContextType>>(null);

export const ItemActionsProvider: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useDispatch();
    const bulk = useBulkSelect();

    const { closeVaultSelect, openVaultSelect, modalState } = useVaultSelectModalHandles();

    const moveItem = useConfirm((options: { item: ItemRevision; shareId: string }) => {
        const optimisticId = uniqueId();
        dispatch(itemMoveIntent({ ...options, optimisticId }));
    });

    const moveManyItems = useConfirm((options: { selected: BulkSelectionDTO; shareId: string }) => {
        dispatch(itemBulkMoveIntent(options));
        bulk.disable();
    });

    const trashItem = (item: ItemRevision) => {
        dispatch(itemTrashIntent({ itemId: item.itemId, shareId: item.shareId, item }));
    };

    const trashManyItems = (selected: BulkSelectionDTO) => {
        dispatch(itemBulkTrashIntent({ selected }));
        bulk.disable();
    };

    const deleteItem = (item: ItemRevision) => {
        dispatch(itemDeleteIntent({ itemId: item.itemId, shareId: item.shareId, item }));
    };

    const deleteManyItems = (selected: BulkSelectionDTO) => {
        dispatch(itemBulkDeleteIntent({ selected }));
        bulk.disable();
    };

    const restoreItem = (item: ItemRevision) => {
        dispatch(itemRestoreIntent({ itemId: item.itemId, shareId: item.shareId, item }));
    };

    const restoreManyItems = (selected: BulkSelectionDTO) => {
        dispatch(itemBulkRestoreIntent({ selected }));
        bulk.disable();
    };

    const itemHasSecureLinks = Boolean(
        useSelector(selectItemSecureLinks(moveItem?.param?.item?.shareId ?? '', moveItem?.param?.item.itemId ?? ''))
            .length
    );

    const itemsHasSecureLinks = Boolean(
        useSelector(selectSecureLinksByItems(moveManyItems.param?.selected ?? {})).length
    );

    const context = useMemo<ItemActionsContextType>(() => {
        return {
            move: (item, mode) =>
                openVaultSelect({
                    mode,
                    shareId: item.shareId,
                    onSubmit: (shareId) => {
                        moveItem.prompt({ item, shareId });
                        closeVaultSelect();
                    },
                }),
            moveMany: (selected) =>
                openVaultSelect({
                    mode: VaultSelectMode.Writable,
                    shareId: '' /* allow all vaults */,
                    onSubmit: (shareId) => {
                        moveManyItems.prompt({ selected, shareId });
                        closeVaultSelect();
                    },
                }),
            trash: trashItem,
            trashMany: trashManyItems,
            delete: deleteItem,
            deleteMany: deleteManyItems,
            restore: restoreItem,
            restoreMany: restoreManyItems,
        };
    }, []);

    return (
        <ItemActionsContext.Provider value={context}>
            {children}
            <VaultSelect
                downgradeMessage={c('Info')
                    .t`You have exceeded the number of vaults included in your subscription. Items can only be moved to your first two vaults. To move items between all vaults upgrade your subscription.`}
                onClose={closeVaultSelect}
                {...modalState}
            />

            <WithVault shareId={moveItem.param?.shareId}>
                {({ content: { name } }) => (
                    <Prompt
                        open={moveItem.pending}
                        title={c('Title').t`Move item to "${name}"?`}
                        buttons={[
                            <Button color="norm" onClick={moveItem.confirm}>{c('Action').t`Confirm`}</Button>,
                            <Button onClick={moveItem.cancel}>{c('Action').t`Cancel`}</Button>,
                        ]}
                    >
                        {itemHasSecureLinks
                            ? c('Info').t`Moving an item to another vault will erase its history and all secure links.`
                            : c('Info').t`Moving an item to another vault will erase its history.`}
                    </Prompt>
                )}
            </WithVault>

            <WithVault shareId={moveManyItems.param?.shareId}>
                {({ content: { name } }) => (
                    <Prompt
                        open={moveManyItems.pending}
                        title={c('Title').t`Move items to "${name}"?`}
                        buttons={[
                            <Button color="norm" onClick={moveManyItems.confirm}>{c('Action').t`Confirm`}</Button>,
                            <Button onClick={moveManyItems.cancel}>{c('Action').t`Cancel`}</Button>,
                        ]}
                    >
                        {itemsHasSecureLinks
                            ? c('Info').t`Moving items to another vault will erase their history and all secure links.`
                            : c('Info').t`Moving items to another vault will erase their history.`}
                    </Prompt>
                )}
            </WithVault>
        </ItemActionsContext.Provider>
    );
};

export const useItemsActions = (): ItemActionsContextType => useContext(ItemActionsContext)!;
