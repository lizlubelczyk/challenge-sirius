import Comments from "../../../Icons/Tweet/Comments";
import Retweets from "../../../Icons/Tweet/Retweets";
import Likes from "../../../Icons/Tweet/Likes";
import PropTypes from "prop-types";
import "./Actions.scss";
import Liked from "../../../Icons/Tweet/Liked";
import Retweeted from "../../../Icons/Tweet/Retweeted";

export default function Actions({ likes, comments, retweets, isLiked, onLike, isRetweeted, onRetweet }) {

    return (
        <div className="actions-container">
            <div className="comments">
                <Comments />
                <span>{comments}</span>
            </div>
            <div className="retweets" onClick={onRetweet}>
                {isRetweeted ? <Retweeted /> : <Retweets />}
                <span>{retweets}</span>
            </div>
            <div className="likes" onClick={onLike}>
                {isLiked ? <Liked /> : <Likes />}
                <span>{likes}</span>
            </div>
        </div>
    );
}

Actions.propTypes = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    onLike: PropTypes.func.isRequired,
    isRetweeted: PropTypes.bool.isRequired,
    onRetweet: PropTypes.func.isRequired,
};