import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { forwardRef, ReactNode, RefObject, useEffect, useRef, useState } from 'react';

import { Input } from './Input';
import { MenuItem } from './MenuItem';

const ListContainer = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.palette.bg2};
        border: 1px solid ${theme.palette.border1};
        border-radius: 8px;
        overflow: hidden;
        width: 100%;
    `};
`;

const QuickSearchContainer = styled.div<{ open: boolean }>`
    ${({ open, theme }) => css`
        background-color: ${theme.palette.bg2};
        border: 1px solid ${theme.palette.border1};
        border-radius: 8px;
        box-sizing: border-box;
        color: ${theme.palette.font1};
        display: flex;
        flex-direction: column;
        font-weight: 600;
        height: 40px;
        left: 8px;
        margin: 0px;
        padding: 0px;
        position: absolute;
        top: 8px;
        transition: width 0.2s ease-in-out;
        width: ${open ? 300 : 40}px;

        .toolkit-button {
            align-items: center;
            cursor: pointer;
            display: flex;
            justify-content: center;
            min-height: 38px;
            text-align: center;
            width: 38px;
        }

        input {
            border: none;
            box-sizing: border-box;
            font-size: 16px;
            margin: 0px;
            max-width: 100%;
            min-height: 38px;
            outline: none;
            padding: 0px;
            padding-left: 8px;
        }

        :after {
            color: ${theme.palette.font3};
            content: ${open ? "'ESC'" : "' '"};
            font-size: 12px;
            position: absolute;
            right: 8px;
            top: 12px;
        }
    `};
`;

export type QuickSearchProps = {
    initialIsOpen: boolean;
    items: {
        callback: () => void;
        description: string;
        icon: ReactNode;
        label: string;
        meta?: string[];
    }[];
};

export const QuickSearch = forwardRef<HTMLDivElement, QuickSearchProps>(function QuickSearch(
    { initialIsOpen, items },
    ref
) {
    const [term, setTerm] = useState('');
    const [open, setOpen] = useState(initialIsOpen);
    const searchRef = (ref as RefObject<HTMLDivElement>) ?? useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => setTimeout(() => inputRef.current?.focus(), 100);

    useEffect(() => {
        const keydownHandler = (e: KeyboardEvent) => {
            if (e.key === '/') {
                setOpen(true);
                focusInput();
            }

            if (e.key === 'Escape') {
                setOpen(false);
            }
        };

        addEventListener('keydown', keydownHandler);

        const clickHandler = (e: MouseEvent) => {
            const clickAway = open && searchRef.current && !searchRef.current.contains(e.target as Node);
            clickAway && setOpen(false);

            const clickSearch = !open && searchRef.current && searchRef.current.contains(e.target as Node);
            clickSearch && setOpen(true);
        };

        addEventListener('pointerdown', clickHandler);

        return () => {
            removeEventListener('keydown', keydownHandler);
            removeEventListener('pointerdown', clickHandler);
        };
    }, [open]);

    const filteredItems = items.filter((item) => {
        return (
            item.label.toLowerCase().includes(term.toLowerCase()) ||
            item.description.toLowerCase().includes(term.toLowerCase()) ||
            (item.meta && item.meta.some((meta) => meta.toLowerCase().includes(term.toLowerCase())))
        );
    });

    return (
        <QuickSearchContainer ref={searchRef} open={open}>
            {!open && <div className="toolkit-button">/</div>}

            {open && (
                <Input
                    ref={inputRef}
                    placeholder="Toolkit"
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                />
            )}

            {open && filteredItems && filteredItems.length > 0 && (
                <ListContainer>
                    {filteredItems.map((item) => (
                        <MenuItem key={item.label} {...item} />
                    ))}
                </ListContainer>
            )}
        </QuickSearchContainer>
    );
});
