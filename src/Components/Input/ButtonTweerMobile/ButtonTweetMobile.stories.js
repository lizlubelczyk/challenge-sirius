import React from 'react';
import ButtonTweetMobile from './ButtonTweetMobile';

export default {
    title: 'Components/ButtonTweetMobile',
    component: ButtonTweetMobile,
};

const Template = (args) => <ButtonTweetMobile {...args} />;

export const Default = Template.bind({});
Default.args = {
    onClick: () => alert('Button clicked!'),
};