import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode } from 'react';

const ColumnContainer = styled.div<ColumnProps>`
    ${({ align, fullHeight, fullWidth, gap, justify }) => css`
        align-items: ${align};
        display: flex;
        flex-direction: column;
        gap: ${gap};
        height: ${fullHeight ? '100%' : ''};
        justify-content: ${justify};
        padding: 0px;
        width: ${fullWidth ? '100%' : ''};
    `};
`;

export type ColumnProps = {
    align?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
    children: ReactNode;
    fullHeight?: boolean;
    fullWidth?: boolean;
    gap?: string;
    justify?:
        | 'center'
        | 'flex-end'
        | 'flex-start'
        | 'left'
        | 'right'
        | 'space-around'
        | 'space-between'
        | 'space-evenly';
};

export const Column = forwardRef<HTMLDivElement, ColumnProps>(function Column({ children, ...props }, ref) {
    return (
        <ColumnContainer ref={ref} {...props}>
            {children}
        </ColumnContainer>
    );
});
