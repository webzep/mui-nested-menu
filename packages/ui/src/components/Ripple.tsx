import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, MouseEvent, useLayoutEffect, useState } from 'react';

import { ReactHTMLProps } from '../core/types/interfaces';

const RippleContainer = styled.div<RippleProps>`
    ${({ bgColor, duration }) => css`
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;

        span {
            animation-duration: ${duration}ms;
            animation-name: ripple;
            background-color: ${bgColor ? bgColor : 'rgba(0, 0, 0, 0.2)'};
            border-radius: 100%;
            opacity: 1;
            position: absolute;
            transform: scale(0);
        }

        @keyframes ripple {
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    `}
`;

const useDebouncedRippleCleanUp = (count: number, duration: number, cleanFn: () => void) => {
    let bounce: NodeJS.Timeout;

    useLayoutEffect(() => {
        if (count > 0) {
            clearTimeout(bounce);

            bounce = setTimeout(() => {
                cleanFn();
                clearTimeout(bounce);
            }, duration * 2);
        }

        return () => clearTimeout(bounce);
    }, [count, duration, cleanFn]);
};

type Ripple = {
    size: number;
    x: number;
    y: number;
};

export type RippleProps = ReactHTMLProps<HTMLDivElement> & {
    bgColor?: string;
    duration?: number;
};

export const Ripple = forwardRef<HTMLDivElement, RippleProps>(function Ripple(
    { bgColor: color = 'rgb(255,255,255,0.75)', duration = 850 },
    ref
) {
    const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = (e: MouseEvent<HTMLDivElement>) => {
        const rippleContainer = e.currentTarget.getBoundingClientRect();
        const { height, width, x, y } = rippleContainer;
        const size = rippleContainer.width > height ? width : height;
        const xi = e.pageX - x - size / 2;
        const yi = e.pageY - y - size / 2;
        const newRipple = { size, x: xi, y: yi };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <RippleContainer ref={ref} duration={duration} bgColor={color} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={'span' + index}
                            style={{
                                height: ripple.size,
                                left: ripple.x,
                                top: ripple.y,
                                width: ripple.size,
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
});
