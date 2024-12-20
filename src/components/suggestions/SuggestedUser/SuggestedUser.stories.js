import React from 'react';
import SuggestedUser from './SuggestedUser';
import users from '../../../resources/users.json';

export default {
    title: 'components/suggesteduser',
    component: SuggestedUser,
};

const Template = (args) => <SuggestedUser {...args} />;

export const Default = Template.bind({});
Default.args = {
    darkMode: false,
    user: users[0],
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    darkMode: true,
    user: users[1],
};