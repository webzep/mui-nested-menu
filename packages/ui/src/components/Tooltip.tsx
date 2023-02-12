import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
    cloneElement,
    FC,
    Fragment,
    MutableRefObject,
    ReactElement,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';

import { getTipTranslation, getWrapperTranslation } from '../utils/tooltip';

export const Direction = {
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
} as const;

export type DirectionType = typeof Direction[keyof typeof Direction];

type WrapperProps = {
    bounds: DOMRect;
    direction: DirectionType;
};

const Wrapper = styled.div<WrapperProps>`
    ${({ bounds, direction }) => {
        return css`
            align-items: center;
            animation: fadein 500ms forwards;
            display: flex;
            height: 0;
            justify-content: center;
            left: ${bounds.left}px;
            position: fixed;
            top: ${bounds.top}px;
            transform: ${getWrapperTranslation(direction, bounds)};
            width: 0;
            z-index: 1500;

            @keyframes fadein {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `;
    }}
`;

type TipProps = {
    direction: DirectionType;
};

const Tip = styled.div<TipProps>`
    ${({ direction, theme }) => {
        return css`
            background-color: ${theme.palette.bg1};
            border-radius: 4px;
            box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
            box-sizing: border-box;
            color: ${theme.palette.font1};
            font-size: 14px;
            font-weight: bold;
            padding: 8px;
            position: relative;
            text-align: center;
            transform: ${getTipTranslation(direction)};
            white-space: nowrap;
        `;
    }}
`;

type ArrowProps = {
    direction: DirectionType;
};

const Arrow = styled.div<ArrowProps>`
    ${({ direction, theme }) => {
        let rotation = 0;
        switch (direction) {
            case Direction.BOTTOM:
                rotation = 0;
                break;
            case Direction.LEFT:
                rotation = 90;
                break;
            case Direction.RIGHT:
                rotation = 270;
                break;
            case Direction.TOP:
                rotation = 180;
                break;
        }

        return css`
            border: 6px solid transparent;
            border-bottom-color: ${theme.palette.bg1};
            height: 0;
            position: absolute;
            transform: rotate(${rotation}deg);
            width: 0;

            ${direction === Direction.TOP &&
            css`
                bottom: -11px;
                left: 50%;
                margin-left: -6px;
            `}

            ${direction === Direction.BOTTOM &&
            css`
                top: -11px;
                left: 50%;
                margin-left: -6px;
            `}

			${direction === Direction.LEFT &&
            css`
                top: 50%;
                right: -11px;
                margin-top: -6px;
            `}
			${direction === Direction.RIGHT &&
            css`
                top: 50%;
                left: -11px;
                margin-top: -6px;
            `}
        `;
    }}
`;

export type TooltipProps = {
    children: ReactElement & { ref?: MutableRefObject<HTMLElement> };
    delay?: number;
    direction?: DirectionType;
    hide?: boolean;
    tip: ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ children, tip, direction, hide, ...props }) => {
    const ref = useRef<HTMLElement>(null); // This ref will be used if there isn't an existing one on the child
    const [childRef, setChildRef] = useState<MutableRefObject<HTMLElement> | null>(null); // Which ever ref is used, it will be accessible by this state
    const [bounds, setBounds] = useState<DOMRect | null>(null); // The bounds of the child once its been rendered
    const [child, setChild] = useState(children); // The hijacked child
    const [active, setActive] = useState(false); // Whether to render the tooltip

    let timeout: NodeJS.Timeout;

    const handlePointerOver = (originalFn: () => void) => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay ?? 0);
        originalFn?.();
    };

    const handlePointerLeave = (originalFn: () => void) => {
        setActive(false);
        clearInterval(timeout);
        originalFn?.();
    };

    useEffect(() => {
        const ogFn = children.props.onPointerOver;
        const hijackedRef = children.ref ?? ref;

        setChild(
            cloneElement(children, {
                ...children.props,
                onPointerLeave: () => handlePointerLeave(ogFn),
                onPointerOver: () => handlePointerOver(ogFn),
                ref: hijackedRef,
            })
        );

        setChildRef(hijackedRef as MutableRefObject<HTMLElement>);
    }, [children]);

    if (childRef && childRef.current) {
        const nextBounds = childRef.current.getBoundingClientRect();

        if (!bounds || bounds.x !== nextBounds.x || bounds.y !== nextBounds.y) {
            setBounds(nextBounds);
        }
    }

    return (
        <Fragment>
            {child}
            {active &&
                bounds &&
                !hide &&
                createPortal(
                    <Wrapper bounds={bounds} direction={direction ?? Direction.TOP} {...props}>
                        <Tip direction={direction ?? Direction.TOP}>
                            {tip}
                            <Arrow direction={direction ?? Direction.TOP} />
                        </Tip>
                    </Wrapper>,
                    document.body
                )}
        </Fragment>
    );
};
