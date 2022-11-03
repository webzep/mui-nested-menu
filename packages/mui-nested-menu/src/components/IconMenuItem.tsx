import React, { forwardRef, RefObject } from 'react';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import styled from '@mui/material/styles/styled';
import { SxProps } from '@mui/system/styleFunctionSx';

const StyledMenuItem = styled(MenuItem)({
	paddingLeft: '4px',
	paddingRight: '4px',
	display: 'flex',
	justifyContent: 'space-between',
});

const StyledTypography = styled(Typography)({
	paddingLeft: '8px',
	paddingRight: '8px',
	textAlign: 'left',
});

const FlexBox = styled(Box)({
	display: 'flex',
});

interface IconMenuItemProps {
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	onClick?: () => void;
	label?: string;
	className?: string;
	MenuItemProps?: MenuItemProps;
	ref?: RefObject<HTMLLIElement>;
	disabled?: boolean;
	sx?: SxProps;
}

const IconMenuItem = forwardRef<HTMLLIElement, IconMenuItemProps>(
	({ leftIcon, rightIcon, label, MenuItemProps, className, ...props }, ref) => {
		return (
			<StyledMenuItem
				{...MenuItemProps}
				ref={ref}
				className={className}
				{...props}
			>
				<FlexBox>
					{leftIcon}
					<StyledTypography>{label}</StyledTypography>
				</FlexBox>
				{rightIcon}
			</StyledMenuItem>
		);
	}
);

IconMenuItem.displayName = 'IconMenuItem';
export { IconMenuItem };
