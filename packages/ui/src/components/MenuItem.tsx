import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode } from 'react';

import { ReactHTMLProps } from '../core/types/interfaces';
import { Button } from './Button';

const MenuItemContainer = styled(Button)<MenuItemProps>`
    ${({ align, justify, theme }) => css`
        color: ${theme.palette.font2};
        justify-content: ${justify ?? ''};
        text-align: ${align ?? ''};
    `};
`;

export type MenuItemProps = ReactHTMLProps<HTMLButtonElement> & {
    align?: 'flex-start' | 'center' | 'flex-end';
    endIcon?: ReactNode;
    justify?: 'flex-start' | 'center' | 'flex-end';
    label: string;
    onClick?: () => void;
    startIcon?: ReactNode;
    /** Used for the Select component. Where the value passed to the Select will try to match this value. */
    value?: string | number;
};

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(props, ref) {
    return <MenuItemContainer ref={ref} variant="text" {...props} />;
});
