import React from 'react';
import Suggestions from './Suggestions';
import users from '../../../resources/users.json';

export default {
    title: 'components/suggestions',
    component: Suggestions,
};

const Template = (args) => <Suggestions {...args} />;

export const Default = Template.bind({});
Default.args = {
    darkMode: false,
    users: users,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    darkMode: true,
    users: users,
};