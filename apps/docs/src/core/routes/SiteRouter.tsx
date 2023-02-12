import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppBar } from '@/components/AppBar';
import { PathNames } from '@/core/configs/paths';
import { AppBaseContainer } from '@/core/layouts/AppBaseContainer';
import { AppLayoutWithNavBar } from '@/core/layouts/AppLayoutWithNavBar';
import { ContextMenuPage } from '@/pages/ContextMenuPage';
import { IconMenuItemPage } from '@/pages/IconMenuItemPage';
import { InstallationPage } from '@/pages/Installation';
import { NestedDropdownPage } from '@/pages/NestedDropdownPage';
import { NestedMenuItemPage } from '@/pages/NestedMenuItem';
import { NavigationPanel } from '@/components/NavigationPanel';

const siteRoutes = (
    <Route element={<AppBaseContainer />}>
        <Route
            path="/"
            element={<AppLayoutWithNavBar appbar={<AppBar />} panelContent={<NavigationPanel />} />}
        >
            <Route path={PathNames.CONTEXT_MENU} element={<ContextMenuPage />} />
            <Route path={PathNames.ICON_MENU_ITEM} element={<IconMenuItemPage />} />
            <Route path={PathNames.INSTALLATION} element={<InstallationPage />} />
            <Route path={PathNames.NESTED_DROPDOWN} element={<NestedDropdownPage />} />
            <Route path={PathNames.NESTED_MENU_ITEM} element={<NestedMenuItemPage />} />
        </Route>
        <Route path="*" element={<Navigate to={PathNames.INSTALLATION} />} />
    </Route>
);

export const SiteRouter: FC = () => {
    return <Routes>{siteRoutes}</Routes>;
};
