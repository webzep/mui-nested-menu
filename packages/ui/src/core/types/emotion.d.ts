/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable import/no-unresolved */
import { ThemeConfig } from '../themes/themes';

declare module '@emotion/react' {
    export interface Theme extends ThemeConfig {}
}
