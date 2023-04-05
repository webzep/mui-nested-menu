import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';

import { SliderProps } from './Slider';

type PrimaryColor = string | undefined;

type SecondaryColor = string | undefined;

export type SliderMark = {
    value: number;
    label?: string;
};

export type CalculatedMarkObject = SliderMark & {
    dist: number;
};

export const SliderGroup = styled.span<Partial<SliderProps>>`
    ${({ hideLabels, width }) => {
        return css`
            border-radius: 12px;
            box-sizing: content-box;
            color: inherit;
            cursor: pointer;
            display: inline-block;
            height: 4px;
            margin-bottom: ${!hideLabels && '20px'};
            padding: 13px 0;
            position: relative;
            touch-action: none;
            user-select: none;
            width: ${width ?? '300px'};
        `;
    }};
`;

type TrackProps = {
    sColor: SecondaryColor;
};

export const Track = memo(styled.span<TrackProps>`
    ${({ sColor, theme }) => {
        return css`
            background-color: ${sColor ?? theme.palette.brand1};
            border-radius: inherit;
            display: block;
            opacity: 0.4;
            height: inherit;
            position: absolute;
            width: 100%;
        `;
    }};
`);

type ProgressProps = {
    pColor: PrimaryColor;
    progress: number | undefined;
};

export const Progress = styled.span<ProgressProps>`
    ${({ pColor, progress, theme }) => {
        return css`
            background-color: ${pColor ?? theme.palette.brand1};
            border-radius: inherit;
            display: block;
            height: inherit;
            position: absolute;
            width: ${progress}%;
        `;
    }};
`;

type HandleProps = {
    progress: number | undefined;
    pColor: PrimaryColor;
    sColor: SecondaryColor;
};

export const SliderHandle = styled.button<HandleProps>`
    ${({ pColor, progress, sColor, theme }) => {
        return css`
            background-color: ${pColor ?? theme.palette.brand1};
            border: none;
            border-radius: 50%;
            box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%),
                0px 1px 8px 0px rgb(0 0 0 / 12%);
            box-sizing: border-box;
            height: 20px;
            left: ${progress}%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            width: 20px;

            &:hover {
                box-shadow: 0px 0px 0px 5px ${sColor ?? 'rgb(120 120 120 / 20%)'};
            }
            &:active {
                box-shadow: 0px 0px 0px 8px ${sColor ?? 'rgb(120 120 120 / 30%)'};
            }
            &:focus-visible {
                outline: 2px solid royalblue;
                outline-offset: 2px;
            }
        `;
    }};
`;

type MarkerProps = {
    pColor: PrimaryColor;
    position: number;
    progress: number;
    sColor: SecondaryColor;
};

export const Marker = memo(styled.span<MarkerProps>`
    ${({ pColor, position, progress, sColor, theme }) => {
        return css`
            background-color: ${progress > position
                ? pColor ?? theme.palette.onBrand1
                : sColor ?? theme.palette.onBrand1};
            border-radius: 50%;
            height: 3px;
            left: ${position}%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 3px;
        `;
    }};
`);

type LabelProps = {
    position: number;
};

export const SliderLabel = memo(styled.span<LabelProps>`
    font-size: 0.875rem;
    font-weight: 400;
    left: ${({ position }) => position}%;
    letter-spacing: 0.01071em;
    line-height: 1.43;
    position: absolute;
    top: 30px;
    transform: translateX(-50%);
    white-space: nowrap;
`);
