export const pipeDuration = (n: number) => {
    let hours = (n / 60);
    let newHours = Math.floor(hours);
    let minutes = (hours - newHours) * 60;
    let newMinutes = Math.round(minutes);

    if (newHours <= 9) {
        return `0${newHours}:${newMinutes}`;
    } else if (newHours > 9) {
        return `${newHours}:${newMinutes}`;
    }
}