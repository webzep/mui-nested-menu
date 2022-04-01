import React, {useContext} from 'react';
import {ThemeProvider as EmotionProvider} from '@emotion/react';
import {Css} from '@core/styles/Css';
import {settingsContext} from '@stores/SettingsContext';
import {Theme} from 'themestress/core/classes/theme/Theme';

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProps) => {
  const [settings] = useContext(settingsContext);

  const theme = new Theme({
    palette: {mode: settings.mode},
    typography: {regular: {font: 'Montserrat'}, medium: {font: 'Montserrat'}},
  });

  return (
    <EmotionProvider theme={theme}>
      <Css fontSize={14} />
      {children}
    </EmotionProvider>
  );
};
