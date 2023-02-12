import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppBar } from '@/components/AppBar';
import { NavigationPanel } from '@/components/NavigationPanel';
import { PathNames } from '@/core/configs/paths';
import { AppBaseContainer } from '@/core/layouts/AppBaseContainer';
import { AppLayoutWithNavBar } from '@/core/layouts/AppLayoutWithNavBar';
import { ContextMenuPage } from '@/pages/ContextMenuPage';
import { IconMenuItemPage } from '@/pages/IconMenuItemPage';
import { InstallationPage } from '@/pages/InstallationPage';
import { NestedDropdownPage } from '@/pages/NestedDropdownPage';
import { NestedMenuItemPage } from '@/pages/NestedMenuItemPage';

const siteRoutes = (
    <Route element={<AppBaseContainer />}>
        <Route
            element={<AppLayoutWithNavBar appbar={<AppBar />} panelContent={<NavigationPanel />} />}
            path="/"
        >
            <Route element={<ContextMenuPage />} path={PathNames.CONTEXT_MENU} />
            <Route element={<IconMenuItemPage />} path={PathNames.ICON_MENU_ITEM} />
            <Route element={<InstallationPage />} path={PathNames.INSTALLATION} />
            <Route element={<NestedDropdownPage />} path={PathNames.NESTED_DROPDOWN} />
            <Route element={<NestedMenuItemPage />} path={PathNames.NESTED_MENU_ITEM} />
        </Route>
        <Route element={<Navigate to={PathNames.INSTALLATION} />} index />
    </Route>
);

export const SiteRouter: FC = () => {
    return <Routes>{siteRoutes}</Routes>;
};
