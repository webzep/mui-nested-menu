import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode } from 'react';

const MaxContainer = styled.div<MaxProps>`
    ${({ height, width }) => css`
        display: flex;
        flex-direction: column;
        height: ${height ? height : '100%'};
        max-height: ${height ? height : '100%'};
        max-width: ${width ? width : '100%'};
        padding: 0px;
        width: ${width ? width : '100%'};
    `};
`;

export type MaxProps = {
    children: ReactNode;
    height?: string;
    width?: string;
};

export const Max = forwardRef<HTMLDivElement, MaxProps>(function Max({ children, ...props }, ref) {
    return (
        <MaxContainer ref={ref} {...props}>
            {children}
        </MaxContainer>
    );
});
