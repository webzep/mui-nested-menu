import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../components/Card';
import { Ripple } from '../components/Ripple';
import { WithTheme } from './WithTheme';

const StyledContainer = styled(Card)`
    ${({ theme }) => css`
        background-color: ${theme.palette.brand1};
        color: ${theme.palette.onBrand1};
        overflow: hidden;
        padding: 1rem;
        position: relative;
        width: 300px;
    `};
`;

const Component = Ripple;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <StyledContainer>
            <Component {...args} />
            <h2>Click Me</h2>
            <p>The parent must be relative and overflow hidden to stop the ripple from overflowing.</p>
        </StyledContainer>
    </WithTheme>
);

export const Default = Template.bind({});
