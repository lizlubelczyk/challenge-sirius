import React from 'react';
import LargeSidebar from './LargeSidebar';

export default {
    title: 'Navigation/LargeSidebar',
    component: LargeSidebar,
};

const Template = (args) => <LargeSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};