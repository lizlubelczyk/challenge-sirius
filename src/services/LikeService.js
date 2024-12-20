import { apiRequest } from './apiService';

export const likeTweet = async (tweetId, isLiked) => {
    try {
        await apiRequest('/like', 'POST', { tweetId, isLiked });
    } catch (error) {
        console.error('Error:', error);
    }
    return { success: true };
};