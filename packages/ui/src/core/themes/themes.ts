import { ThemeMode } from 'common';

import { BreakpointConfig, themeBreakpoints } from './breakpoint';
import { darkPalette, lightPalette, PaletteConfig } from './palette';
import { SizesConfig, themeSizes } from './sizes';
import { themeTypography, TypographyConfig } from './typography';
import { ZIndicesConfig } from './zIndices';

export type ThemeConfig = {
    breakpoints: BreakpointConfig;
    palette: PaletteConfig;
    sizes: SizesConfig;
    typeography: TypographyConfig;
    zIndex: ZIndicesConfig;
};

export const defaultTheme = (mode: ThemeMode) => ({
    breakpoints: themeBreakpoints,
    palette: mode === ThemeMode.LIGHT ? lightPalette : darkPalette,
    sizes: themeSizes,
    typeography: themeTypography,
    zIndex: {
        backdrop: 1400,
        fab: 1100,
        modal: 1500,
        navbar: 1200,
        snackbar: 1600,
        tooltip: 1700,
    },
});
