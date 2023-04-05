import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextField } from '../components/TextField';
import { WithTheme } from './WithTheme';

const Component = TextField;
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

export const WithoutValue = Template.bind({});
WithoutValue.args = {
    endIcon: 'KG',
    inputProps: { type: 'number' },
    label: 'Weight',
    variant: 'filled',
};

export const WithValue = Template.bind({});
WithValue.args = {
    endIcon: 'KG',
    inputProps: { type: 'number' },
    label: 'Weight',
    value: 34,
    variant: 'filled',
};
