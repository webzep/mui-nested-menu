import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Column, Space } from 'ui';

import { PathNames } from '@/core/configs/paths';

const PanelContainer = styled(Column)`
    ${({ theme }) => css`
        background-color: ${theme.palette.bg2};
        height: 100%;
        padding: calc(${theme.sizes.padding} * 4);
        width: 100%;
    `}
`;

type NavigateButtonProps = {
    label: string;
    path: (typeof PathNames)[keyof typeof PathNames];
};

const MenuNavigateButton: FC<NavigateButtonProps> = ({ label, path }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = () => navigate(path);

    const isCurrentPath = location.pathname.includes(path);

    return (
        <Button
            themeFontColor={isCurrentPath ? 'font1' : 'font3'}
            themeBgColor={isCurrentPath ? 'bg3' : 'bg2'}
            onClick={handleNavigation}
            round
            variant="text"
        >
            {label}
        </Button>
    );
};

export const NavigationPanel: FC = () => {
    return (
        <PanelContainer gap="16px">
            <Space size="12px" vertical />
            <MenuNavigateButton label="Installation" path={PathNames.INSTALLATION} />
            <MenuNavigateButton label="<ContextMenu/>" path={PathNames.CONTEXT_MENU} />
            <MenuNavigateButton label="<NestedDropdown/>" path={PathNames.NESTED_DROPDOWN} />
            <MenuNavigateButton label="<NestedMenuItem/>" path={PathNames.NESTED_MENU_ITEM} />
            <MenuNavigateButton label="<IconMenuItem/>" path={PathNames.ICON_MENU_ITEM} />
        </PanelContainer>
    );
};
