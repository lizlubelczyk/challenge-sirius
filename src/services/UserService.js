import users from '../resources/users.json';
import { apiRequest } from './apiService';

export const fetchUsers = async () => {
    try {
        await apiRequest('/fake-endpoint', 'GET');
    } catch (error) {
        console.error('Error making API request:', error);
    }

    return {
        success: true,
        data: users,
    };
}