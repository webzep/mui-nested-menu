import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

const ModalContainer = styled.div`
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: ${({ theme }) => theme.zIndex.modal};
`;

type ModalProps = {
    children: ReactNode;
    onClose?: () => void;
    open: boolean;
};

export const Modal: FC<ModalProps> = ({ children, onClose, open }) => {
    return open ? <ModalContainer onClick={onClose}>{children}</ModalContainer> : null;
};
