import React from 'react';
import Light from '../../../icons/theme/Light';
import Dark from '../../../icons/theme/Dark';
import './ThemeSwitch.scss';
import PropTypes from "prop-types";

export default function ThemeSwitch({ changeMode, darkMode }) {
    return (
        <div className={`theme-switch ${darkMode ? 'dark-mode' : ''}`} onClick={changeMode}>
            <div className="icon-container">
                {darkMode ? <Dark /> : <Light />}
            </div>
        </div>
    );
}

ThemeSwitch.propTypes = {
    changeMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
}