import { ThemeMode } from 'common';
import { Dispatch, SetStateAction, useState, createContext, ReactNode } from 'react';

type SettingsProps = {
    mode: ThemeMode;
};

export type SettingsContextProps = [state: SettingsProps, setState: Dispatch<SetStateAction<SettingsProps>>];

export const settingsContext = createContext<SettingsContextProps | null>(null);

export const SettingsProvider = (props: { children: ReactNode }) => {
    const [state, setState] = useState<SettingsProps>({
        mode: ThemeMode.SYSTEM,
    });

    return <settingsContext.Provider value={[state, setState]}>{props.children}</settingsContext.Provider>;
};
