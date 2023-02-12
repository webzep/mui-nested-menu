import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode } from 'react';

const PaddingContainer = styled.div<PaddingProps>`
    ${({ multiplier, theme }) => css`
        display: inherit;
        flex-direction: inherit;
        height: inherit;
        padding: calc(${theme.sizes.padding} * ${multiplier ?? 1});
        width: inherit;
    `};
`;

export type PaddingProps = {
    children: ReactNode;
    multiplier: number;
};

export const Padding = forwardRef<HTMLDivElement, PaddingProps>(function Padding(
    { children, ...props },
    ref
) {
    return (
        <PaddingContainer ref={ref} {...props}>
            {children}
        </PaddingContainer>
    );
});
