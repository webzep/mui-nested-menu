import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { PaletteConfig } from '../core/themes/palette';
import { Ripple } from './Ripple';
import { Spinnner } from './Spinner';

const Icon = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 4px;
`;

const ButtonRoot = styled.button<Omit<ButtonProps, 'label'>>`
    ${({
        color,
        disabled,
        endIcon,
        grow,
        iconOnly,
        justify,
        radius,
        round,
        size,
        startIcon,
        theme,
        themeBgColor,
        themeFontColor,
        variant,
    }) => {
        const fColor = color ?? (themeFontColor ? theme.palette[themeFontColor] : undefined);
        const bgColor = themeBgColor ? theme.palette[themeBgColor] : undefined;

        return css`
            align-items: center;
            appearance: none;
            border-radius: ${round ? '999px' : radius || theme.sizes.borderRadiusSmall};
            cursor: ${disabled ? 'default' : 'pointer'};
            display: inline-flex;
            flex-grow: ${grow ? 1 : ''};
            font-family: ${theme.typeography.family};
            font-weight: 500;
            height: 36px;
            justify-content: center;
            letter-spacing: 0.02857em;
            line-height: 1.75;
            margin: 0px;
            max-height: 64px;
            min-height: 40px;
            outline: 0px;
            overflow: hidden;
            position: relative;
            text-decoration: none;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            user-select: none;
            vertical-align: middle;
            white-space: nowrap;

            ${size === 'sm'
                ? css`
                      font-size: 0.8125rem;
                      min-width: 64px;
                      padding: 4px 10px;
                  `
                : size === 'lg'
                ? css`
                      font-size: 0.9375rem;
                      min-width: 64px;
                      padding: 8px 22px;
                  `
                : css`
                      font-size: 0.875rem;
                      min-width: 64px;
                      padding: 6px 16px;
                  `}

            ${startIcon &&
            css`
                padding-left: 4px;
            `}

		${endIcon &&
            css`
                padding-right: 4px;
            `}

		${variant === 'text' || iconOnly
                ? css`
                      background-color: ${bgColor ?? 'transparent'};
                      border: none;
                      color: ${fColor ?? theme.palette.font3};

                      &:disabled {
                          filter: grayscale(100%) brightness(160%);
                      }

                      &:not(:disabled):hover {
                          backdrop-filter: brightness(0.9);
                      }
                  `
                : variant === 'outlined'
                ? css`
                      background-color: ${bgColor ?? 'transparent'};
                      border-color: ${fColor ?? theme.palette.brand1};
                      border-style: solid;
                      border-width: ${theme.sizes.borderWidth};
                      color: ${fColor ?? theme.palette.brand1};

                      &:disabled {
                          filter: grayscale(100%) brightness(160%);
                      }

                      &:not(:disabled):hover {
                          backdrop-filter: brightness(0.98);
                      }
                  `
                : css`
                      background-color: ${bgColor ?? theme.palette.brand1};
                      border: none;
                      color: ${fColor ?? theme.palette.onBrand1};

                      &:disabled {
                          background-color: ${theme.palette.disabled};
                          color: grey;
                          box-shadow: none;
                          filter: brightness(95%);
                      }

                      &:not(:disabled):hover {
                          filter: brightness(95%);
                      }
                  `}

		&:not(:disabled):hover {
                text-decoration: none;
            }

            &:focus-visible {
                outline: 2px solid royalblue;
                outline-offset: 2px;
            }

            ${justify && `justify-content: ${justify};`}
        `;
    }}
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    disabled?: boolean;
    endIcon?: ReactNode;
    grow?: boolean;
    iconOnly?: boolean;
    label?: string;
    loading?: boolean;
    justify?: 'flex-start' | 'center' | 'flex-end';
    radius?: string;
    round?: boolean;
    size?: 'sm' | 'md' | 'lg';
    startIcon?: ReactNode;
    themeBgColor?: keyof PaletteConfig;
    themeFontColor?: keyof PaletteConfig;
    variant?: 'contained' | 'outlined' | 'text';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { children, label, loading = false, ...props },
    ref
) {
    return (
        <ButtonRoot ref={ref} {...props}>
            {!props.disabled && <Ripple />}
            {props.startIcon && <Icon>{props.startIcon}</Icon>}
            {loading ? <Spinnner size={24} /> : label ?? children}
            {props.endIcon && <Icon>{props.endIcon}</Icon>}
        </ButtonRoot>
    );
});
