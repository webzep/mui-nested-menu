import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import React, { forwardRef, RefObject } from 'react';

const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '4px',
    paddingRight: '4px',
});

const StyledTypography = styled(Typography)({
    paddingLeft: '8px',
    paddingRight: '8px',
    textAlign: 'left',
});

const FlexBox = styled(Box)({
    display: 'flex',
});

type IconMenuItemProps = {
    MenuItemProps?: MenuItemProps;
    className?: string;
    disabled?: boolean;
    label?: string;
    leftIcon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    ref?: RefObject<HTMLLIElement>;
    rightIcon?: React.ReactNode;
    sx?: SxProps;
};

export const IconMenuItem = forwardRef<HTMLLIElement, IconMenuItemProps>(function IconMenuItem(
    { MenuItemProps, className, label, leftIcon, rightIcon, ...props },
    ref
) {
    return (
        <StyledMenuItem {...MenuItemProps} ref={ref} className={className} {...props}>
            <FlexBox>
                {leftIcon}
                <StyledTypography>{label}</StyledTypography>
            </FlexBox>
            {rightIcon}
        </StyledMenuItem>
    );
});
