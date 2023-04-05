import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import {
    forwardRef,
    InputHTMLAttributes,
    MouseEvent,
    ReactNode,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react';

import { PaletteConfig } from '../core/themes/palette';
import { Tooltip } from './Tooltip';

const InputContainer = styled.div`
    position: relative;
`;

type InputRootCssProps = {
    paddingLeft: number;
    fixedWidth?: string;
};

const InputRoot = styled.input<InputProps & InputRootCssProps>`
    ${({ disabled, fixedWidth, fullWidth, paddingLeft, theme, themeFontColor }) => {
        const color = disabled
            ? theme.palette.font3
            : themeFontColor
            ? theme.palette[themeFontColor]
            : theme.palette.font1;

        return css`
            background-color: ${theme.palette.bg1};
            border-radius: ${theme.sizes.borderRadiusMedium};
            border: 1px solid ${theme.palette.border1};
            color: ${color};
            display: flex;
            flex-direction: column;
            font-size: 16px;
            font-weight: 500;
            height: 40px;
            max-width: 100%;
            overflow: hidden;
            padding: 2px 8px 2px ${paddingLeft}px;
            position: relative;
            transition: width 0.2s ease-in-out;
            width: ${fullWidth ? '100%' : fixedWidth ?? ''};

            &:focus {
                outline: ${theme.sizes.borderWidth} solid ${theme.palette.brand1};
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            &[type='number'] {
                -moz-appearance: textfield; /* Firefox */
            }
        `;
    }};
`;

type AdornmentProps = {
    disabled?: boolean;
    themeFontColor?: keyof PaletteConfig;
};

type ThemeProps = {
    theme: Theme;
};

const leftAdornmentStyles = ({ disabled, theme, themeFontColor }: AdornmentProps & ThemeProps) => {
    const color = disabled
        ? theme.palette.font3
        : themeFontColor
        ? theme.palette[themeFontColor]
        : theme.palette.font1;

    return css`
        align-items: center;
        border-right: 1px solid ${theme.palette.border1};
        color: ${color};
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 40px;
    `;
};

const LeftAdornmentSpan = styled.span`
    ${leftAdornmentStyles}
    cursor: default;
    font-weight: 500;
`;

const LeftAdornmentButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    ${leftAdornmentStyles}
`;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    clickableLeftAdornment?: boolean;
    fontColor?: string;
    fullWidth?: boolean;
    leftAdornment?: ReactNode;
    leftAdornmentTooltip?: string;
    onLeftAdornmentClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    themeFontColor?: keyof PaletteConfig;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        clickableLeftAdornment,
        fullWidth,
        leftAdornment,
        leftAdornmentTooltip,
        onLeftAdornmentClick,
        ...props
    },
    ref
) {
    const adornment = useRef<HTMLButtonElement | HTMLSpanElement>(null);
    const [paddingLeft, setPaddingLeft] = useState(8);

    useEffect(() => {
        if (adornment.current) {
            setPaddingLeft(adornment.current.offsetWidth + 12);
        }
    }, [adornment.current]);

    return (
        <InputContainer>
            <InputRoot
                fullWidth={fullWidth}
                leftAdornment={leftAdornment}
                paddingLeft={paddingLeft}
                ref={ref}
                {...props}
            />
            {leftAdornment && (
                <Tooltip tip={leftAdornmentTooltip} hide={!leftAdornmentTooltip}>
                    {clickableLeftAdornment ? (
                        <LeftAdornmentButton
                            disabled={props.disabled}
                            onClick={onLeftAdornmentClick}
                            ref={adornment as RefObject<HTMLButtonElement>}
                            themeFontColor={props.themeFontColor}
                        >
                            {leftAdornment}
                        </LeftAdornmentButton>
                    ) : (
                        <LeftAdornmentSpan ref={adornment}>{leftAdornment}</LeftAdornmentSpan>
                    )}
                </Tooltip>
            )}
        </InputContainer>
    );
});
