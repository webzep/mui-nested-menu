import React, {useState, forwardRef} from 'react';
import {Menu} from '@mui/material';
import {nestedMenuItemsFromObject} from './nestedMenuItemsFromObject';
import {MenuItemData} from '../definitions';

export interface ContextMenuProps {
  children?: React.ReactNode;
  menuItems?: React.ReactNode[];
  menuItemsData?: MenuItemData[];
  ContainerProps?: React.HTMLAttributes<HTMLElement> &
    React.RefAttributes<HTMLElement | null>;
}

interface Position {
  top: number;
  left: number;
}

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({children, menuItems, menuItemsData, ContainerProps}, ref) => {
    const [menuPosition, setMenuPosition] = useState<Position>(null);

    const [mouseDownPosition, setMouseDownPosition] = useState<Position>(null);

    const handleItemClick = () => setMenuPosition(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (ContainerProps?.onMouseDown) ContainerProps.onMouseDown(e);

      if (menuPosition !== null) setMenuPosition(null);

      if (e.button !== 2) return;

      setMouseDownPosition({top: e.clientY, left: e.clientX});
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (ContainerProps?.onMouseUp) ContainerProps.onMouseUp(e);

      const top = e.clientY;
      const left = e.clientX;

      if (mouseDownPosition === null) return;

      if (mouseDownPosition.top === top && mouseDownPosition.left === left) {
        setMenuPosition({top: e.clientY, left: e.clientX});
      }
    };

    const menuContents =
      menuItems ??
      (menuItemsData &&
        nestedMenuItemsFromObject({
          menuItemsData: menuItemsData,
          isOpen: !!menuPosition,
          handleClose: handleItemClick,
        }));

    return (
      <div
        {...ContainerProps}
        ref={ref}
        onContextMenu={e => e.preventDefault()}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Menu
          onContextMenu={e => e.preventDefault()}
          open={!!menuPosition}
          onClose={() => setMenuPosition(null)}
          anchorReference="anchorPosition"
          anchorPosition={menuPosition}
        >
          {menuContents}
        </Menu>
        {children}
      </div>
    );
  },
);

ContextMenu.displayName = 'ContextMenu';
export {ContextMenu};
