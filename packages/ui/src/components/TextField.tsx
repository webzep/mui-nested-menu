import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import { ReactHTMLProps } from '../core/types/interfaces';
import { TextFieldBase } from './TextFieldBase';

export type TextFieldProps = ReactHTMLProps<HTMLDivElement> & {
    defaultValue?: string | number;
    disabled?: boolean;
    endIcon?: ReactNode;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    label?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    startIcon?: ReactNode;
    value?: string | number;
    variant?: 'filled' | 'open' | 'outlined';
};

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(props, ref) {
    return <TextFieldBase ref={ref} componentName="TextField" variant={props.variant ?? 'open'} {...props} />;
});
