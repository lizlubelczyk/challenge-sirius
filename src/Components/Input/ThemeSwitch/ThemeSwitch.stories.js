import React, { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default {
    title: 'Input/ThemeSwitch',
    component: ThemeSwitch,
};

const Template = (args) => {
    const [darkMode, setDarkMode] = useState(args.darkMode);

    const changeMode = () => {
        setDarkMode(!darkMode);
    };

    return <ThemeSwitch {...args} darkMode={darkMode} changeMode={changeMode} />;
};

export const LightMode = Template.bind({});
LightMode.args = {
    darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    darkMode: true,
};