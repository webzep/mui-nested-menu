import { DeepPartial, mergeDeep, ThemeMode } from 'common';

import { useMediaQuery } from '../core/hooks/useMediaQuery';
import { defaultTheme, ThemeConfig } from '../core/themes/themes';

type CreateThemeProps = {
    mode?: ThemeMode;
    rootFontSize?: number;
    theme?: DeepPartial<ThemeConfig>;
};

export const createTheme = ({
    mode = ThemeMode.SYSTEM,
    rootFontSize = 16,
    theme,
}: CreateThemeProps = {}): ThemeConfig => {
    const prefersDark = useMediaQuery('prefersDark');
    const modeToUse = mode === ThemeMode.SYSTEM ? (prefersDark ? ThemeMode.DARK : ThemeMode.LIGHT) : mode;
    const themeConfig = defaultTheme(modeToUse);
    const config = mergeDeep<ThemeConfig>(themeConfig, theme ?? {});

    document.documentElement.style.fontSize = `${rootFontSize}px`;

    return config;
};
