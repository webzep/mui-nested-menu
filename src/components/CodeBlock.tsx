import React, {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import {Flex, OutlinedButton} from 'themestress/components';

import Prism from 'prismjs';
import '@core/styles/prism.css';
import 'prismjs/components/prism-jsx'; // required for TSX highlighting
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';

interface CodeBlockProps {
  code?: string;
  collapsable?: boolean;
  noCopy?: boolean;
  lang?: 'tsx' | 'typescript' | 'bash';
}

const Pre = styled.pre<{restrictHeight: number}>`
  position: relative;
  margin-top: 0;
  border-radius: ${({theme}) => `${theme.spacing}px !important`};
  max-height: ${({restrictHeight}) => (restrictHeight ? '185px' : '1000px')};
  transition: max-height 300ms ease-in-out;
`;

export const CodeBlock = React.memo(
  ({code, collapsable, noCopy, lang = 'tsx', ...props}: CodeBlockProps) => {
    const ref = useRef(null);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsable);

    useEffect(() => {
      if (ref.current) {
        Prism.highlightElement(ref.current);
      }
    }, [ref.current, code]);

    const toggleCollapse = () => {
      setIsCollapsed(prev => !prev);
      setTimeout(() => {
        Prism.highlightElement(ref && ref.current);
      }, 5);
    };

    const restrictHeight = collapsable && isCollapsed;

    return (
      <>
        <Flex justifyContent="flex-end" height="fit-content">
          {collapsable && (
            <OutlinedButton onClick={toggleCollapse}>
              {isCollapsed ? 'Expand' : 'Collapse'}
            </OutlinedButton>
          )}

          {!noCopy && (
            <OutlinedButton
              onClick={() => navigator.clipboard.writeText(code)}
              marginTop={4}
            >
              Copy
            </OutlinedButton>
          )}
        </Flex>
        <Pre restrictHeight={restrictHeight ? 1 : 0} {...props}>
          <code className={`language-${lang}`} ref={ref}>
            {code}
          </code>
        </Pre>
      </>
    );
  },
);
