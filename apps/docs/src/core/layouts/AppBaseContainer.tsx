import styled from '@emotion/styled';
import { FC } from 'react';
import { Outlet } from 'react-router';

const AppBaseElement = styled.div`
    background-color: ${({ theme }) => theme.palette.bg1};
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
`;

export const AppBaseContainer: FC = () => (
    <AppBaseElement>
        <Outlet />
    </AppBaseElement>
);
