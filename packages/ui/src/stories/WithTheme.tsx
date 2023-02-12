import styled from '@emotion/styled';
import { ThemeMode } from 'common';
import { FC, useState } from 'react';

import { Button } from '../components/Button';
import { NormalizeStyles } from '../components/NormalizeStyles';
import { ThemeProvider } from '../components/ThemeProvider';
import { createTheme } from '../utils/createTheme';

const Background = styled.div`
    background-color: ${({ theme }) => theme.palette.bg1};
    min-height: 400px;
    padding: 1rem;
`;

type WithThemeProps = {
    children: React.ReactNode;
};

export const WithTheme: FC<WithThemeProps> = ({ children }) => {
    const [mode, setMode] = useState<ThemeMode>(ThemeMode.LIGHT);

    return (
        <ThemeProvider theme={createTheme({ mode, rootFontSize: 16, theme: {} })}>
            <Button onClick={() => setMode(mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT)}>
                {mode === ThemeMode.DARK ? 'Switch to light' : 'Switch to dark'}
            </Button>

            <br />
            <br />

            <NormalizeStyles />

            <Background>{children}</Background>
        </ThemeProvider>
    );
};
