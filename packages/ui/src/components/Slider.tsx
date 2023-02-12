import {
    FC,
    forwardRef,
    MouseEvent as ReactMouseEvent,
    Ref,
    RefObject,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { getNearest } from '../utils/getNearest';
import {
    CalculatedMarkObject,
    Marker,
    Progress,
    SliderGroup,
    SliderHandle,
    SliderLabel,
    SliderMark,
    Track,
} from './Slider.styles';
import { Tooltip } from './Tooltip';

export type SliderProps = {
    handlePrimaryColor?: string;
    handleSecondaryColor?: string;
    hideLabels?: boolean;
    hideMarkers?: boolean;
    hideTooltip?: boolean;
    labelFrequency?: { start?: number; destination?: number; step?: number };
    markPrimaryColor?: string;
    markSecondaryColor?: string;
    markerFrequency?: { start?: number; destination?: number; step?: number };
    marks?: SliderMark[];
    max?: number;
    min?: number;
    onChange?: (value: number) => void;
    onChangeCommitted?: (value: number) => void;
    ref?: Ref<HTMLSpanElement>;
    step?: number;
    trackPrimaryColor?: string;
    trackSecondaryColor?: string;
    value: number;
    width?: string;
};

export const Slider: FC<SliderProps> = forwardRef<HTMLSpanElement, SliderProps>(function Slider(
    {
        handlePrimaryColor,
        handleSecondaryColor,
        hideLabels,
        hideMarkers,
        hideTooltip,
        labelFrequency,
        markPrimaryColor,
        markSecondaryColor,
        markerFrequency,
        marks = [],
        max,
        min,
        onChange,
        onChangeCommitted,
        step,
        trackPrimaryColor,
        trackSecondaryColor,
        value,
        ...props
    },
    ref
) {
    const sliderGroupRef = ref ?? useRef<HTMLSpanElement>(null);
    const handleRef = useRef<HTMLButtonElement>(null);
    const [isHandleDown, setIsHandleDown] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(value);

    /** Create marks if none provided */
    if (!marks.length) {
        min = min ?? 0;
        max = max ?? 100;
        step = step ?? Math.round((max - min) / 10);

        for (let i = min; i < max; i += step) {
            const v = Number(i.toFixed(8));
            marks.push({ label: `${v}`, value: v });
        }
        marks.push({ label: `${max}`, value: max });
    }

    /** Make sure value is set to an allowable value */
    const allowableValues = marks.map((m) => m.value);
    if (!allowableValues.includes(value)) {
        value = allowableValues[0];
    }

    /** Add extra calculated props to provided marks */
    const _marks = useMemo((): CalculatedMarkObject[] => {
        return marks.map((mark, i) => {
            const dist = (i / (marks.length - 1)) * 100;

            return { ...mark, dist };
        });
    }, [marks]);

    /** Event handlers */
    const handlePointerMoveEvent = (e: MouseEvent) => handleMouseMove(e);
    const handlePointerUpEvent = () => {
        if (!isHandleDown) return;
        setIsHandleDown(false);
        handleChangeCommitted(progress);
    };

    const handleSliderClick = (e: ReactMouseEvent<HTMLSpanElement>) => {
        const groupRef = sliderGroupRef as RefObject<HTMLSpanElement>;
        if (!groupRef.current) return;

        const groupPos = groupRef.current.getBoundingClientRect();
        const percentage = ((e.clientX - groupPos.x) / groupPos.width) * 100;
        const closest = getNearest(_marks, percentage).value;

        if (closest === value) return;
        handleChange(closest);
        handleChangeCommitted(closest);
    };

    const handleChangeCommitted = (newValue: number) => {
        onChangeCommitted && onChangeCommitted(newValue);
        setIsHandleDown(false);
    };

    const handleChange = (newValue: number) => onChange && onChange(newValue);

    const handleMouseMove = (e: MouseEvent) => {
        if (!isHandleDown) return;

        const groupRef = sliderGroupRef as RefObject<HTMLSpanElement>;
        if (!groupRef.current) return;

        const groupPos = groupRef.current.getBoundingClientRect();
        const percentage = ((e.clientX - groupPos.x) / groupPos.width) * 100;
        const inDomain = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;

        if (progress === inDomain) return;

        // Lock to markers
        const closest = getNearest(_marks, inDomain).value;
        if (value === closest) return;
        handleChange(closest);
        setProgress(closest);
    };

    /** Set event listeners */
    useEffect(() => {
        if (!handleRef) {
            return;
        }
        window.addEventListener('pointermove', handlePointerMoveEvent);
        window.addEventListener('pointerup', handlePointerUpEvent);

        return () => {
            window.removeEventListener('pointermove', handlePointerMoveEvent);
            window.removeEventListener('pointerup', handlePointerUpEvent);
        };
    }, [handleRef, handlePointerMoveEvent]);

    /** Calculate handle position */
    const handlePosition = _marks.find((m) => m.value === value)?.dist;

    /** Create markers */
    const markers: JSX.Element[] = [];
    for (
        let i = markerFrequency?.start ?? 0;
        i < (markerFrequency?.destination ?? _marks.length);
        i += markerFrequency?.step ?? 1
    ) {
        const mark = _marks[i];
        markers.push(
            <Marker
                key={mark.dist}
                progress={handlePosition ?? 0}
                position={mark.dist}
                pColor={markPrimaryColor}
                sColor={markSecondaryColor}
            />
        );
    }

    /** Create labels */
    const labels: JSX.Element[] = [];
    for (
        let i = labelFrequency?.start ?? 0;
        i < (labelFrequency?.destination ?? _marks.length);
        i += labelFrequency?.step ?? 1
    ) {
        const mark = _marks[i];
        labels.push(
            <SliderLabel key={mark.label} position={mark.dist}>
                {mark.label}
            </SliderLabel>
        );
    }

    return (
        <SliderGroup hideLabels={hideLabels} onClick={handleSliderClick} ref={sliderGroupRef} {...props}>
            <Track sColor={trackSecondaryColor} />

            <Progress pColor={trackPrimaryColor} progress={handlePosition} />
            {!hideMarkers && markers}
            {!hideLabels && labels}

            <Tooltip hide={hideTooltip} tip={value}>
                <SliderHandle
                    onMouseDown={() => setIsHandleDown(true)}
                    pColor={handlePrimaryColor}
                    progress={handlePosition}
                    ref={handleRef}
                    sColor={handleSecondaryColor}
                />
            </Tooltip>
        </SliderGroup>
    );
});
