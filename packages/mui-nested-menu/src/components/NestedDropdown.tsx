import Button, { ButtonProps } from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import { forwardRef, useState } from 'react';

import { MenuItemData } from '../definitions';
import { ChevronDown } from '../icons/ChevronDown';
import { nestedMenuItemsFromObject } from './nestedMenuItemsFromObject';

interface NestedDropdownProps {
    children?: React.ReactNode;
    menuItemsData?: MenuItemData;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    ButtonProps?: Partial<ButtonProps>;
    MenuProps?: Partial<MenuProps>;
}

export const NestedDropdown = forwardRef<HTMLDivElement | null, NestedDropdownProps>(function NestedDropdown(
    props,
    ref
) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const { menuItemsData: data, onClick, ButtonProps, MenuProps, ...rest } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
        onClick && onClick(e);
    };
    const handleClose = () => setAnchorEl(null);

    const menuItems = nestedMenuItemsFromObject({
        handleClose,
        isOpen: open,
        menuItemsData: data?.items ?? [],
    });

    return (
        <div ref={ref} {...rest}>
            <Button onClick={handleClick} endIcon={<ChevronDown />} {...ButtonProps}>
                {data?.label ?? 'Menu'}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} {...MenuProps}>
                {menuItems}
            </Menu>
        </div>
    );
});
