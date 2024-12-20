import Actions from "../Actions/Actions";
import { useState } from "react";
import { handleLike, handleRetweet } from "../../../utils/handlers";
import { formatDate } from "../../../utils/formatDate";
import "./DetailedTweet.scss";
import PropTypes from "prop-types";

export default function DetailedTweet({ tweet, onClick, darkMode }) {
    const [likes, setLikes] = useState(tweet?.reactions?.filter(reaction => reaction.type === "LOVE").length || 0);
    const [retweets, setRetweets] = useState(tweet?.reactions?.filter(reaction => reaction.type === "RETWEET").length || 0);
    const [comments] = useState(tweet?.comments.length || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    return (
        <div className={`detailed-tweet ${darkMode ? 'dark-mode' : ''}`} onClick={onClick}>
            <div className="info-container">
                <div className="profile-picture">
                    {tweet?.author?.profilePicture && (
                        <img src={tweet.author.profilePicture} alt={`${tweet.author.firstName}'s profile`} />
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
            <div className={"date"}>{formatDate(tweet.createdAt, 'detailed')}</div>
            <Actions likes={likes} comments={comments} retweets={retweets} isLiked={isLiked} onLike={() => handleLike(tweet.id, isLiked, setIsLiked, setLikes, likes)} isRetweeted={isRetweeted} onRetweet={() => handleRetweet(tweet.id, isRetweeted, setIsRetweeted, setRetweets, retweets)} />
        </div>
    );
}
DetailedTweet.propTypes = {
    tweet: PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        createdAt: PropTypes.string.isRequired,
        reactions: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
        })),
        comments: PropTypes.arrayOf(PropTypes.shape({
            content: PropTypes.string.isRequired,
        })),
        author: PropTypes.shape({
            profilePicture: PropTypes.string,
            firstName: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    onClick: PropTypes.func,
    darkMode: PropTypes.bool,
};