import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useEffect, useRef } from 'react';

import { Button } from '../Button';
import { IconNames, MaterialIcon } from '../MaterialIcon';
import { Tooltip } from '../Tooltip';
import { MessageVariant } from './Snackbar';
import { MessageWithId, SnackbarProviderProps } from './SnackbarProvider';

const iconMap: Record<MessageVariant, IconNames> = {
    error: 'error',
    info: 'info',
    success: 'check_circle',
    warning: 'warning',
};

type StatusIconProps = {
    fontColor: string;
};

const StatusIconContainer = styled.span<StatusIconProps>`
    ${({ fontColor }) => {
        return css`
            align-items: center;
            background-color: ${fontColor} !important;
            display: flex;
            display: flex;
            height: 100%;
            justify-content: center;
            left: 0;
            margin-right: 12px;
            position: absolute;
            top: 0;
            width: 40px;
        `;
    }}
`;

type SnackIconProps = {
    msg: MessageWithId;
};

const SnackIcon: FC<SnackIconProps> = ({ msg }) => {
    const theme = useTheme();

    const statusColorMap: Record<MessageVariant, string> = {
        error: theme.palette.statusError,
        info: theme.palette.statusInfo,
        success: theme.palette.statusSuccess,
        warning: theme.palette.statusWarning,
    };

    const color = statusColorMap[msg.variant];

    return (
        <StatusIconContainer fontColor={color}>
            <MaterialIcon fontColor="white" icon={iconMap[msg.variant]} />
        </StatusIconContainer>
    );
};

const SnackContainer = styled.div<Partial<SnackProps>>`
    ${({ margin, msg, position, theme }) => {
        let transform = '';
        switch (position) {
            case 'top':
                transform = `translateY(calc(-100% - ${margin?.top}px))`;
                break;
            case 'bottom':
                transform = `translateY(calc(100% + ${margin?.bottom}px))`;
                break;
            default:
                if (position?.includes('left')) {
                    transform = `translateX(calc(-100% - ${margin?.left}px))`;
                } else {
                    transform = `translateX(calc(100% + ${margin?.right}px))`;
                }
                break;
        }

        return css`
            align-items: center;
            animation-timing-function: ease-in-out;
            background-color: ${theme.palette.bg1};
            border-radius: ${theme.sizes.borderRadiusSmall};
            box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);
            box-sizing: border-box;
            color: ${theme.palette.font1};
            display: flex;
            font-size: 1rem;
            justify-content: center;
            line-height: 34px;
            margin-top: 8px;
            overflow: hidden;
            padding: 4px 12px;
            padding-left: 48px;
            width: ${msg?.width ?? ''};
            transform: ${transform};
        `;
    }}
`;

const CloseButton = styled(Button)`
    align-items: center;
    color: ${({ theme }) => theme.palette.font3};
    display: flex;
    font-size: 16px;
    height: 24px;
    justify-content: center;
    margin: 0 -9px 0 12px;
    min-width: 0;
    width: 24px;
`;

type SnackProps = {
    msg: MessageWithId;
    position?: SnackbarProviderProps['position'];
    margin?: SnackbarProviderProps['margin'];
};

export const Snack: FC<SnackProps> = ({ msg, ...props }) => {
    const slideInTime = 200;
    const slideAwayTime = 200;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSlideIn = () => {
            ref.current?.animate([{ transform: 'translateX(0)' }], {
                duration: slideInTime,
                fill: 'forwards',
                iterations: 1,
            });
        };

        handleSlideIn();
        !msg.persist && msg.duration && handleSlideAway(msg.duration, slideInTime);
    }, [ref]);

    const handleSlideAway = (duration: number, slideInDelay = slideInTime) => {
        let animateTo: string;
        if (props.position === 'top') {
            animateTo = `translateY(calc(-120% - ${props.margin?.top}px))`;
        } else if (props.position === 'bottom') {
            animateTo = `translateY(calc(120% + ${props.margin?.bottom}px))`;
        } else if (props.position?.includes('left')) {
            animateTo = `translateX(calc(-120% - ${props.margin?.left}px))`;
        } else {
            animateTo = `translateX(calc(120% + ${props.margin?.right}px))`;
        }

        setTimeout(() => {
            ref.current?.animate([{ transform: 'translate(0,0)' }, { transform: animateTo }], {
                duration: slideAwayTime,
                fill: 'forwards',
                iterations: 1,
            });
        }, duration);

        setTimeout(() => {
            ref.current?.animate(
                [
                    { height: ref.current.clientHeight + 'px' },
                    { height: '0px', margin: '0px', padding: '0px' },
                ],
                { duration: slideAwayTime, fill: 'forwards', iterations: 1 }
            );
        }, slideInDelay + duration);
    };

    const handleCloseClicked = () => {
        handleSlideAway(0, slideAwayTime);
    };

    return (
        <SnackContainer msg={msg} ref={ref} key={msg.id} {...props}>
            {msg.variant && <SnackIcon msg={msg} />}
            <span>{msg.content}</span>
            {msg.persist && (
                <Tooltip tip="Close">
                    <CloseButton iconOnly endIcon="×" onClick={handleCloseClicked} />
                </Tooltip>
            )}
        </SnackContainer>
    );
};
