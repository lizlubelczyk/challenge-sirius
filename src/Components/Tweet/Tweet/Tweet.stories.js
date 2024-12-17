import React from 'react';
import Tweet from './Tweet';
import tweets from '../../../resources/tweets (2).json';

export default {
    title: 'Tweet/Tweet',
    component: Tweet,
};

const Template = (args) => <Tweet {...args} />;

export const Default = Template.bind({});
Default.args = {
    tweet: tweets[0],
};

export const WithImages = Template.bind({});
WithImages.args = {
    tweet: tweets[1],
};

export const WithoutImages = Template.bind({});
WithoutImages.args = {
    tweet: {
        ...tweets[2],
        images: [],
    },
};