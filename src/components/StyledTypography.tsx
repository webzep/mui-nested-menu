import React from 'react';
import styled from '@emotion/styled';
import {Typography, TypographyProps} from 'themestress/components';

export const P = styled((props: TypographyProps) => (
  <Typography
    variant="body-medium"
    {...props}
    marginBottom={3}
    fontSize="16px"
  />
))`
  margin-bottom: ${({theme}) => `${theme.spacing.size * 6}px`};
`;

export const Code = styled((props: TypographyProps) => (
  <Typography
    variant="label-small"
    element="span"
    fontSize="1rem"
    fontColor="var(--sys-color-on-secondary-container)"
    bgColor="var(--sys-color-secondary-container)"
    {...props}
  />
))`
  font-family: monospace;
  border-radius: 4px;
  padding: 0.5px 2px;
  min-height: 1.2rem;
  line-height: unset;
`;

export const Subheading = styled.h2`
  margin-top: 48px;
`;
