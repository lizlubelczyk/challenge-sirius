import React from 'react';
import DetailedTweet from './DetailedTweet';

export default {
    title: 'Components/DetailedTweet',
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
    tweet: {
        id: '1',
        content: 'This is a detailed tweet.',
        images: ['https://via.placeholder.com/150'],
        createdAt: '2023-10-01T12:00:00Z',
        reactions: [
            { type: 'LOVE' },
            { type: 'RETWEET' },
        ],
        comments: [
            { content: 'Great tweet!' },
        ],
        author: {
            profilePicture: 'https://via.placeholder.com/150',
            firstName: 'John',
            username: 'john_doe',
        },
    },
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    tweet: {
        id: '1',
        content: 'This is a detailed tweet.',
        images: ['https://via.placeholder.com/150'],
        createdAt: '2023-10-01T12:00:00Z',
        reactions: [
            { type: 'LOVE' },
            { type: 'RETWEET' },
        ],
        comments: [
            { content: 'Great tweet!' },
        ],
        author: {
            profilePicture: 'https://via.placeholder.com/150',
            firstName: 'John',
            username: 'john_doe',
        },
    },
    darkMode: true,
};