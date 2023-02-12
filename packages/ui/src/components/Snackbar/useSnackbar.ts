import { useContext } from 'react';

import { SnackbarContext } from './SnackbarContext';

export const useSnackbar = () => {
    return useContext(SnackbarContext);
};
