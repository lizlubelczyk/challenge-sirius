import React from 'react';
import ShowMore from './ShowMore';

export default {
    title: 'Components/ShowMore',
    component: ShowMore,
};

const Template = (args) => <ShowMore {...args} />;

export const Default = Template.bind({});
Default.args = {
    onClick: () => alert('Show More clicked'),
    showAll: false,
    darkMode: false,
};

export const ShowLess = Template.bind({});
ShowLess.args = {
    onClick: () => alert('Show Less clicked'),
    showAll: true,
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    onClick: () => alert('Show More clicked'),
    showAll: false,
    darkMode: true,
};

export const DarkModeShowLess = Template.bind({});
DarkModeShowLess.args = {
    onClick: () => alert('Show Less clicked'),
    showAll: true,
    darkMode: true,
};