import React from 'react';
import Light from '../../../Icons/theme/Light';
import Dark from '../../../Icons/theme/Dark';
import './ThemeSwitch.scss';
import PropTypes from "prop-types";
import { FaRegMoon } from "react-icons/fa";


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