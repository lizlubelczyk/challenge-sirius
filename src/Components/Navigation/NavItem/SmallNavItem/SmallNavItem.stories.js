import React from 'react';
import SmallNavItem from './SmallNavItem';
import HomeFilled from '../../../../Icons/NavItem/HomeFilled';

export default {
    title: 'Navigation/SmallNavItem',
    component: SmallNavItem,
};

const Template = (args) => <SmallNavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: <HomeFilled />,
    active: false,
};

export const Active = Template.bind({});
Active.args = {
    icon: <HomeFilled />,
    active: true,
};