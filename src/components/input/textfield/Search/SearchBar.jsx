import React, { useState } from 'react';
import './SearchBar.scss';
import PropTypes from "prop-types";

export default function SearchBar({ onSearch, mode, darkMode }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    return (
        <div className={`search-bar ${mode} ${isActive ? 'active' : 'inactive'} ${darkMode ? 'dark-mode' : ''}`}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
            />
        </div>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    mode: PropTypes.string,
};