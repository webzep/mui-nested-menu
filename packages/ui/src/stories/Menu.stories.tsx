import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Menu } from '../components/Menu';
import { MenuItem } from '../components/MenuItem';
import { WithTheme } from './WithTheme';

const Component = Menu;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Component {...args}>
            <MenuItem label="Test Item 1" onClick={() => console.log('1')} />
            <MenuItem label="Test Item 2" onClick={() => console.log('2')} />
        </Component>
    </WithTheme>
);

export const Default = Template.bind({});
Default.args = {
    _nested: true,
    open: true,
    positionOverride: { left: 20, top: 80 },
};
