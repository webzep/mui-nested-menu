import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

const PageContainerRoot = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 1200px;
    width: 100%;
    padding-top: 30px;
    padding-left: 120px;
    padding-right: 120px;
`;

type PageContainerProps = {
    children: ReactNode;
};

export const PageContainer: FC<PageContainerProps> = ({ children }) => (
    <PageContainerRoot>{children}</PageContainerRoot>
);
