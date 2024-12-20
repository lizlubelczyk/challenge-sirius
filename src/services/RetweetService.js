import { apiRequest } from './apiService';

export const retweet = async (tweetId, isRetweeted) => {
    try {
        await apiRequest('/retweet', 'POST', { tweetId, isRetweeted });
    } catch (error) {
        console.error('Error:', error);
    }
    return { success: true };
};