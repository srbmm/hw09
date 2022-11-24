"use strict";
function getSecondsToday(date) {
    const miliseconds =
        (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) *
        1000;
    return miliseconds;
}
function formatDate(date) {
    if (getSecondsToday(new Date()) - getSecondsToday(date) > 3600000)
        return new Intl.DateTimeFormat(["ban", "id"]).format(date);
    else if (getSecondsToday(new Date()) - getSecondsToday(date) > 60000) {
        return `${Math.trunc(
            (getSecondsToday(new Date()) - getSecondsToday(date)) / 60000
        )} minutes ago`;
    } else if (getSecondsToday(new Date()) - getSecondsToday(date) > 1000) {
        return `${Math.trunc(
            (getSecondsToday(new Date()) - getSecondsToday(date)) / 1000
        )} seconds ago`;
    } else return "right now";
}
const d = new Date(new Date() + 30 * 1000);
console.log(formatDate(d));
