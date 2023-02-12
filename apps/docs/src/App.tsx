import { FC, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, SnackbarProvider, ThemeProvider } from 'ui';

import { SiteRouter } from '@/core/routes/SiteRouter';
import { settingsContext, SettingsProvider } from '@/core/SettingsContext';

const App: FC = () => {
    const [settings] = useContext(settingsContext);

    return (
        <ThemeProvider theme={createTheme({ mode: settings.mode })}>
            <SnackbarProvider>
                <SiteRouter />
            </SnackbarProvider>
        </ThemeProvider>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Router>
        <SettingsProvider>
            <App />
        </SettingsProvider>
    </Router>
);
