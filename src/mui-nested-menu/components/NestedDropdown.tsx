import React from 'react';
import {nestedMenuItemsFromObject} from './nestedMenuItemsFromObject';
import {Button, ButtonProps, Menu, MenuProps} from '@mui/material';
import {ChevronDown} from '@mui-nested-menu/icons/ChevronDown';
import {MenuItemData} from '..';

interface NestedDropdownProps {
  children?: React.ReactNode;
  menuItemsData?: MenuItemData;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ButtonProps?: Partial<ButtonProps>;
  MenuProps?: Partial<MenuProps>;
}

export const NestedDropdown = React.forwardRef<
  HTMLDivElement | null,
  NestedDropdownProps
>(function NestedDropdown(props, ref) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const {menuItemsData: data, onClick, ButtonProps, MenuProps, ...rest} = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    onClick && onClick(e);
  };
  const handleClose = () => setAnchorEl(null);

  const menuItems = nestedMenuItemsFromObject({
    menuItemsData: data.items,
    isOpen: open,
    handleClose,
  });

  return (
    <div ref={ref} {...rest}>
      <Button onClick={handleClick} endIcon={<ChevronDown />} {...ButtonProps}>
        {data.label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...MenuProps}
      >
        {menuItems}
      </Menu>
    </div>
  );
});
