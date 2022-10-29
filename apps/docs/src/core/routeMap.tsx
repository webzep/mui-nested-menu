import React from 'react';
import { Route } from 'react-router';

// Pages
import { InstallationPage } from 'pages/Installation';
import { ContextMenuPage } from 'pages/ContextMenuPage';
import { NestedMenuItemPage } from 'pages/NestedMenuItem';
import { IconMenuItemPage } from 'pages/IconMenuItemPage';
import { NestedDropdownPage } from 'pages/NestedDropdownPage';
import { NavigationItem } from 'themestress/components';

export const getPageFromRoute = (
	route: string
): { name: string; page: React.ReactNode } | null => {
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
	const items: React.ReactNode[] = [];
	Object.entries(componentsRouteMap).forEach(([pageSlug, info]) => {
		items.push(
			<NavigationItem key={pageSlug} onClick={() => handleClick(`${pageSlug}`)}>
				{info.name}
			</NavigationItem>
		);
	});
	return items;
};

export const createSectionRoutes = () => {
	const routes: React.ReactNode[] = [];
	Object.entries(componentsRouteMap).forEach(([route, info]) => {
		routes.push(<Route key={route} path={route} element={info.page} />);
	});
	return routes;
};

export const componentsRouteMap = {
	installation: { name: 'Installation', page: <InstallationPage /> },
	'context-menu': { name: 'ContextMenu', page: <ContextMenuPage /> },
	'nested-dropdown': { name: 'NestedDropdown', page: <NestedDropdownPage /> },
	'nested-menu-item': { name: 'NestedMenuItem', page: <NestedMenuItemPage /> },
	'icon-menu-item': { name: 'IconMenuItem', page: <IconMenuItemPage /> },
};
