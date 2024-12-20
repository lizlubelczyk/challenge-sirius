import React from 'react';
import Actions from './Actions';

export default {
    title: 'tweets/Actions',
    component: Actions,
};

const Template = (args) => <Actions {...args} />;

export const Default = Template.bind({});
Default.args = {
    likes: 10,
    comments: 5,
    retweets: 3,
    isLiked: false,
    onLike: () => console.log('Like button clicked'),
    isRetweeted: false,
    onRetweet: () => console.log('Retweet button clicked'),
};