import Actions from "../Actions/Actions";
import { useState } from "react";
import { likeTweet } from "../../../services/LikeService";
import {retweet} from "../../../services/RetweetService";
import "./DetailedTweet.scss"

export default function DetailedTweet({ tweet, onClick, darkMode }) {
    const [likes, setLikes] = useState(tweet?.reactions?.filter(reaction => reaction.type === "LOVE").length || 0);
    const [retweets, setRetweets] = useState(tweet?.reactions?.filter(reaction => reaction.type === "RETWEET").length || 0);
    const [comments, setComments] = useState(tweet?.comments.length || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const options = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };

        return date.toLocaleString('en-US', options).replace(',', ' ·');
    };


    const handleLike = async () => {
        try {
            const response = await likeTweet(tweet.id, !isLiked);
            if (response.success) {
                setIsLiked(!isLiked);
                setLikes(isLiked ? likes - 1 : likes + 1);
            }
        } catch (error) {
            console.error('Error liking tweet:', error);
        }
    };

    const handleRetweet = async () => {
        try {
            const response = await retweet(tweet.id, !isRetweeted);
            if (response.success) {
                setIsRetweeted(!isRetweeted);
                setRetweets(isRetweeted ? retweets - 1 : retweets + 1);
            }
        } catch (error) {
            console.error('Error retweeting tweet:', error);
        }
    }

    return (
        <div className={`detailed-tweet ${darkMode ? 'dark-mode' : ''}`} onClick={onClick}>
            <div className="info-container">
                <div className="profile-picture">
                    {tweet?.author?.profilePicture && (
                        <img src={tweet.author.profilePicture} alt="Profile" />
                    )}
                </div>
                <div className="info">
                    <div className="name">{tweet?.author?.firstName}</div>
                    <div className="username">@{tweet?.author?.username}</div>

                </div>
            </div>
            <div className="content">
                {tweet?.content}
            </div>
            {tweet?.images && tweet.images.length > 0 && (
                <div className="images-container">
                    {tweet.images.map((image, index) => (
                        <img key={index} src={image} alt={`Tweet image ${index + 1}`} />
                    ))}
                </div>
            )}
            <div className={"date"}>{formatDate(tweet.createdAt)}</div>
            <Actions likes={likes} comments={comments} retweets={retweets} isLiked={isLiked} onLike={handleLike} isRetweeted={isRetweeted} onRetweet={handleRetweet} />
        </div>
    );
}