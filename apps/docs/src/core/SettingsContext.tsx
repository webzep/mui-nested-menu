import { ThemeMode } from 'common';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type SettingsProps = {
    mode: ThemeMode;
};

type SettingsContextProps = [state: SettingsProps, setState: Dispatch<SetStateAction<SettingsProps>>];

export const settingsContext = createContext<SettingsContextProps | null>(null);

export const SettingsProvider = (props: { children: ReactNode }) => {
    const [state, setState] = useState<SettingsProps>({
        mode: ThemeMode.SYSTEM,
    });

    return <settingsContext.Provider value={[state, setState]}>{props.children}</settingsContext.Provider>;
};
