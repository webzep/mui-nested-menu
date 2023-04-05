import { createContext } from 'react';

import { SnackbarMessage } from './Snackbar';

export type SnackbarContextProps = {
    custom: (msg: SnackbarMessage) => void;
    error: (msg: string) => void;
    info: (msg: string) => void;
    success: (msg: string) => void;
    warn: (msg: string) => void;
};

export const SnackbarContext = createContext<SnackbarContextProps | null>(null);
