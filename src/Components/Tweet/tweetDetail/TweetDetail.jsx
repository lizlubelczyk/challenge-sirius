import {useState} from "react";
import {likeTweet} from "../../../services/LikeService";
import {retweet} from "../../../services/RetweetService";

export default function TweetDetail(tweet){
    const [likes, setLikes] = useState(tweet?.reactions?.filter(reaction => reaction.type === "LOVE").length || 0);
    const [retweets, setRetweets] = useState(tweet?.reactions?.filter(reaction => reaction.type === "RETWEET").length || 0);
    const [comments, setComments] = useState(tweet?.comments.length || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
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
    return(
        <div className="tweet-detail">


        </div>
    )
}