import { requestActionsFactory } from '@proton/pass/store/request/flow';
import { UNIX_DAY } from '@proton/pass/utils/time/constants';

export const resolveWebsiteRules = requestActionsFactory<void, boolean>('website::rules::resolve')({
    success: { config: { maxAge: 2 * UNIX_DAY, data: null } },
});
