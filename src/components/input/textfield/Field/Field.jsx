import React from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

const Field = ({ fieldName, mode, placeholder, onchange }) => {
    return (
        <div className={`field ${mode}`}>
            <label>{fieldName}</label>
            <input 
                type="text"
                placeholder={placeholder}
                onChange={onchange}
            />
        </div>
    );
};

Field.propTypes = {
    fieldName: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['error', 'enabled', 'disabled']).isRequired,
    placeholder: PropTypes.string,
    onchange: PropTypes.func,
};

export default Field;