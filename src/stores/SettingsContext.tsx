import React, {Dispatch, SetStateAction, useState, useEffect} from 'react';
import {useMediaQuery} from 'themestress/core';

interface SettingsProps {
  mode: 'dark' | 'light';
}

type SettingsContextProps = [
  state: SettingsProps,
  setState: Dispatch<SetStateAction<SettingsProps>>,
];

export const settingsContext = React.createContext<SettingsContextProps>(null);

export const SettingsProvider = (props: {children: React.ReactNode}) => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [state, setState] = useState<SettingsProps>({
    mode: prefersDark ? 'dark' : 'light',
  });

  useEffect(() => {
    setState({mode: prefersDark ? 'dark' : 'light'});
  }, [prefersDark]);

  return (
    <settingsContext.Provider value={[state, setState]}>
      {props.children}
    </settingsContext.Provider>
  );
};
