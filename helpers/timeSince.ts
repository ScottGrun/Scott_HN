export const timeSince = (pastDate: number) => {
    const milliseconds = new Date().getTime() - pastDate * 1000;
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365)


    if (years > 0) {
        return years === 1 ? `${years} year ago` : `${years} years ago`;
    } else if (days > 0) {
        return `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    } else if (minutes > 0) {
        return `${minutes} minutes ago`;
    } else {
        return `${seconds} seconds ago`;
    }
}