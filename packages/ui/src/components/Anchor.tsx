import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode } from 'react';

const AnchorTag = styled.a`
    ${({ theme }) => css`
        color: ${theme.palette.brandAccent};
        position: relative;
        text-decoration: none;

        &:hover {
            color: ${theme.palette.brandAccent};
        }

        &:hover::before {
            transform: scaleX(1);
        }

        ::before {
            background-color: ${theme.palette.brandAccent};
            bottom: 0;
            content: '';
            display: block;
            height: 2px;
            left: 0;
            position: absolute;
            transform-origin: top left;
            transform: scaleX(0);
            transition: transform 0.3s ease;
            width: 100%;
        }
    `};
`;

export type AnchorProps = {
    children: ReactNode;
    to: string;
};

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor({ children, to }, ref) {
    return (
        <AnchorTag href={to} ref={ref}>
            {children}
        </AnchorTag>
    );
});
