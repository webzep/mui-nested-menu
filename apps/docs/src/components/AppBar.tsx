import styled from '@emotion/styled';
import { FC, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Menu, MenuItem, Tooltip, Typography } from 'ui';

import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import { ThemeMode } from 'common';
import { APP_BAR_HEIGHT } from '@/core/constants';
import { LightMode } from '@mui/icons-material';
import { settingsContext } from '@/core/SettingsContext';

const titleCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const ActionsGroup = styled.div`
    display: flex;
`;

const AppBarContainer = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.bg1};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    height: ${APP_BAR_HEIGHT}px;
    justify-content: space-between;
    max-height: ${APP_BAR_HEIGHT}px;
    min-height: ${APP_BAR_HEIGHT}px;
    padding: 0 2rem;
    position: fixed;
    width: 100vw;
    z-index: ${({ theme }) => theme.zIndex.navbar};
`;

export const AppBar: FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const anchorElRef = useRef(null);
    const [settings, setSettings] = useContext(settingsContext);

    const toggleMenu = () => setOpen((prev) => !prev);

    const handleHomeClicked = () => navigate(`/`);

    const handleThemeChanged = (theme: ThemeMode) => () => setSettings({ ...settings, mode: theme });

    return (
        <AppBarContainer>
            <Tooltip direction="bottom" tip="Home">
                <Button onClick={handleHomeClicked} variant="text">
                    <Typography noMargin noPointer variant="h6">
                        MUI Nested Menu
                    </Typography>
                </Button>
            </Tooltip>
            <ActionsGroup>
                <Tooltip direction="bottom" tip="Theme">
                    <Button onClick={toggleMenu} ref={anchorElRef} variant="text">
                        {titleCase(settings?.mode)}
                    </Button>
                </Tooltip>
                <Menu
                    anchorElement={anchorElRef}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    onClose={toggleMenu}
                    open={open}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem label="Light" onClick={handleThemeChanged(ThemeMode.LIGHT)} />
                    <MenuItem label="Dark" onClick={handleThemeChanged(ThemeMode.DARK)} />
                    <MenuItem label="System" onClick={handleThemeChanged(ThemeMode.SYSTEM)} />
                </Menu>
            </ActionsGroup>
        </AppBarContainer>
    );
};
