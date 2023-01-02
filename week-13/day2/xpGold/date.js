function daysLeftUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const timeLeft = newYear - today;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft;
  }


  module.exports = {
    days: daysLeftUntilNewYear()
  }