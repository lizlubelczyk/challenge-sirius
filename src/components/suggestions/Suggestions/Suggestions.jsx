import React, { useState } from 'react';
import SuggestedUser from '../SuggestedUser/SuggestedUser';
import ShowMore from '../../input/buttons/ShowMore/ShowMore';
import './Suggestions.scss';
import PropTypes from "prop-types";

export default function Suggestions({ darkMode, users = [] }) {
    const [showAll, setShowAll] = useState(false);

    const displayedUsers = showAll ? users : users.slice(0, 5);

    return (
        <div className={`suggestion-box ${darkMode ? 'dark-mode' : ''}`}>
            <div className="title">
                <h2>Who to follow</h2>
            </div>
            <div className="suggestions">
                {displayedUsers.map(user => (
                    <SuggestedUser key={user.id} darkMode={darkMode} user={user} />
                ))}
            </div>
            {users.length > 5 && (
                <div className="show-more-button">
                    <ShowMore onClick={() => setShowAll(!showAll)} showAll={showAll}  darkMode={darkMode}/>
                </div>
            )}
        </div>
    );
}

Suggestions.propTypes = {
    darkMode: PropTypes.bool,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            profilePicture: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            username: PropTypes.string,
        })
    )
}

