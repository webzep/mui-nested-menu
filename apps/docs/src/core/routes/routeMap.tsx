import { ReactNode } from 'react';
import { Route } from 'react-router';

import { InstallationPage } from '@/pages/Installation';
import { ContextMenuPage } from '@/pages/ContextMenuPage';
import { NestedMenuItemPage } from '@/pages/NestedMenuItem';
import { IconMenuItemPage } from '@/pages/IconMenuItemPage';
import { NestedDropdownPage } from '@/pages/NestedDropdownPage';
import { Button } from 'ui';
import { PathNames } from '../configs/paths';

export const getPageFromRoute = (route: string): { name: string; page: ReactNode } | null => {
    let page = null;

    Object.entries(componentsRouteMap).forEach(([pageSlug, info]) => {
        const pageRoute = `/${pageSlug}`;
        if (route === pageRoute || route === pageRoute + '/') {
            page = info;
        }
    });

    return page;
};

export const cleanRoute = (route: string) => {
    const splitPath = route.split('/');
    return splitPath.filter((v) => !!v).join('/');
};

export const getRoutesList = () => {
    const routes: string[] = [];

    Object.keys(componentsRouteMap).forEach((key) => routes.push(key));

    return routes;
};

export const getMenuItems = (handleClick: (slug: string) => void) => {
    // const items: ReactNode[] = [];
    // Object.entries(componentsRouteMap).forEach(([pageSlug, info]) => {
    //     items.push(
    //         <Button key={pageSlug} onClick={() => handleClick(`${pageSlug}`)}>
    //             {info.name}
    //         </Button>
    //     );
    // });
    // return items;
};

// export const createSectionRoutes = () => {
// const routes: ReactNode[] = [];
// Object.entries(componentsRouteMap).forEach(([route, info]) => {
//     routes.push(<Route key={route} path={route} element={info.page} />);
// });
// return routes;
// };

const componentsRouteMap = {
    [PathNames.INSTALLATION]: {
        name: 'Installation',
        // page: <InstallationPage />,
    },
    [PathNames.CONTEXT_MENU]: {
        name: 'ContextMenu',
        // page: <ContextMenuPage />,
    },
    [PathNames.NESTED_DROPDOWN]: {
        name: 'NestedDropdown',
        // page: <NestedDropdownPage />,
    },
    [PathNames.NESTED_MENU_ITEM]: {
        name: 'NestedMenuItem',
        // page: <NestedMenuItemPage />,
    },
    [PathNames.ICON_MENU_ITEM]: {
        name: 'IconMenuItem',
        // page: <IconMenuItemPage />,
    },
};
