import React from 'react';
import Comment from './Comment';

export default {
    title: 'Components/Comment',
    component: Comment,
    argTypes: {
        comment: { control: 'object' },
        darkMode: { control: 'boolean' },
    },
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
    comment: {
        author: {
            profilePicture: 'https://via.placeholder.com/150',
            firstName: 'John',
            username: 'john_doe',
        },
        content: 'This is a comment.',
    },
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    comment: {
        author: {
            profilePicture: 'https://via.placeholder.com/150',
            firstName: 'John',
            username: 'john_doe',
        },
        content: 'This is a comment.',
    },
    darkMode: true,
};