import React from 'react';
import LargeNavItem from './LargeNavItem';
import HomeFilled from '../../../../Icons/NavItem/HomeFilled';

export default {
    title: 'Navigation/LargeNavItem',
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