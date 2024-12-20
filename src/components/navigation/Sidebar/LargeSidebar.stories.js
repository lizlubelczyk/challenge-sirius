import React from 'react';
import LargeSidebar from './LargeSidebar';

export default {
    title: 'navigation/LargeSidebar',
    component: LargeSidebar,
};

const Template = (args) => <LargeSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};