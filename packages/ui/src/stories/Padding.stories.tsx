import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../components/Card';
import { Padding } from '../components/Padding';
import { WithTheme } from './WithTheme';

const StyledDiv = styled(Card)`
    ${({ theme }) => css`
        background-color: ${theme.palette.brand1};
        color: ${theme.palette.onBrand1};
        display: flex;
        height: 100px;
        margin: 8px;
        width: 100%;
    `};
`;

const Component = Padding;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Component {...args}>
            <StyledDiv>Test Card</StyledDiv>
        </Component>
    </WithTheme>
);

export const Default = Template.bind({});
