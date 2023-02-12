import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MenuItem } from '../components/MenuItem';
import { WithTheme } from './WithTheme';

const Component = MenuItem;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Component {...args}>Test Item</Component>
    </WithTheme>
);

export const Default = Template.bind({});
Default.args = {};
