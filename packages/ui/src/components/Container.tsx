import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, ReactNode } from 'react';

type ContainerCssProps = {
    fixedWidth?: string;
    limitHeightToScreen?: boolean;
    marginLeft?: string;
    marginRight?: string;
    maxWidth?: string;
    paddingLeft?: string;
    paddingRight?: string;
};

const ContainerRoot = styled.div<ContainerCssProps>`
    ${({
        fixedWidth,
        limitHeightToScreen,
        marginLeft,
        marginRight,
        maxWidth,
        paddingLeft,
        paddingRight,
        theme,
    }) => css`
        display: flex;
        flex-direction: column;
        margin-left: ${marginLeft === undefined ? 'auto' : marginLeft};
        margin-right: ${marginRight === undefined ? 'auto' : marginRight};
        max-height: ${limitHeightToScreen ? '100vh' : ''};
        padding-bottom: 0px;
        padding-left: ${paddingLeft || '0px'};
        padding-right: ${paddingRight || '0px'};
        padding-top: 0px;
        position: relative;
        width: 100%;

        ${fixedWidth
            ? css`
                  max-width: ${fixedWidth};
              `
            : css`
                  @media (min-width: ${theme.breakpoints.xs}) {
                      max-width: ${theme.breakpoints.xs};
                  }

                  @media (min-width: ${theme.breakpoints.sm}) {
                      max-width: ${theme.breakpoints.sm};
                  }

                  @media (min-width: ${theme.breakpoints.md}) {
                      max-width: ${theme.breakpoints.md};
                  }

                  @media (min-width: ${theme.breakpoints.lg}) {
                      max-width: ${theme.breakpoints.lg};
                  }

                  @media (min-width: ${theme.breakpoints.xl}) {
                      max-width: ${theme.breakpoints.xl};
                  }
              `}

        ${maxWidth &&
        `
            max-width: ${maxWidth};

			@media (min-width: ${maxWidth}) {
				max-width: ${maxWidth};
			}
        `}
    `};
`;

export type ContainerProps = Omit<ContainerCssProps, 'width'> & {
    children: ReactNode;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
    { children, ...props },
    ref
) {
    return (
        <ContainerRoot ref={ref} {...props}>
            {children}
        </ContainerRoot>
    );
});
