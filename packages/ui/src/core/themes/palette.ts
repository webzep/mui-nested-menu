export const blueGreyShades = {
    50: '#fefeff',
    100: '#eff0f2', // eslint-disable-line sort-keys
    200: '#dfdee5',
    300: '#cfd0d9',
    400: '#bfbfcf',
    500: '#b0b0c4',
    600: '#a1a1b9',
    700: '#9292ae',
    800: '#8383a3',
    900: '#747496',
};

export const greyShades = {
    50: '#f2f3f5',
    100: '#ebebeb', // eslint-disable-line sort-keys
    200: '#d9dadc',
    300: '#c7c9cc',
    400: '#a8acaf',
    500: '#72767d',
    600: '#4f545c',
    700: '#36393f',
    800: '#2f3136',
    900: '#202225',
};

export type PaletteConfig = {
    bg1: string;
    bg2: string;
    bg3: string;
    border1: string;
    brand1: string;
    brand2: string;
    brandAccent: string;
    darkAccent: string;
    disabled: string;
    font1: string;
    font2: string;
    font3: string;
    mode: 'dark' | 'light';
    onBrand1: string;
    statusError: string;
    statusInfo: string;
    statusSuccess: string;
    statusWarning: string;
};

export const lightPalette: PaletteConfig = {
    bg1: blueGreyShades[50],
    bg2: blueGreyShades[100],
    bg3: blueGreyShades[200],
    border1: '#d0d0d0',
    brand1: '#fcb63e',
    brand2: '#d59e3a',
    brandAccent: '#ffa200',
    darkAccent: blueGreyShades['700'],
    disabled: '#00000033',
    font1: '#000000',
    font2: '#414141',
    font3: '#8b8d91',
    mode: 'light',
    onBrand1: '#FFFFFF',
    statusError: '#f44336',
    statusInfo: '#2196f3',
    statusSuccess: '#4caf50',
    statusWarning: '#ff9800',
};

export const darkPalette: PaletteConfig = {
    bg1: greyShades[700],
    bg2: greyShades[800],
    bg3: greyShades[900],
    border1: '#6c6895',
    brand1: '#5900BE',
    brand2: '#340060',
    brandAccent: '#BF04DC',
    darkAccent: blueGreyShades[900],
    disabled: '#FFFFFF33',
    font1: '#FFFFFF',
    font2: '#d7d7d7',
    font3: '#96989d',
    mode: 'dark',
    onBrand1: '#FFFFFF',
    statusError: '#f44336',
    statusInfo: '#2196f3',
    statusSuccess: '#4caf50',
    statusWarning: '#ff9800',
};
