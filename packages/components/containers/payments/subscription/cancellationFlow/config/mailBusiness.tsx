import { PLANS, PLAN_NAMES } from '@proton/shared/lib/constants';
import humanSize from '@proton/shared/lib/helpers/humanSize';
import type { SubscriptionModel, SubscriptionPlan } from '@proton/shared/lib/interfaces';

import type {
    ConfirmationModal,
    PlanConfig,
    PlanConfigFeatures,
    PlanConfigStorage,
    PlanConfigTestimonial,
} from '../interface';
import {
    getDefaultConfirmationModal,
    getDefaultFeatures,
    getDefaultGBStorageWarning,
    getDefaultReminder,
    getDefaultTestimonial,
} from './b2bCommonConfig';

export const getMailBusinessConfig = (
    subscription: SubscriptionModel,
    plan: SubscriptionPlan & { Name: PLANS },
    newCancellationPolicy?: boolean
): PlanConfig => {
    const currentPlan = PLANS.MAIL_BUSINESS;
    const planName = PLAN_NAMES[currentPlan];
    const planMaxSpace = humanSize({ bytes: plan.MaxSpace, unit: 'GB', fraction: 0 });

    const reminder = getDefaultReminder(planName);
    const testimonials: PlanConfigTestimonial = getDefaultTestimonial(planName);
    const features: PlanConfigFeatures = getDefaultFeatures(planName, planMaxSpace, plan.MaxAddresses, plan.MaxDomains);
    const storage: PlanConfigStorage = getDefaultGBStorageWarning(planName, planMaxSpace, newCancellationPolicy);
    const confirmationModal: ConfirmationModal = getDefaultConfirmationModal(
        subscription,
        planName,
        newCancellationPolicy
    );

    return {
        planName,
        reminder,
        testimonials,
        features,
        storage,
        confirmationModal,
        plan: currentPlan,
    };
};
