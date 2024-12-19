import React from 'react';
import Suggestions from './Suggestions';

export default {
    title: 'Components/Suggestions',
    component: Suggestions,
};

const Template = (args) => <Suggestions {...args} />;

export const Default = Template.bind({});
Default.args = {
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    darkMode: true,
};