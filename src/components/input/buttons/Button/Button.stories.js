import { fn } from '@storybook/test';
import Button from './Button';

export default {
    title: 'input/Buttons/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
    text: 'Large Button',
    mode: 'default',
    size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
    text: 'Medium Button',
    mode: 'default',
    size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
    text: 'Small Button',
    mode: 'default',
    size: 'small',
};