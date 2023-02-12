import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from '../components/Typography';
import { WithTheme } from './WithTheme';

const Component = Typography;
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

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
aliquam, cupiditate inventore aspernatur tempore ea impedit dolores
perspiciatis unde praesentium, molestiae consequatur. Vel nulla
officia debitis error laboriosam perspiciatis accusantium.`;

export const H1 = Template.bind({});
H1.args = {
    children: 'Heading 1',
    variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
    children: 'Heading 2',
    variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
    children: 'Heading 3',
    variant: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
    children: 'Heading 4',
    variant: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
    children: 'Heading 5',
    variant: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
    children: 'Heading 6',
    variant: 'h6',
};

export const Subtitle = Template.bind({});
Subtitle.args = {
    children: lorem,
    variant: 'subtitle',
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
    children: lorem,
    variant: 'subtitle2',
};

export const Body = Template.bind({});
Body.args = {
    children: lorem,
    variant: 'body',
};

export const Body2 = Template.bind({});
Body2.args = {
    children: lorem,
    variant: 'body2',
};
