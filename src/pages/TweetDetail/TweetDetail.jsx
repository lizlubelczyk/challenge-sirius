import React from 'react';
import tweets from '../../resources/tweets (2).json';
import {useNavigate, useParams} from "react-router-dom";
import Comment from "../../components/tweet/Comment/Comment";
import "./TweetDetail.scss";
import DetailedTweet from "../../components/tweet/DetailedTweet/DetailedTweet";
import BackArrow from "../../components/icons/tweet/BackArrow";

export default function TweetDetail({darkMode}) {
    const { tweetId } = useParams();
    const tweet = tweets.find(t => t.id === tweetId);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={`tweet-detail ${darkMode ? 'dark-mode' : ''}`}>
            <div className="tweet-detail-container">
                <div className="container-header">
                    <div className="title">
                        Tweet
                    </div>
                    <div className="icon" onClick={handleBack}>
                        <BackArrow/>
                    </div>

                </div>
                <div className="tweet-and-comments">
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
        </div>
    );
}