import React from 'react';
import DetailedTweet from './DetailedTweet';
import tweets from '../../../resources/tweets (2).json';

export default {
    title: 'Tweets/DetailedTweet',
    component: DetailedTweet,
    argTypes: {
        tweet: { control: 'object' },
        onClick: { action: 'clicked' },
        darkMode: { control: 'boolean' },
    },
};

const Template = (args) => <DetailedTweet {...args} />;

export const Default = Template.bind({});
Default.args = {
    tweet: tweets[0],
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    tweet: tweets[0],
    darkMode: true,
};