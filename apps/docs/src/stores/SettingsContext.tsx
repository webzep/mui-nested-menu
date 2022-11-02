import React, {
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
	createContext,
	ReactNode,
} from 'react';
import { useMediaQuery } from 'themestress/core';

interface SettingsProps {
	mode: 'dark' | 'light';
}

export type SettingsContextProps = [
	state: SettingsProps,
	setState: Dispatch<SetStateAction<SettingsProps>>
];

export const settingsContext = createContext<SettingsContextProps | null>(null);

export const SettingsProvider = (props: { children: ReactNode }) => {
	const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
	const [state, setState] = useState<SettingsProps>({
		mode: prefersDark ? 'dark' : 'light',
	});

	useEffect(() => {
		setState({ mode: prefersDark ? 'dark' : 'light' });
	}, [prefersDark]);

	return (
		<settingsContext.Provider value={[state, setState]}>
			{props.children}
		</settingsContext.Provider>
	);
};
