import React from 'react';
import Comment from './Comment';
import tweets from '../../../resources/tweets (2).json';

export default {
    title: 'Tweets/Comment',
    component: Comment,
    argTypes: {
        comment: { control: 'object' },
        darkMode: { control: 'boolean' },
    },
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
    comment: tweets[0].comments[0],
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    comment: tweets[0].comments[0],
    darkMode: true,
};