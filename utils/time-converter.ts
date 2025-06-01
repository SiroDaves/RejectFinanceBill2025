export function timeConverter(isoTime: string): string {
  const currentTime = new Date().getTime();
  const pastTime = new Date(isoTime).getTime();
  const timeDifference = currentTime - pastTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.4167); // Approximate month length
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (days < 30) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (months < 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
}
