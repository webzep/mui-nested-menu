import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

const Scroller = styled.div<ScrollableProps>`
    ${({ maxHeight }) => css`
        display: flex;
        flex-direction: column;
        max-height: ${maxHeight ?? ''};
        overflow-y: scroll;
    `}
`;

type ScrollableProps = {
    children: ReactNode;
    maxHeight?: string;
};

export const Scrollable = forwardRef<HTMLDivElement, ScrollableProps & HTMLAttributes<HTMLDivElement>>(
    function Scrollable(props, ref) {
        return <Scroller ref={ref} {...props} />;
    }
);
