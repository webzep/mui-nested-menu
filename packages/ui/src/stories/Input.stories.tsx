import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '../components/Input';
import { WithTheme } from './WithTheme';

const Component = Input;
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
Default.args = {
    placeholder: 'Test Input',
};
