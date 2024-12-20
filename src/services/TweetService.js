import tweets from '../resources/tweets (2).json';
import { apiRequest } from './apiService';

export const fetchTweets = async () => {
    try {
        await apiRequest('/fake-endpoint', 'GET');
    } catch (error) {
        console.error('Error making API request:', error);
    }

    return {
        success: true,
        data: tweets,
    };
};