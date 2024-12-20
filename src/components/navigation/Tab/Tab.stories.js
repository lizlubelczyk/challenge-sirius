import React from 'react';
import Tab from './Tab';

export default {
    title: 'navigation/Tab',
    component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Tab',
    active: false,
};

export const Active = Template.bind({});
Active.args = {
    title: 'Active Tab',
    active: true,
};