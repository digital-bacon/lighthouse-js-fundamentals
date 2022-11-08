/**
 * Function that converts a provided date from YYYY/MM/DD format, to 
 * spoken date format. Ie: a date of `2017/12/02` would be converted 
 * to `December 2nd, 2017`
 * @param {string} date - Formatted YYYY/MM/DD date as a string
 * @returns {string} The converted date in spoken date format
 */
const talkingCalendar = function(date) {
  // We need a way to split the date into sections
  let dateParts = date.split('/');

  // Add a way to store the converted date
  const convertedDate = {
    yearValue: 0,
    monthValue: 0,
    dayValue: 0,
    monthName: '',
    daySuffix: '',
  };

  // We need a list of months
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  // We need a list of suffixes for days
  let daySuffixes = [
    'st',
    'nd',
    'rd',
    'th'
  ]

  
  // Identify a pattern of which day suffixes apply to date values
  // st: 1, 21, 31, 41... (last digit is 1)
  // nd: 2, 22, 32, 42... (last digit is 2)
  // rd: 3, 23, 33, 43... (last digit is 3)
  // th: all others

  // Get the last digit of the day value
  let lastDigit = parseInt(dateParts[2][dateParts[2].length - 1]);

  // Save the day, month, and year values
  convertedDate.dayValue = parseInt(dateParts[2]);
  convertedDate.monthValue = parseInt(dateParts[1]);
  convertedDate.yearValue = parseInt(dateParts[0]);

  // Convert and remember the month name
  convertedDate.monthName = months[dateParts[1] - 1];

  // Apply a day suffix based on array position
  convertedDate.daySuffix = daySuffixes[lastDigit - 1];

  // We need a way to output the converted result with comma separators
  console.log(`${convertedDate.monthName}, ${convertedDate.dayValue}${convertedDate.daySuffix}, ${convertedDate.yearValue}`);
  
};

talkingCalendar("2017/12/01");
talkingCalendar("2017/12/02");
talkingCalendar("2017/12/03");
talkingCalendar("2017/12/04");
// console.log(talkingCalendar("2017/12/02"), '=?', 'December 2nd, 2017');
// console.log(talkingCalendar("2007/11/11"), '=?', 'November 11th, 2007');
// console.log(talkingCalendar("1987/08/24"), '=?', 'August 24th, 1987');