import { likeTweet } from "../services/LikeService";
import { retweet } from "../services/RetweetService";

export const handleLike = async (tweetId, isLiked, setIsLiked, setLikes, likes) => {
    try {
        const response = await likeTweet(tweetId, !isLiked);
        if (response.success) {
            setIsLiked(!isLiked);
            setLikes(isLiked ? likes - 1 : likes + 1);
        }
    } catch (error) {
        console.error('Error liking tweets:', error);
    }
};

export const handleRetweet = async (tweetId, isRetweeted, setIsRetweeted, setRetweets, retweets) => {
    try {
        const response = await retweet(tweetId, !isRetweeted);
        if (response.success) {
            setIsRetweeted(!isRetweeted);
            setRetweets(isRetweeted ? retweets - 1 : retweets + 1);
        }
    } catch (error) {
        console.error('Error retweeting tweets:', error);
    }
};