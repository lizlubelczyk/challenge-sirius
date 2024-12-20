import React from 'react';
import './ShowMore.scss';
import PropTypes from "prop-types";

export default function ShowMore({ onClick, showAll, darkMode }) {
    return (
        <button onClick={onClick} className={`show-more ${darkMode ? 'dark-mode' : ''}`}>
            {showAll ? 'Show Less' : 'Show More'}
        </button>
    );
}

ShowMore.propTypes = {
    onClick: PropTypes.func.isRequired,
    showAll: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired
}