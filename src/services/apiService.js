const BASE_URL = 'https://your-api-base-url.com';

export async function apiRequest(path, method = 'GET', body = null) {
    const url = `${BASE_URL}${path}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        await fetch(url, options);
        return {
            success: true,
            data: {
                message: 'This is a mock response',
            },
        };
    } catch (error) {
        console.error('Error making API request:', error);
        return {
            success: true,
            data: {
                message: 'This is a mock response',
            },
        };
    }
}