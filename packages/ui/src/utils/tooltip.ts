import { Direction, DirectionType } from '../components/Tooltip';

export const getWrapperTranslation = (direction: DirectionType, bounds: DOMRect) => {
    let x = bounds.width / 2;
    let y = bounds.height / 2;

    if (direction === Direction.TOP) {
        y -= bounds.height / 2 + 12;
    } else if (direction === Direction.BOTTOM) {
        y += bounds.height / 2 + 12;
    } else if (direction === Direction.RIGHT) {
        x += bounds.width / 2 + 12;
    } else if (direction === Direction.LEFT) {
        x -= bounds.width / 2 + 12;
    }

    return `translate(${x}px, ${y}px)`;
};

export const getTipTranslation = (direction: DirectionType) => {
    switch (direction) {
        case Direction.TOP:
            return 'translateY(-50%)';
        case Direction.BOTTOM:
            return 'translateY(50%)';
        case Direction.RIGHT:
            return 'translateX(50%)';
        default:
            return 'translateX(-50%)';
    }
};
