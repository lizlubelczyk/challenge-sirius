export const retweet = async (tweetId, isRetweeted) => {
    try {
        await fetch('https://non-existing-backend.com/retweet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tweetId, isRetweeted }),
        });
    } catch (error) {
        console.error('Error:', error);
    }
    return { success: true };
}