import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { LabelStack } from '@proton/components';
import { toMap } from '@proton/shared/lib/helpers/object';
import { Label } from '@proton/shared/lib/interfaces/Label';
import clsx from '@proton/utils/clsx';
import isTruthy from '@proton/utils/isTruthy';
import orderBy from '@proton/utils/orderBy';

import { getLabelIDs } from '../../helpers/elements';
import { useApplyLabels } from '../../hooks/actions/label/useApplyLabels';
import { Element } from '../../models/element';

interface Props {
    element?: Element;
    labelID: string;
    labels?: Label[];
    className?: string;
    isCollapsed?: boolean;
    maxNumber?: number;
    showDropdown?: boolean;
}

const ItemLabels = ({
    element,
    labelID,
    labels = [],
    className = '',
    isCollapsed = true,
    maxNumber,
    showDropdown = true,
}: Props) => {
    const history = useHistory();
    const { applyLabels } = useApplyLabels();

    const labelsSorted = useMemo<Label[]>(() => {
        const labelIDs = Object.keys(getLabelIDs(element, labelID));
        const labelsMap = toMap(labels);
        const labelsObjects = labelIDs.map((ID) => labelsMap[ID]).filter(isTruthy);
        return orderBy(labelsObjects, 'Order');
    }, [element, labelID, labels]);

    if (!labelsSorted.length) {
        return null;
    }

    const handleGo = (label: Label) => () => history.push(`/${label.ID}`);

    const handleUnlabel = (labelID: string) => () =>
        applyLabels({
            elements: [element || ({} as Element)],
            changes: { [labelID]: false },
            labelID,
        });

    const labelsDescription = labelsSorted.map((label) => ({
        name: label.Name,
        color: label.Color,
        title: label.Name,
        onClick: handleGo(label),
        onDelete: handleUnlabel(label.ID),
    }));

    return (
        <LabelStack
            labels={labelsDescription}
            className={clsx([className, isCollapsed && 'justify-end'])}
            isStacked={isCollapsed}
            maxNumber={maxNumber}
            showDropDown={showDropdown}
        />
    );
};

export default ItemLabels;
