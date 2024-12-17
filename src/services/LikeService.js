export const likeTweet = async (tweetId, isLiked) => {
    try {
        await fetch('https://non-existing-backend.com/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tweetId, isLiked }),
        });
    } catch (error) {
        console.error('Error:', error);
    }
    return { success: true };
};