import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.scss';
import PropTypes from "prop-types";

export default function Tabs({ darkMode, activeTab, onTabClick }) {
    return (
        <div className="tabs">
            <Tab title="For you" active={activeTab === 'For you'} darkMode={darkMode} onClick={() => onTabClick('For you')} />
            <Tab title="Following" active={activeTab === 'Following'} darkMode={darkMode} onClick={() => onTabClick('Following')} />
        </div>
    );
}

Tabs.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    activeTab: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired
}