// Format the time as "hh:mm:ss"
export const FormatTime = ({ timer }) => {
    const minutes = Math.floor(timer / 600);
    const seconds = Math.floor(timer / 10);
    const milliseconds = Math.floor(timer);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
};
