import { c } from 'ttag';

import { Button } from '@proton/atoms/Button';
import ModalTwo from '@proton/components/components/modalTwo/Modal';
import ModalContent from '@proton/components/components/modalTwo/ModalContent';
import ModalFooter from '@proton/components/components/modalTwo/ModalFooter';
import ModalHeader from '@proton/components/components/modalTwo/ModalHeader';
import { ModalStateProps } from '@proton/components/components/modalTwo/useModalState';
import Table from '@proton/components/components/table/Table';
import TableBody from '@proton/components/components/table/TableBody';
import TableCell from '@proton/components/components/table/TableCell';
import TableHeader from '@proton/components/components/table/TableHeader';
import TableHeaderCell from '@proton/components/components/table/TableHeaderCell';
import TableRow from '@proton/components/components/table/TableRow';
import clsx from '@proton/utils/clsx';

import { WasmOutPoint } from '../../../../../pkg';
import { BitcoinAmount } from '../../../../atoms';
import { AccountWithBlockchainData } from '../../../../types';
import { useManualCoinSelectionModal } from './useManualCoinSelectionModal';

interface Props {
    modalState: ModalStateProps;
    account?: AccountWithBlockchainData;
    selectedUtxos: WasmOutPoint[];
    onCoinSelected: (coins: WasmOutPoint[]) => void;
}

export const ManualCoinSelectionModal = ({ modalState, account, selectedUtxos, onCoinSelected }: Props) => {
    const { utxos, activeUtxo, setActiveUtxo, tmpSelectedUtxos, toggleUtxoSelection, confirmCoinSelection } =
        useManualCoinSelectionModal(modalState.open, selectedUtxos, onCoinSelected, account);

    const title = c('Wallet Send').t`Select coins`;

    return (
        <ModalTwo {...modalState} title={title} size="large" enableCloseWhenClickOutside>
            <ModalHeader title={title} />

            <ModalContent className="mt-2 pt-2">
                <div className="max-h-custom overflow-y-auto flex" style={{ '--max-h-custom': '20rem' }}>
                    {utxos.length ? (
                        <Table className="text-sm">
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderCell className="w-4/10">{c('Wallet Send').t`Outpoint`}</TableHeaderCell>
                                    <TableHeaderCell className="w-3/10">{c('Wallet Send').t`Value`}</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {utxos.map((utxo) => {
                                    const { outpoint } = utxo;
                                    const isSelected = tmpSelectedUtxos.includes(outpoint);
                                    const isActive = activeUtxo === outpoint;

                                    const background = (() => {
                                        if (isSelected) {
                                            return isActive
                                                ? 'var(--interaction-norm-major-1)'
                                                : 'var(--interaction-norm)';
                                        }

                                        return isActive
                                            ? 'var(--interaction-weak-minor-2)'
                                            : 'var(--interaction-default)';
                                    })();

                                    return (
                                        <TableRow
                                            onMouseEnter={() => setActiveUtxo(outpoint)}
                                            onMouseLeave={() => setActiveUtxo(undefined)}
                                            key={outpoint}
                                            onClick={() => toggleUtxoSelection(outpoint)}
                                            className={clsx(
                                                'cursor-pointer',
                                                isSelected ? 'color-invert' : 'color-norm'
                                            )}
                                            style={{ background }}
                                        >
                                            <TableCell>
                                                {outpoint.slice(0, 10)}...
                                                {outpoint.slice(-10)}
                                            </TableCell>
                                            <TableCell>
                                                <BitcoinAmount>{Number(utxo.value)}</BitcoinAmount>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="m-auto text-semibold">{c('Wallet Send').t`No coin available`}</div>
                    )}
                </div>

                <ModalFooter>
                    <Button className="ml-auto" onClick={modalState.onClose}>{c('Wallet Send').t`Cancel`}</Button>
                    <Button color="norm" className="ml-3" onClick={() => confirmCoinSelection()}>{c('Wallet Send')
                        .t`Done`}</Button>
                </ModalFooter>
            </ModalContent>
        </ModalTwo>
    );
};
