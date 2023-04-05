import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

import { Column } from './Column';
import { MaterialIcon } from './MaterialIcon';
import { Typography } from './Typography';

const AvatarContainer = styled.div<AvatarProps>`
    height: 90px;
    position: relative;
    user-select: none;
    width: 90px;
`;

type AvatarBackgroundProps = {
    noStatus: boolean;
};

const AvatarBackground = styled.div<AvatarBackgroundProps>`
    ${({ theme }) => {
        return css`
            align-items: center;
            background-color: ${theme.palette.brand1};
            border-radius: 50%;
            border: 6px solid ${theme.palette.bg3};
            color: ${theme.palette.onBrand1};
            display: flex;
            height: 100%;
            justify-content: center;
            overflow: hidden;
            width: 100%;
        `;
    }}

    ${({ noStatus }) =>
        !noStatus &&
        css`
            mask-image: radial-gradient(
                circle at calc(100% - 12px) calc(100% - 12px),
                rgba(255, 255, 255, 0) 12px,
                rgba(0, 0, 0, 1) 12px
            );
        `};
`;

type StatusBadgeProps = {
    noPulse?: boolean;
    statusColor?: string;
};

const StatusBadge = styled.div<StatusBadgeProps>`
    background-color: ${({ statusColor }) => statusColor ?? '#44b700'};
    border-radius: 50%;
    bottom: 8px;
    display: flex;
    height: 16px;
    justify-content: center;
    position: absolute;
    right: 8px;
    width: 16px;

    &::after {
        animation: ${({ noPulse }) => (noPulse ? 'none' : `statusripple 1.2s infinite ease-in-out`)};
        align-self: center;
        border-radius: 50%;
        border: 1px solid ${({ statusColor }) => statusColor ?? '#44b700'};
        box-sizing: border-box;
        content: '';
        height: 100%;
        width: 100%;

        @keyframes statusripple {
            from {
                opacity: 1;
                transform: scale(0.5);
            }
            to {
                opacity: 0;
                transform: scale(2.4);
            }
        }
    }
`;

const AltText = styled(Typography)`
    width: 100%;
    margin: 0px;
    text-align: center;
    font-size: 2rem;
    line-height: 1;
    color: rgb(255, 255, 255, 0.7);
`;

const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

export type AvatarProps = {
    alt?: string;
    borderColor?: string;
    noPulse?: boolean;
    noStatus?: boolean;
    src?: string;
    statusColor?: string;
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
    const initials = props.alt
        ? props.alt
              .split(' ')
              .map((word) => word[0])
              .join('')
              .toUpperCase()
              .slice(0, 2)
        : '';

    return (
        <AvatarContainer ref={ref} {...props}>
            <AvatarBackground noStatus={props.noStatus ?? true}>
                {props.src ? (
                    <ProfilePicture alt={props.alt ? props.alt : 'avatar'} src={props.src} />
                ) : initials ? (
                    <AltText variant="h5">{initials}</AltText>
                ) : (
                    <Column>
                        <MaterialIcon icon="person" fontSize="100px" />
                    </Column>
                )}
            </AvatarBackground>
            {!props.noStatus && <StatusBadge statusColor={props.statusColor} noPulse={props.noPulse} />}
        </AvatarContainer>
    );
});
