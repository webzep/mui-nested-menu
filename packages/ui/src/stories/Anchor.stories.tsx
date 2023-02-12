import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Anchor } from '../components/Anchor';
import { WithTheme } from './WithTheme';

const Component = Anchor;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Component {...args}>Test Anchor</Component>
    </WithTheme>
);

export const Default = Template.bind({});
Default.args = {
    to: '/',
};
