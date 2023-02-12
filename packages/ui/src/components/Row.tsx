import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode } from 'react';

import { ReactHTMLProps } from '../core/types/interfaces';

type RowCssProps = {
    align?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
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

type HiddenCssProps = {
    wrap?: number;
};

const RowContainer = styled.div<RowCssProps & HiddenCssProps>`
    ${({ align, justify, gap, wrap }) => css`
        align-items: ${align};
        display: flex;
        flex-direction: row;
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        gap: ${gap};
        justify-content: ${justify};
        padding: 0px;
        width: 100%;
    `};
`;

export type RowProps = ReactHTMLProps<HTMLDivElement> &
    RowCssProps & {
        children: ReactNode;
        wrap?: boolean;
    };

export const Row = forwardRef<HTMLDivElement, RowProps>(function Row({ children, wrap, ...props }, ref) {
    return (
        <RowContainer ref={ref} wrap={wrap ? 1 : 0} {...props}>
            {children}
        </RowContainer>
    );
});
