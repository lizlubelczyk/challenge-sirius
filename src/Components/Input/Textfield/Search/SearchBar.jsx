import React, { useState } from 'react';
import './SearchBar.scss';
import PropTypes from "prop-types";

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    mode: PropTypes.string,
};

export default function SearchBar({ onSearch, mode }) {
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

    return (
        <div className={`search-bar ${mode} ${isActive ? 'active' : 'inactive'}`}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Search..."
            />
        </div>
    );
}