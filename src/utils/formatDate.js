export const formatDate = (dateString, formatType = 'detailed') => {
    const date = new Date(dateString);

    if (formatType === 'detailed') {
        const options = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
        return date.toLocaleString('en-US', options).replace(',', ' ·');
    } else if (formatType === 'short') {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
    } else {
        throw new Error('Invalid format type');
    }
};