import { FC, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import { Snack } from './Snack';
import { Snackbar, SnackbarMessage } from './Snackbar';
import { SnackbarContext } from './SnackbarContext';
import { defaultTheme, ThemeConfig } from '../../core/themes/themes';
import { ThemeMode } from 'common';

const addMessageDefaults = (message: SnackbarMessage): MessageWithId => {
    const defaults: Partial<SnackbarMessage> = {
        duration: 5000,
        persist: false,
        variant: 'info',
        width: 'auto',
    };

    return Object.assign({ id: Date.now() }, defaults, message);
};

export type MessageWithId = SnackbarMessage & {
    id: number;
};

type MessageQueue = {
    main: MessageWithId[];
};

export type SnackbarProviderProps = {
    children: ReactNode;
    margin?: { left?: number; right?: number; top?: number; bottom?: number };
    minWidth?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom';
    theme?: ThemeConfig;
};

export const SnackbarProvider: FC<SnackbarProviderProps> = ({ children, ...props }) => {
    const marginDefaults = {
        bottom: 24,
        left: 24,
        right: 24,
        top: 24,
    };

    const defaults = {
        margin: Object.assign({}, marginDefaults, props.margin),
        minWidth: '0',
        position: 'bottom-left',
        theme: defaultTheme(ThemeMode.SYSTEM),
    };

    Object.assign(props, defaults);

    const [messages, setMessages] = useState<MessageQueue>({
        main: [],
    });

    const addToQueue = (message: SnackbarMessage) => {
        if (message.content === undefined) return null;
        const msg = addMessageDefaults(message);
        setMessages((prev) => ({ ...prev, main: [...prev.main, msg] }));

        if (!msg.persist) {
            setTimeout(
                () => {
                    setMessages((prev) => ({
                        ...prev,
                        main: prev.main.filter((m) => m.id !== msg.id),
                    }));
                },
                (msg.duration ?? 3000) + 1000
            );
        }

        return msg.id;
    };

    return (
        <SnackbarContext.Provider
            value={{
                custom: addToQueue,
                error: (msg) => addToQueue({ content: msg, variant: 'error' }),
                info: (msg) => addToQueue({ content: msg, variant: 'info' }),
                success: (msg) => addToQueue({ content: msg, variant: 'success' }),
                warn: (msg) => addToQueue({ content: msg, variant: 'warning' }),
            }}
        >
            {children}

            {createPortal(
                <Snackbar {...props}>
                    {messages.main.map((msg) => (
                        <Snack key={msg.id} msg={msg} {...props} />
                    ))}
                </Snackbar>,
                document.body
            )}
        </SnackbarContext.Provider>
    );
};
