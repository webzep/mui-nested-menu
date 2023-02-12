import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import { ReactHTMLProps } from '../core/types/interfaces';

const titleCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const baseStyles = ({
    componentName,
    disabled,
    startIcon,
    theme,
    variant,
}: InputBaseProps & { theme: Theme }) => {
    const filledStyle = variant === 'filled';
    const openStyle = variant === 'open';
    const outlinedStyle = variant === 'outlined';
    const iconAndLabelColor = disabled ? theme.palette.border1 : theme.palette.font3;
    const borderColor = disabled ? theme.palette.border1 : theme.palette.font2;
    const placeholderColor = disabled ? theme.palette.border1 : theme.palette.font2;
    const backgroundColor = filledStyle ? theme.palette.bg2 : 'transparent';
    const className = `_${titleCase(variant)}${componentName}`;

    return css`
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.4375em;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        position: relative;
        height: 50px;
        width: 245px;

        > fieldset {
            > span.${className}-start-icon {
                cursor: default;
                color: ${iconAndLabelColor};
                padding-right: 12px;
                display: flex;
                align-items: center;
                > svg {
                    fill: ${iconAndLabelColor};
                    height: 24px;
                    width: 24px;
                }
            }

            > span.${className}-end-icon {
                cursor: default;
                color: ${iconAndLabelColor};
                padding-left: 12px;
                display: flex;
                align-items: center;
                > svg {
                    fill: ${iconAndLabelColor};
                    height: 24px;
                    width: 24px;
                }
            }

            background-color: ${backgroundColor};
            background-image: ${filledStyle && `linear-gradient(${theme.palette.bg2}, ${theme.palette.bg2})`};
            border-color: ${borderColor};
            border-radius: ${outlinedStyle ? '4px' : '4px 4px 0px 0px'};
            border-style: solid;
            border-width: ${outlinedStyle ? '1px' : '0px 0px 1px 0px'};
            box-sizing: border-box;
            display: flex;
            flex-wrap: nowrap;
            height: inherit;
            justify-content: space-between;
            margin: 0px;
            overflow: hidden;
            ${!openStyle && 'padding: 0 12px;'};
            text-align: left;
            width: 100%;

            :focus-within {
                border-color: ${theme.palette.brand1};
                ${outlinedStyle ? `border-width: 2px;` : `border-bottom-width: 2px;`}

                > input {
                    ~ legend {
                        color: ${theme.palette.brand1};
                    }
                }
            }

            > input {
                animation-duration: 10ms;
                background: none;
                border: none;
                box-sizing: content-box;
                color: ${theme.palette.font2};
                display: block;
                flex-grow: 1;
                font: inherit;
                height: 1.4375em;
                letter-spacing: inherit;
                margin-left: -8px;
                margin-right: -8px;
                margin-top: -1px;
                margin: 0;
                min-width: 0;
                outline: none;
                padding: 16px 14px;
                width: 100px;

                ~ legend {
                    color: ${placeholderColor};
                    transform: ${startIcon ? 'translate(36px, 28px)' : 'translateY(28px)'};

                    ${openStyle &&
                    css`
                        > label {
                            padding: 0;
                        }
                    `}
                }

                :focus-visible {
                    + legend {
                        color: ${theme.palette.brand1};
                    }
                }

                :focus-visible,
                :not(:placeholder-shown) {
                    ${filledStyle &&
                    css`
                        margin-bottom: 0;
                        margin-top: auto;
                        padding: 8px 14px;
                    `}

                    ${openStyle &&
                    css`
                        margin-bottom: 0;
                        margin-top: auto;
                        padding: 8px 0px;
                    `}

					~ legend {
                        /* Transition-in times */
                        font-size: 12px;
                        font-weight: 500;
                        max-width: 100%;
                        transition: transform 150ms ease-in-out, font-size 150ms ease-in-out,
                            max-width 400ms ease-in-out;

                        ${filledStyle &&
                        css`
                            color: ${theme.palette.brand1};
                            transform: ${startIcon ? 'translate(36px, 16px)' : 'translateY(16px)'};
                        `}

                        ${openStyle &&
                        css`
                            color: ${theme.palette.brand1};
                            transform: ${startIcon ? 'translate(36px, 12px)' : 'translateY(12px)'};
                        `}
						
						${outlinedStyle &&
                        css`
                            transform: translateY(0px);
                        `}
                    }
                }
            }

            > legend {
                box-sizing: border-box;
                display: block;
                font-size: 16px;
                font-weight: 400;
                height: 0px;
                max-width: 0.01px;
                padding: 0;
                pointer-events: none;
                transition: transform 150ms ease-in-out, font-size 150ms ease-in-out,
                    max-width 30ms ease-in-out;
                white-space: nowrap;
                width: auto;
                > label {
                    color: inherit;
                    display: inline-block;
                    padding-left: 5px;
                    padding-right: 5px;
                    transform: translateY(-60%);
                }
            }
        }
    `;
};

const hoveredStyle = ({ theme }: { theme: Theme }) => {
    return css`
        :not(:disabled):hover:not(:focus-within) {
            border-color: ${theme.palette.font2};
        }
    `;
};

const focusedStyle = ({ theme }: { theme: Theme }) => {
    return css`
        border-color: ${theme.palette.brand1};
    `;
};

const StyledTextField = styled.div<InputBaseProps>`
    ${baseStyles}

    @media (hover: hover) {
        fieldset:not(:disabled):hover {
            ${hoveredStyle}
        }
    }

    > fieldset:not(:disabled):focus-within {
        ${focusedStyle}
    }
`;

export type InputBaseProps = ReactHTMLProps<HTMLDivElement> & {
    componentName: 'Select' | 'TextField';
    defaultValue?: string | number;
    disabled?: boolean;
    endIcon?: ReactNode;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    label?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    startIcon?: ReactNode;
    value?: string | number;
    variant: 'filled' | 'open' | 'outlined';
};

export const TextFieldBase = forwardRef<HTMLDivElement, InputBaseProps>(function TextFieldBase(
    { defaultValue, inputProps, label, onChange, value, ...props },
    ref
) {
    const className = `_${titleCase(props.variant)}${props.componentName}`;

    return (
        <StyledTextField ref={ref} className={className} {...props}>
            <fieldset disabled={props.disabled}>
                {props.startIcon && <span className={`${className}-start-icon`}>{props.startIcon}</span>}

                <input
                    defaultValue={defaultValue}
                    disabled={props.disabled}
                    onChange={onChange}
                    placeholder=" "
                    value={value}
                    {...inputProps}
                />

                {props.endIcon && <span className={`${className}-end-icon`}>{props.endIcon}</span>}

                {label && (
                    <legend>
                        <label>{label}</label>
                    </legend>
                )}
            </fieldset>
        </StyledTextField>
    );
});
