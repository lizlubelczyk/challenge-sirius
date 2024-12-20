import React from 'react';
import LargeNavItem from './LargeNavItem';
import HomeFilled from '../../icons/navItem/HomeFilled';

export default {
    title: 'navigation/LargeNavItem',
    component: LargeNavItem,
};

const Template = (args) => <LargeNavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: <HomeFilled />,
    title: 'Home',
    active: false,
};

export const Active = Template.bind({});
Active.args = {
    icon: <HomeFilled />,
    title: 'Home',
    active: true,
};