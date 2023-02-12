import { css, Global, useTheme } from '@emotion/react';
import { FC } from 'react';

export const NormalizeStyles: FC = () => {
    const theme = useTheme();

    return (
        <Global
            styles={css`
                * {
                    box-sizing: border-box;
                    font-family: ${theme.typeography.family};
                    margin: 0;
                    padding: 0;
                }

                a {
                    color: ${theme.palette.brandAccent};
                }
            `}
        />
    );
};
