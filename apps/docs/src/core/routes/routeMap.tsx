import { ReactNode } from 'react';

import { PathNames } from '@/core/configs/paths';

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

const componentsRouteMap = {
    [PathNames.INSTALLATION]: {
        name: 'Installation',
    },
    [PathNames.CONTEXT_MENU]: {
        name: 'ContextMenu',
    },
    [PathNames.NESTED_DROPDOWN]: {
        name: 'NestedDropdown',
    },
    [PathNames.NESTED_MENU_ITEM]: {
        name: 'NestedMenuItem',
    },
    [PathNames.ICON_MENU_ITEM]: {
        name: 'IconMenuItem',
    },
};
