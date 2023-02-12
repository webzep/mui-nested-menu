import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

import { SnackbarProviderProps } from './SnackbarProvider';

export const Snackbar = styled.div<SnackbarProviderProps>`
    ${({ position, margin, minWidth, theme }) => {
        const left = position && ['top', 'bottom'].includes(position) ? '50vw' : null;

        return css`
            bottom: ${position?.includes('bottom') ? margin?.bottom + 'px' : ''};
            display: flex;
            flex-direction: ${position?.includes('top') ? 'column' : 'column-reverse'};
            left: ${left ?? position?.includes('left') ? margin?.left + 'px' : ''};
            min-height: fit-content;
            min-width: ${minWidth};
            position: fixed;
            right: ${position?.includes('right') ? margin?.right + 'px' : ''};
            top: ${position?.includes('top') ? margin?.top + 'px' : ''};
            transform: ${position && ['top', 'bottom'].includes(position) ? 'translateX(-50%)' : ''};
            transition-duration: 500ms;
            transition: min-height;
            z-index: ${theme.zIndex.snackbar};
        `;
    }}
`;

export type MessageVariant = 'error' | 'info' | 'success' | 'warning';

export type SnackbarMessage = {
    content: ReactNode;
    duration?: number;
    persist?: boolean;
    variant: MessageVariant;
    width?: string;
};
