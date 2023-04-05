import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Backdrop } from '../components/Backdrop';
import { WithTheme } from './WithTheme';

const Component = Backdrop;
type ComponentType = typeof Component;

export default {
    component: Component,
    title: Component.name,
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ ...args }) => (
    <WithTheme>
        <Component {...args} />
    </WithTheme>
);

export const Default = Template.bind({});
Default.args = {};
