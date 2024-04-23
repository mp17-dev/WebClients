import { c } from 'ttag';

import { Button } from '@proton/atoms/Button';
import { PLANS } from '@proton/shared/lib/constants';
import { Organization } from '@proton/shared/lib/interfaces';
import lightlabellingUpsellSvg from '@proton/styles/assets/img/illustrations/account-lightlabelling-upsell.svg';

import { PromotionBanner } from '../../banner';
import { SUBSCRIPTION_STEPS, useSubscriptionModal } from '../../payments';

interface UpsellBannerProps {
    organization: Organization;
    canAccessLightLabelling: boolean;
    isPartOfFamily: boolean;
    isLightLabellingEnabled: boolean;
}

export const OrganizationLogoUploadUpsellBanner = ({
    organization,
    canAccessLightLabelling,
    isPartOfFamily,
    isLightLabellingEnabled,
}: UpsellBannerProps) => {
    const [openSubscriptionModal] = useSubscriptionModal();

    const currentPlan = organization.PlanName;

    const isVisionary = currentPlan === PLANS.NEW_VISIONARY;

    const upgradePlanMapping: { [key in PLANS]?: PLANS } = {
        [PLANS.MAIL_PRO]: PLANS.BUNDLE_PRO,
        [PLANS.VPN_PRO]: PLANS.VPN_BUSINESS,
        [PLANS.PASS_PRO]: PLANS.PASS_BUSINESS,
    };

    const handleUpgradeClick = () => {
        const newPlan = upgradePlanMapping[currentPlan as PLANS];

        if (newPlan) {
            openSubscriptionModal({
                metrics: {
                    source: 'upsells',
                },
                step: SUBSCRIPTION_STEPS.CHECKOUT_WITH_CUSTOMIZATION,
                plan: newPlan,
            });
        }
    };

    if (!isLightLabellingEnabled || canAccessLightLabelling || isPartOfFamily || isVisionary) {
        return;
    }

    return (
        <PromotionBanner
            mode="banner"
            rounded
            contentCentered={false}
            icon={<img width="45" src={lightlabellingUpsellSvg} alt="" className="shrink-0" />}
            description={
                <div>
                    <b>{c('Info').t`Custom branding`}</b>
                    <div>
                        {c('Info')
                            .t`Upload your organization’s logo to boost your brand identity and create a personalized experience for your users.`}
                    </div>
                </div>
            }
            cta={
                <Button color="norm" fullWidth onClick={handleUpgradeClick}>
                    {c('Action').t`Upgrade to Business`}
                </Button>
            }
        />
    );
};
