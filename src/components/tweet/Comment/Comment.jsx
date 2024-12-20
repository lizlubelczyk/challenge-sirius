import React from 'react';
import "./Comment.scss";
import PropTypes from "prop-types";
export default function Comment({ comment , darkMode}) {
    return (
        <div className={`comment ${darkMode ? 'dark-mode' : ''}`}>
            <div className="info-container">
                <div className="profile-picture">
                    {comment?.author?.profilePicture && (
                        <img src={comment.author.profilePicture} alt="Profile" />
                    )}
                </div>
                <div className="info">
                    <div className="name">{comment?.author?.firstName}</div>
                    <div className="username">@{comment?.author?.username}</div>
                </div>
            </div>
            <div className="content">
                {comment?.content}
            </div>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        author: PropTypes.shape({
            profilePicture: PropTypes.string,
            firstName: PropTypes.string,
            username: PropTypes.string,
        }),
        content: PropTypes.string,
    }).isRequired,
    darkMode: PropTypes.bool,
};