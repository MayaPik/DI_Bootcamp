function birthToDays(day) {
    let birthday = new Date(day)
    let timeLived = new Date()- birthday.getTime()
    const minutesLived = Math.floor(timeLived / (1000 * 60));
    return minutesLived;
}

module.exports = {
    birthToDays
}