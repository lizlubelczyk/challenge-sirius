import React from 'react';
import "./Comment.scss";
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