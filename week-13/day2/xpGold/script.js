let days = require('./date.js')

console.log(`${days.days} days until 1st Jan`)



let date = require('./date2')

const readlineSync = require('readline-sync');
const birthdateString = readlineSync.question('Please enter your birthdate (YYYY-MM-DD): ');

const daysOfLife = date.birthToDays(birthdateString.toString());
 console.log(`You have lived for ${daysOfLife} days.`);



let holidays = require('./date3.js')

console.log(`Next holiday is in ${holidays.nextHoliday('2023-01-22')} days`)

//const Hebcal = require('@hebcal/core');
//const datesForYear = Hebcal.HebrewCalendar.getHolidaysForYear(2023)
