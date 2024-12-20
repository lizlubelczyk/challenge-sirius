import React from 'react';
import Tweet from './Tweet';
import tweets from '../../../resources/tweets (2).json';

export default {
    title: 'Tweets/Tweet',
    component: Tweet,
    argTypes: {
        tweet: { control: 'object' },
        darkMode: { control: 'boolean' },
    },
};

const Template = (args) => <Tweet {...args} />;

export const Default = Template.bind({});
Default.args = {
    tweet: tweets[0],
    darkMode: false,
};

export const WithImages = Template.bind({});
WithImages.args = {
    tweet: tweets[1],
    darkMode: false,
};

export const WithoutImages = Template.bind({});
WithoutImages.args = {
    tweet: tweets[2],
    darkMode: false,
};