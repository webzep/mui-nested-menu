import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

const SpaceRoot = styled.div<SpaceProps>`
    ${({ vertical, size }) => css`
        display: ${vertical ? 'block' : 'inline-block'};
        height: ${vertical ? size : '1px'};
        margin: 0;
        min-height: ${vertical ? size : '1px'};
        min-width: ${vertical ? '1px' : size};
        padding: 0;
        width: ${vertical ? '1px' : size};
    `};
`;

export type SpaceProps = {
    size: string;
    vertical?: boolean;
};

export const Space = forwardRef<HTMLDivElement, SpaceProps>(function Space(props, ref) {
    return <SpaceRoot ref={ref} {...props} />;
});
