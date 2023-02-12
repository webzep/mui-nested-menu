import { ThemeProvider as EmotionThemeProvider, ThemeProviderProps } from '@emotion/react';
import { FC } from 'react';

import { NormalizeStyles } from './NormalizeStyles';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
    return (
        <EmotionThemeProvider {...props}>
            <NormalizeStyles />
            {children}
        </EmotionThemeProvider>
    );
};
