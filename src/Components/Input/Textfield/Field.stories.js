import React from 'react';
import Field from './Field';

export default {
    title: 'Input/Textfield/Field',
    component: Field,
    argTypes: {
        onchange: { action: 'changed' },
    },
};

const Template = (args) => <Field {...args} />;

export const Error = Template.bind({});
Error.args = {
    fieldName: 'Error Field',
    mode: 'error',
    placeholder: 'Enter text...',
    onchange: () => {},
};

export const Enabled = Template.bind({});
Enabled.args = {
    fieldName: 'Enabled Field',
    mode: 'enabled',
    placeholder: 'Enter text...',
    onchange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
    fieldName: 'Disabled Field',
    mode: 'disabled',
    placeholder: 'Enter text...',
    onchange: () => {},
};