import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../components/Button';
import { WithTheme } from './WithTheme';

const Component = Button;
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

export const Contained = Template.bind({});
Contained.args = {
    label: 'Contained',
    variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: 'Outlined',
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    label: 'Text',
    variant: 'text',
};
