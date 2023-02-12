import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../components/Card';
import { Column } from '../components/Column';
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

const Component = Row;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Column fullWidth>
            <Component {...args}>
                <StyledDiv>Test Card</StyledDiv>
                <StyledDiv>With some content</StyledDiv>
            </Component>
        </Column>
    </WithTheme>
);

export const Default = Template.bind({});
