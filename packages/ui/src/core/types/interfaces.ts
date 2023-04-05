import { Attributes, HTMLAttributes, RefObject } from 'react';

export type ReactHTMLProps<T> = Attributes & HTMLAttributes<T> & Partial<RefObject<T>>;
