import { useState } from 'react';

import { c } from 'ttag';

import { Button } from '@proton/atoms/Button';
import { Href } from '@proton/atoms/Href';
import { RadioGroup } from '@proton/components/components';
import { useApi, useAssistantSubscriptionStatus, useEventManager, useUserSettings } from '@proton/components/hooks';
import useLoading from '@proton/hooks/useLoading';
import { useAssistant } from '@proton/llm/lib';
import { updateAIAssistant } from '@proton/shared/lib/api/settings';
import { BRAND_NAME } from '@proton/shared/lib/constants';
import { wait } from '@proton/shared/lib/helpers/promise';
import { AI_ASSISTANT_ACCESS } from '@proton/shared/lib/interfaces';

import ComposerInnerModal from 'proton-mail/components/composer/modals/ComposerInnerModal';
import { ASSISTANT_INPUT_ID } from 'proton-mail/constants';

const { SERVER_ONLY, CLIENT_ONLY, UNSET } = AI_ASSISTANT_ACCESS;

interface Props {
    onClose: () => void;
}

const InnerModalAssistantSetting = ({ onClose }: Props) => {
    const api = useApi();
    const { call } = useEventManager();
    const { hasCompatibleBrowser, hasCompatibleHardware } = useAssistant();
    const [loading, withLoading] = useLoading();
    const [{ AIAssistantFlags }] = useUserSettings();
    const { trialStatus, start: startTrial } = useAssistantSubscriptionStatus();

    // Default to server only if unset
    const [inputValue, setInputValue] = useState<AI_ASSISTANT_ACCESS>(
        UNSET === AIAssistantFlags ? SERVER_ONLY : AIAssistantFlags
    );
    const canRunLocally = hasCompatibleBrowser && hasCompatibleHardware;

    const onSubmit = async () => {
        if (AIAssistantFlags !== inputValue) {
            await api(updateAIAssistant(inputValue));
            await call();
        }

        if (trialStatus === 'trial-not-started') {
            await startTrial();
        }

        // TODO: This is a workaround to avoid failure with sending the assistant input click event
        // Wait for proper state update before closing the modal
        await wait(100);

        onClose();

        // trigger click on input to continue the assistant flow
        const input = document.getElementById(ASSISTANT_INPUT_ID);
        input?.click();
    };

    const PrivacyLink = (
        <Href href="https://protonmail.com/privacy-policy">{
            // translator: full sentence => Learn more about <Proton's industry-leading privacy>`
            c('Link').t`${BRAND_NAME}'s industry-leading privacy`
        }</Href>
    );

    return (
        <ComposerInnerModal
            title={c('Header').t`Set up the writing assistant`}
            onCancel={onClose}
            displayCancel={false}
            submitActions={
                <>
                    <Button fullWidth color="norm" onClick={() => withLoading(onSubmit)} loading={loading}>
                        {c('Action').t`Get started`}
                    </Button>
                    {trialStatus === 'trial-not-started' && (
                        <div className="color-weak pt-4 text-center">{c('Info').t`Free for 14 days`}</div>
                    )}
                </>
            }
        >
            <div className="flex flex-column flex-nowrap gap-2 mt-4">
                <RadioGroup<AI_ASSISTANT_ACCESS>
                    name="assistant-runtime"
                    value={inputValue}
                    className="flex-nowrap border-bottom border-weak pb-2 radio--ontop"
                    disableChange={loading}
                    onChange={(value) => {
                        setInputValue(value);
                    }}
                    options={[
                        {
                            value: SERVER_ONLY,
                            label: (
                                <div>
                                    <h2 className="text-rg">{c('Assistant option').t`Run on ${BRAND_NAME} servers`}</h2>
                                    <ul className="m-0 mt-1 pl-4 color-weak">
                                        <li>{c('Assistant option').t`Fast and secure`}</li>
                                        <li>{c('Assistant option').t`No logs`}</li>
                                        <li>{c('Assistant option').t`Runs on all devices`}</li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            value: CLIENT_ONLY,
                            disabled: !canRunLocally,
                            label: (
                                <div>
                                    <h2 className="text-rg">{c('Assistant option').t`Run locally`}</h2>
                                    <ul className="m-0 mt-1 pl-4 color-weak">
                                        <li>{c('Assistant option').t`Runs on your device`}</li>
                                        <li>{c('Assistant option').t`Requires one-time download`}</li>

                                        {hasCompatibleHardware ? (
                                            <li>{c('Assistant option').t`Needs compatible hardware`}</li>
                                        ) : (
                                            <li className="color-danger">{c('Assistant options')
                                                .t`Hardware not compatible`}</li>
                                        )}

                                        {!hasCompatibleBrowser && (
                                            <li className="color-danger">{c('Assistant option')
                                                .t`Browser not supported `}</li>
                                        )}
                                    </ul>
                                </div>
                            ),
                        },
                    ]}
                />
            </div>
            <p className="my-2 color-weak">
                {
                    // translator: Full sentence => Learn more about <Proton's industry-leading privacy>`
                    c('Info').jt`Learn more about ${PrivacyLink}`
                }{' '}
            </p>
        </ComposerInnerModal>
    );
};

export default InnerModalAssistantSetting;
