export type BreakpointConfig = {
    lg: string;
    md: string;
    sm: string;
    xl: string;
    xs: string;
};

export type Breakpoint = keyof BreakpointConfig;

export const themeBreakpoints: BreakpointConfig = {
    lg: '1025px',
    md: '719px',
    sm: '481px',
    xl: '1201px',
    xs: '320px',
};
