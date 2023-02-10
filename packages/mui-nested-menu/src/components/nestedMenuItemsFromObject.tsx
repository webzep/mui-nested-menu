import React from 'react';
import { NestedMenuItem } from './NestedMenuItem';
import { IconMenuItem } from './IconMenuItem';
import { MenuItemData } from '../definitions';

export interface nestedMenuItemsFromObjectProps {
	menuItemsData: MenuItemData[];
	isOpen: boolean;
	handleClose: () => void;
}

/**
 * Create a JSX element with nested elements creating a nested menu.
 * Every menu item should have a uid provided
 */
export function nestedMenuItemsFromObject({
	menuItemsData: items,
	isOpen,
	handleClose,
}: nestedMenuItemsFromObjectProps) {
	return items.map((item) => {
		const { leftIcon, rightIcon, label, items, callback, sx, disabled } =
			item;

		if (items && items.length > 0) {
			// Recurse deeper
			return (
				<NestedMenuItem
					key={label}
					leftIcon={leftIcon}
					rightIcon={rightIcon}
					label={label}
					parentMenuOpen={isOpen}
					sx={sx}
					disabled={disabled}
				>
					{/* Call this function to nest more items */}
					{nestedMenuItemsFromObject({
						menuItemsData: items,
						isOpen,
						handleClose,
					})}
				</NestedMenuItem>
			);
		} else {
			// No children elements, return MenuItem
			return (
				<IconMenuItem
					key={label}
					leftIcon={leftIcon}
					rightIcon={rightIcon}
					label={label}
					onClick={(event: React.MouseEvent<HTMLElement>) => {
						handleClose();
						callback && callback(event, item);
					}}
					sx={sx}
					disabled={disabled}
				/>
			);
		}
	});
}
