import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { PaletteConfig } from '../core/themes/palette';
import { typography } from '../core/themes/typography';

type TypographyCssProps = {
    align?: 'left' | 'center' | 'right';
    bold?: boolean;
    fontColor?: string;
    margin?: string;
    noMargin?: boolean;
    noPointer?: boolean;
    themeFontColor?: keyof PaletteConfig;
};

export type TypographyProps = TypographyCssProps &
    HTMLAttributes<HTMLElement> & {
        children: ReactNode;
        variant:
            | 'h1'
            | 'h2'
            | 'h3'
            | 'h4'
            | 'h5'
            | 'h6'
            | 'subtitle'
            | 'subtitle2'
            | 'body'
            | 'body2'
            | 'overline';
    };

const styleToFunctionMap = {
    body: styled.p,
    body2: styled.p,
    h1: styled.h1,
    h2: styled.h2,
    h3: styled.h3,
    h4: styled.h4,
    h5: styled.h5,
    h6: styled.h6,
    overline: styled.span,
    subtitle: styled.h6,
    subtitle2: styled.h6,
};

const createComponent = (variant: TypographyProps['variant']) => {
    const styledFunction = styleToFunctionMap[variant]<TypographyCssProps>;

    return styledFunction`
		${({ align, bold, fontColor, theme, margin, noMargin, noPointer, themeFontColor }) => {
            return css`
                color: ${fontColor ?? theme.palette[themeFontColor ?? 'font2']};
                cursor: default;
                pointer-events: ${noPointer ? 'none' : 'auto'};
                position: relative;
                ${typography[variant]}
                ${align && `text-align: ${align};`}
				${bold && 'font-weight: bold;'}
				${margin && `margin: ${margin};`}
                ${noMargin && 'margin: 0;'}
            `;
        }}

	`;
};

export const Typography = forwardRef<HTMLDivElement, TypographyProps>(function Typography(
    { children, variant, ...props },
    ref
) {
    const Component = createComponent(variant);

    return (
        <Component ref={ref} {...props}>
            {children}
        </Component>
    );
});
