import React from 'react';
import SearchBar from './SearchBar';

export default {
    title: 'input/textfield/SearchBar',
    component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSearch: (term) => console.log('Search term:', term),
    mode: 'enabled',
};

export const Disabled = Template.bind({});
Disabled.args = {
    onSearch: (term) => console.log('Search term:', term),
    mode: 'disabled',
};