import React, { Fragment, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, Row, useSnackbar } from 'ui';
import Prism from 'prismjs';
import '@/core/styles/prism.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';

type CodeBlockProps = {
    code?: string;
    collapsable?: boolean;
    noCopy?: boolean;
    lang?: 'tsx' | 'typescript';
};

const Pre = styled.pre<{ restrictHeight: number }>`
    margin-top: 0;
    max-height: ${({ restrictHeight }) => (restrictHeight ? '185px' : '1000px')};
    position: relative;
    transition: max-height 300ms ease-in-out;
`;

const Code = styled.code`
    ${({ theme }) => css`
        border-radius: ${theme.sizes.borderRadiusMedium};
    `};
`;

export const CodeBlock = React.memo(
    ({ code, collapsable, noCopy, lang = 'tsx', ...props }: CodeBlockProps) => {
        const snackbar = useSnackbar();
        const ref = useRef(null);
        const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsable ?? false);

        useEffect(() => {
            if (ref.current) {
                Prism.highlightElement(ref.current);
            }
        }, [ref.current, code]);

        const toggleCollapse = () => {
            setIsCollapsed((prev) => !prev);
            setTimeout(() => {
                if (ref && ref.current) {
                    Prism.highlightElement(ref.current);
                }
            }, 5);
        };

        const handleCopyClicked = () => {
            navigator.clipboard.writeText(code ?? '').then(() => snackbar.success('Copied to clipboard'));
        };

        const restrictHeight = collapsable && isCollapsed;

        return (
            <Fragment>
                <Row justify="flex-end">
                    {collapsable && (
                        <Button onClick={toggleCollapse} variant="text">
                            {isCollapsed ? 'Expand' : 'Collapse'}
                        </Button>
                    )}

                    {!noCopy && (
                        <Button onClick={handleCopyClicked} variant="text">
                            Copy
                        </Button>
                    )}
                </Row>
                <Pre restrictHeight={restrictHeight ? 1 : 0} {...props}>
                    <Code className={`language-${lang}`} ref={ref}>
                        {code}
                    </Code>
                </Pre>
            </Fragment>
        );
    }
);
