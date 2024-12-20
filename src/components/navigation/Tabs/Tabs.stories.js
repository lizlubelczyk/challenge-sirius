import React from 'react';
import Tab from '../Tab/Tab';

export default {
    title: 'Components/Tab',
    component: Tab,
    argTypes: {
        title: { control: 'text' },
        active: { control: 'boolean' },
        darkMode: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Tab 1',
    active: false,
    darkMode: false,
};

export const Active = Template.bind({});
Active.args = {
    title: 'Tab 1',
    active: true,
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    title: 'Tab 1',
    active: false,
    darkMode: true,
};

export const ActiveDarkMode = Template.bind({});
ActiveDarkMode.args = {
    title: 'Tab 1',
    active: true,
    darkMode: true,
};