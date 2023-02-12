import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '../components/Card';
import { WithTheme } from './WithTheme';

const Component = Card;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Component {...args}>
            <h3>Test Card</h3>
            <p>With some content</p>
        </Component>
    </WithTheme>
);

export const Default = Template.bind({});
