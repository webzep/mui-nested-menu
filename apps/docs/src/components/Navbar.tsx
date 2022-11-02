import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { settingsContext, SettingsContextProps } from 'stores/SettingsContext';
import {
	Flex,
	Surface,
	Spacer,
	Switch,
	Typography,
} from 'themestress/components';

const StyledNavbar = styled(Surface)`
	height: 60px;
	z-index: var(--sys-z-index-navbar);
	border-bottom: 1px solid var(--sys-color-primary-container);
`;

export const Navbar = () => {
	const [settings, setSettings] = useContext(
		settingsContext
	) as SettingsContextProps;

	const darkMode = settings.mode === 'dark';

	const handleSwitchToggle = () => {
		setSettings((prev) => ({
			...prev,
			mode: darkMode ? 'light' : 'dark',
		}));
	};

	return (
		<StyledNavbar bgColor='var(--sys-color-surface)'>
			<Flex
				height='100%'
				row
				alignItems='center'
				paddingLeft={6}
				justifyContent='space-between'
			>
				<Typography
					variant='headline-small'
					element='span'
					margin={0}
					fontColor='var(--sys-color-tertiary)'
					weight={500}
				>
					MUI Nested Menu
				</Typography>
				<Flex alignItems='center' marginRight={4}>
					<Typography>Dark Mode</Typography>
					<Spacer size='8px' />
					<Switch checked={darkMode} onChange={handleSwitchToggle} />
				</Flex>
			</Flex>
		</StyledNavbar>
	);
};
