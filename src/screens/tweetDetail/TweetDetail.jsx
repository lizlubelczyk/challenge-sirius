import React from 'react';
import tweets from '../../resources/tweets (2).json';
import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import LargeSidebar from "../../Components/Navigation/Sidebar/LargeSidebar/LargeSidebar";
import Tweet from "../../Components/Tweet/Tweet/Tweet";
import Comment from "../../Components/Tweet/Comment/Comment";
import "./TweetDetail.scss";
import DetailedTweet from "../../Components/Tweet/DetailedTweet/DetailedTweet";
import BackArrow from "../../Icons/Tweet/BackArrow";
import { useHistory } from 'react-router-dom';

export default function TweetDetail({darkMode, changeMode}) {
    const { tweetId } = useParams();
    const tweet = tweets.find(t => t.id === tweetId);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={`tweet-detail ${darkMode ? 'dark-mode' : ''}`}>
            <div className="sidebar-container">
                <LargeSidebar changeMode={changeMode} darkMode={darkMode} />
            </div>
            <div className="tweet-detail-container">
                <div className="container-header">
                    <div className="title">
                        Tweet
                    </div>
                    <div className="icon" onClick={handleBack}>
                        <BackArrow/>
                    </div>

                </div>

                <div className="tweet">
                <DetailedTweet tweet={tweet} darkMode={darkMode}/>
                </div>
                <div className="comments">
                    {tweet?.comments?.map(comment => (
                        <Comment key={comment.id} comment={comment} darkMode={darkMode} />
                    ))}
                </div>
            </div>
        </div>
    );
}