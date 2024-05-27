import { CYCLE, PLANS } from '@proton/shared/lib/constants';
import { getCheckout, getOptimisticCheckResult } from '@proton/shared/lib/helpers/checkout';
import { Cycle, PlanIDs, PlansMap, PriceType } from '@proton/shared/lib/interfaces';

const getRenewCycle = (cycle: Cycle, planIDs: PlanIDs): CYCLE => {
    // This is currently hardcoded. Once the payments backend supports renewals at different cycles, it will be changed to more generic code.
    // Currently there is no way to tell which plan renews at which cycle, so we have to hardcode it.
    const isSpecialRenewPlan = !!planIDs[PLANS.VPN2024];
    if (!isSpecialRenewPlan) {
        return cycle;
    }

    if (cycle === CYCLE.MONTHLY || cycle === CYCLE.THREE || cycle === CYCLE.YEARLY) {
        return cycle;
    }
    // 15,24,30 all renew at yearly.
    return CYCLE.YEARLY;
};

export const getOptimisticRenewCycleAndPrice = ({
    planIDs,
    plansMap,
    cycle,
}: {
    cycle: Cycle;
    planIDs: PlanIDs;
    plansMap: PlansMap;
}): {
    renewPrice: number;
    renewalLength: CYCLE;
} => {
    const nextCycle = getRenewCycle(cycle, planIDs);
    const latestCheckout = getCheckout({
        plansMap,
        planIDs,
        checkResult: getOptimisticCheckResult({
            planIDs,
            plansMap,
            cycle: nextCycle,
            priceType: PriceType.default,
        }),
        priceType: PriceType.default,
    });

    return {
        // The API doesn't return the correct next cycle or RenewAmount for the VPN plan since we don't have chargebee
        // So we calculate it with the cycle discount here
        renewPrice: latestCheckout.withDiscountPerCycle,
        renewalLength: nextCycle,
    };
};
