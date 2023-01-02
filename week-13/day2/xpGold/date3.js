function nextHoliday(holi) {
    const today = new Date();
    console.log(`Today's date: ${today.toDateString()}`);
    // hardcoded holiday date and name
    const holiday = new Date(holi);
    //const holidayName = 'Rosh Hashanah';
    const timeLeft = holiday - today;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft 
  }

module.exports = {
    nextHoliday
}