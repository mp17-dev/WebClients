import {
    CalendarDrawerAppButton,
    ContactDrawerAppButton,
    SecurityCenterDrawerAppButton,
    WalletDrawerAppButton,
} from '@proton/components/components';
import { useFlag } from '@proton/components/containers';
import { useDrawer } from '@proton/components/hooks';
import { APPS } from '@proton/shared/lib/constants';
import { isAppInView } from '@proton/shared/lib/drawer/helpers';
import { DRAWER_NATIVE_APPS } from '@proton/shared/lib/drawer/interfaces';
import isTruthy from '@proton/utils/isTruthy';

const useMailDrawer = () => {
    const { appInView, showDrawerSidebar } = useDrawer();
    const canAccessWallet = useFlag('WalletAccess'); // This includes a restriction to visionary2022 plan controlled remotely

    const drawerSidebarButtons = [
        <ContactDrawerAppButton aria-expanded={isAppInView(DRAWER_NATIVE_APPS.CONTACTS, appInView)} />,
        <CalendarDrawerAppButton aria-expanded={isAppInView(APPS.PROTONCALENDAR, appInView)} />,
        canAccessWallet && <WalletDrawerAppButton />,
        <SecurityCenterDrawerAppButton aria-expanded={isAppInView(DRAWER_NATIVE_APPS.SECURITY_CENTER, appInView)} />,
    ].filter(isTruthy);

    return { drawerSidebarButtons, showDrawerSidebar };
};

export default useMailDrawer;
