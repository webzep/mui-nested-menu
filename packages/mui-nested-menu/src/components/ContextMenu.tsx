import Menu from '@mui/material/Menu';
import { forwardRef, MouseEvent, MutableRefObject, ReactNode, useRef, useState } from 'react';

import { MenuItemData } from '../definitions';
import { nestedMenuItemsFromObject } from './nestedMenuItemsFromObject';

export type ContextMenuProps = {
    children?: ReactNode;
    menuItems?: ReactNode[];
    menuItemsData?: MenuItemData[];
};

type Position = {
    top: number;
    left: number;
};

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(function ContextMenu(
    { children, menuItems, menuItemsData },
    ref
) {
    const wrapperRef = (ref as MutableRefObject<HTMLDivElement>) ?? useRef<HTMLDivElement>(null);

    const [menuPosition, setMenuPosition] = useState<Position | null>(null);

    const [mouseDownPosition, setMouseDownPosition] = useState<Position | null>(null);

    const handleItemClick = () => setMenuPosition(null);

    const handleMouseDown = (e: MouseEvent) => {
        if (menuPosition !== null) setMenuPosition(null);

        if (e.button !== 2) return;

        const wrapperBounds = wrapperRef.current.getBoundingClientRect();

        if (
            e.clientX < wrapperBounds.left ||
            e.clientX > wrapperBounds.right ||
            e.clientY < wrapperBounds.top ||
            e.clientY > wrapperBounds.bottom
        ) {
            return;
        }

        setMouseDownPosition({
            left: e.clientX,
            top: e.clientY,
        });
    };

    const handleMouseUp = (e: MouseEvent) => {
        const top = e.clientY;
        const left = e.clientX;

        if (mouseDownPosition === null) return;

        if (mouseDownPosition.top === top && mouseDownPosition.left === left) {
            setMenuPosition({
                left: e.clientX,
                top: e.clientY,
            });
        }
    };

    const menuContents =
        menuItems ??
        (menuItemsData &&
            nestedMenuItemsFromObject({
                handleClose: handleItemClick,
                isOpen: !!menuPosition,
                menuItemsData: menuItemsData,
            }));

    return (
        <div
            ref={wrapperRef}
            onContextMenu={(e) => e.preventDefault()}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {menuPosition && (
                <Menu
                    onContextMenu={(e) => e.preventDefault()}
                    open={!!menuPosition}
                    onClose={() => setMenuPosition(null)}
                    anchorReference="anchorPosition"
                    anchorPosition={menuPosition}
                >
                    {menuContents}
                </Menu>
            )}
            {children}
        </div>
    );
});
