import React from 'react';
import MessageBar from './MessageBar';

export default {
    title: 'input/textfield/messageBar',
    component: MessageBar,
    argTypes: {
        onSend: { action: 'sent' },
    },
};

const Template = (args) => <MessageBar {...args} />;

export const Default = Template.bind({});
Default.args = {};