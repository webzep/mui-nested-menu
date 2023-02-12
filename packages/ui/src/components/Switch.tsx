import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, forwardRef } from 'react';

const trackWidth = '34px';
const trackHeight = '14px';
const trackBorderRadius = '7px';
const handleDiameter = '20px';
const handleBorderRadius = '10px';
const handleInset = '-4px';

const SwitchContainer = styled.div<SwitchProps>`
    ${({ disabled }) => {
        return css`
            align-items: center;
            display: flex;
            height: max(${trackHeight}, ${handleDiameter});
            justify-content: center;
            pointer-events: none;
            position: relative;
            width: max(${trackWidth}, calc(${trackWidth} - ${handleInset} * 2));

            :hover {
                ._Switch-HandleEffect {
                    outline: calc(${handleDiameter} / 2) solid lightgrey;
                }
            }

            ${disabled && 'opacity: 0.7;'}
        `;
    }}
`;

const SwitchTrack = styled.span<{
    checked: boolean;
    disabled: SwitchProps['disabled'];
    trackColor: SwitchProps['trackColor'];
}>`
    ${({ checked, theme, trackColor }) => {
        const trackColorBg = trackColor
            ? checked
                ? theme.palette.bg2
                : theme.palette.bg3
            : checked
            ? theme.palette.statusSuccess
            : theme.palette.darkAccent;

        return css`
            align-items: center;
            align-items: center;
            background-color: ${trackColorBg};
            border-radius: ${trackBorderRadius};
            display: flex;
            height: ${trackHeight};
            max-width: ${trackWidth};
            min-width: ${trackWidth};
            padding: 0;
            position: relative;
            transition: background-color 200ms ease-in-out;
            width: ${trackWidth};
        `;
    }}
`;

const SwitchHandle = styled.span<{
    checked: boolean;
    handleColor: SwitchProps['handleColor'];
    noHandleShadow: SwitchProps['noHandleShadow'];
}>`
    ${({ checked, handleColor, noHandleShadow }) => {
        const startPos = checked ? trackWidth ?? '42px' : '0px';
        const handleBuffer = checked ? handleDiameter : '0px';
        const sign = checked ? '-' : '+';

        return css`
            background-color: ${handleColor ? (checked ? handleColor?.on : handleColor?.off) : 'white'};
            border-radius: ${handleBorderRadius ?? '50%'};
            box-shadow: ${noHandleShadow ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, 0.2)'};
            box-sizing: border-box;
            height: ${handleDiameter};
            left: calc((${startPos} - ${handleBuffer}) ${sign} ${handleInset ?? '0px'});
            position: absolute;
            transition: left 200ms;
            width: ${handleDiameter};
        `;
    }}
`;

const HoverEffect = styled.span`
    border-radius: inherit;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0.3;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

const SwitchInput = styled.input`
    box-sizing: border-box;
    cursor: pointer;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    pointer-events: all;
    position: absolute;
    top: 0;
    width: 100%;

    :disabled {
        cursor: default;
    }
`;

export type SwitchProps = {
    checked: boolean;
    disabled?: boolean;
    handleBorderRadius?: string;
    handleColor?: { on?: string; off?: string };
    handleDiameter?: string;
    handleInset?: string;
    noHandleShadow?: boolean;
    noHoverEffect?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    trackBorderRadius?: string;
    trackColor?: { on?: string; off?: string };
    trackHeight?: string;
    trackWidth?: string;
};

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(function Switch({ onChange, ...props }, ref) {
    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
    };

    return (
        <SwitchContainer ref={ref} {...props}>
            <SwitchInput
                checked={props.checked}
                disabled={props.disabled}
                onChange={handleClick}
                type="checkbox"
            />
            <SwitchTrack checked={props.checked} disabled={props.disabled} trackColor={props.trackColor}>
                <SwitchHandle
                    checked={props.checked}
                    handleColor={props.handleColor}
                    noHandleShadow={props.noHandleShadow}
                >
                    {!props.noHoverEffect && !props.disabled && (
                        <HoverEffect className="_Switch-HandleEffect" />
                    )}
                </SwitchHandle>
            </SwitchTrack>
        </SwitchContainer>
    );
});
