import { forwardRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from './Backdrop';

export type DialogProps = {
    children: ReactNode;
    onClose?: () => void;
    open: boolean;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
    { children, onClose, open },
    ref
) {
    return createPortal(
        open ? (
            <Backdrop onClose={onClose} ref={ref}>
                {children}
            </Backdrop>
        ) : null,
        document.body
    );
});
