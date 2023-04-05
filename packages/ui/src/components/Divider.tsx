import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

import { PaletteConfig } from '../core/themes/palette';

const DividerRoot = styled.hr<DividerProps>`
    ${({ bgColor, themeBgColor, margin, noMargin, theme, vertical, weight }) => {
        const backgroundColor = bgColor
            ? bgColor
            : themeBgColor
            ? theme.palette[themeBgColor]
            : theme.palette.border1;

        return css`
            align-self: stretch;
            background-color: ${backgroundColor};
            border: none;
            box-sizing: border-box;
            display: inline-block;
            height: ${vertical ? 'auto' : (weight || 1) + 'px'};
            margin: ${noMargin ? '' : margin ?? '12px 0'};
            min-height: ${vertical ? 'auto' : (weight || 1) + 'px'};
            overflow: visible;
            padding: 0;
            width: ${vertical ? (weight || 1) + 'px' : '100%'};
        `;
    }};
`;

export type DividerProps = {
    bgColor?: string;
    themeBgColor?: keyof PaletteConfig;
    margin?: string;
    noMargin?: boolean;
    vertical?: boolean;
    weight?: number;
};

export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(props, ref) {
    return <DividerRoot ref={ref} {...props} />;
});
