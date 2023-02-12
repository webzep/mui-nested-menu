import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';
import { Padding, Row, Scrollable } from 'ui';

import { APP_BAR_HEIGHT, MENU_PANEL_WIDTH } from '@/core/constants';

const AppLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const PanelContainer = styled.div`
    ${() => css`
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: scroll;
        padding-top: ${APP_BAR_HEIGHT}px;
        width: ${MENU_PANEL_WIDTH}px;
    `}
`;

const ContentContainer = styled.div`
    ${() => css`
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: scroll;
        padding-top: ${APP_BAR_HEIGHT}px;
        width: calc(100vw - ${MENU_PANEL_WIDTH}px);
    `}
`;

type AppLayoutWithNavBarProps = {
    appbar: ReactNode;
    panelContent: ReactNode;
};

export const AppLayoutWithNavBar: FC<AppLayoutWithNavBarProps> = ({ appbar, panelContent }) => (
    <AppLayoutContainer>
        {appbar}
        <Row>
            <PanelContainer>{panelContent}</PanelContainer>
            <ContentContainer>
                <Scrollable>
                    <Padding multiplier={12}>
                        <Outlet />
                    </Padding>
                </Scrollable>
            </ContentContainer>
        </Row>
    </AppLayoutContainer>
);
