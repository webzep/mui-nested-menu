import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SettingsProvider } from 'stores/SettingsContext';
import { ThemeProvider } from 'core/Theme';
import { createSectionRoutes } from 'core/routeMap';
import { Home } from 'pages/HomeLayout';
import { SnackbarProvider } from 'themestress/components';

export const App: React.FC = () => {
	return (
		<SettingsProvider>
			<ThemeProvider>
				<SnackbarProvider>
					<Router>
						<Routes>
							<Route path={'*'} element={<Home />}>
								{createSectionRoutes()}
							</Route>
						</Routes>
					</Router>
				</SnackbarProvider>
			</ThemeProvider>
		</SettingsProvider>
	);
};
