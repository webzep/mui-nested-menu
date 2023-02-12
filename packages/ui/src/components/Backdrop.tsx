import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, MouseEvent, ReactNode, useState } from 'react';

import { ReactHTMLProps } from '../core/types/interfaces';

const BackdropContainer = styled.div<BackdropProps>`
    ${({ bgColor, fontColor, theme, zIndex }) => css`
        align-items: center;
        background-color: ${bgColor ?? 'rgba(0, 0, 0, 0.7)'};
        box-sizing: border-box;
        color: ${fontColor ?? 'inherit'};
        display: flex;
        height: 100vh;
        justify-content: center;
        left: 0px;
        max-height: 100vh;
        position: fixed;
        top: 0px;
        width: 100vw;
        z-index: ${zIndex ?? theme.zIndex.backdrop};
    `}
`;

export type BackdropProps = ReactHTMLProps<HTMLDivElement> & {
    bgColor?: string;
    children?: ReactNode;
    fontColor?: string;
    margin?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    onClose?: (e: MouseEvent<HTMLDivElement>) => void;
    padding?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    zIndex?: number;
};

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
    { onClose, ...props },
    ref
) {
    const [clickStarted, setClickStarted] = useState(false);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setClickStarted(true);
        }
    };

    const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && clickStarted) {
            onClose?.(e);
            setClickStarted(false);
        }
    };

    return <BackdropContainer onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} ref={ref} {...props} />;
});
