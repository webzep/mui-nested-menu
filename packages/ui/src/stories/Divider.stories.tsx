import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../components/Card';
import { Divider } from '../components/Divider';
import { Row } from '../components/Row';
import { WithTheme } from './WithTheme';

const StyledDiv = styled(Card)`
    ${({ theme }) => css`
        background-color: ${theme.palette.brand1};
        color: ${theme.palette.onBrand1};
        display: flex;
        height: 100px;
        margin: 8px;
        width: 100px;
    `};
`;

const Component = Divider;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Component {...args} />
        <StyledDiv>Content</StyledDiv>
    </WithTheme>
);

export const Horizontal = Template.bind({});
Horizontal.args = {};

const Template2: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Row>
            <StyledDiv>Content</StyledDiv>
            <Component {...args} />
            <StyledDiv>Content</StyledDiv>
        </Row>
    </WithTheme>
);

export const Vertical = Template2.bind({});
Vertical.args = {
    vertical: true,
};
