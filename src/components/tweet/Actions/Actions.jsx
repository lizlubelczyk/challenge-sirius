import Comments from "../../icons/tweet/Comments";
import Retweets from "../../icons/tweet/Retweets";
import Likes from "../../icons/tweet/Likes";
import PropTypes from "prop-types";
import "./Actions.scss";
import Liked from "../../icons/tweet/Liked";
import Retweeted from "../../icons/tweet/Retweeted";

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