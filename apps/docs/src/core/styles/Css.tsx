import React from 'react';
import { css, Global } from '@emotion/react';
import { normalizeCss } from 'core/styles/Normalize.css';

interface CssProps {
	fontSize: number;
}
export const Css: React.FC<CssProps> = ({ fontSize }: CssProps) => {
	return (
		<Global
			styles={css`
				:root {
					font-family: 'Montserrat', 'Roboto', Helvetica, Arial,
						sans-serif;
					font-size: ${fontSize}px;
					box-sizing: border-box;

					${normalizeCss};

					a {
						color: #680ce9;
					}

					li {
						margin-bottom: 8px;
					}
				}
			`}
		/>
	);
};
