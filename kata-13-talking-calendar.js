/**
 * Function that converts a provided date from YYYY/MM/DD format, to 
 * spoken date format. Ie: a date of `2017/12/02` would be converted 
 * to `December 2nd, 2017`
 * @param {string} date - Formatted YYYY/MM/DD date as a string
 * @returns {string} The converted date in spoken date format
 */
const talkingCalendar = function(date) {

  // Add a way to store the converted date
  const convertedDate = {
    inputDate: date.toString(),
    inputParts: function() {return this.inputDate.split('/')},
    yearValue: function() {return parseInt(this.inputParts()[0])},
    monthValue: function() {return parseInt(this.inputParts()[1])},
    dayValue: function() {return parseInt(this.inputParts()[2])},
    monthName: '',
    daySuffix: '',
  };

  // We need a data set to reflect month numbers and month names
  const kvMonths = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  }

  // We need a list of suffixes for days
  const kvDaySuffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    4: 'th',
  }
  
  // Convert and remember the day suffix
  /*
  Identify a pattern of which day suffixes apply to date values
    st: 1, 21, 31, 41... (last digit is 1)
    nd: 2, 22, 32, 42... (last digit is 2)
    rd: 3, 23, 33, 43... (last digit is 3)
    th: all others
  */
  // Get the last digit of the day value
  let lastDigit = convertedDate.dayValue().toString();
  lastDigit = lastDigit[lastDigit.length - 1];
  // Solve for a day suffix based on array position and remember it
  convertedDate.daySuffix = kvDaySuffixes[lastDigit];
  
  // Convert and remember the month name
  convertedDate.monthName = kvMonths[convertedDate.inputParts()[1]];

  // We need a way to output the converted result with comma separators
  console.log(`${convertedDate.monthName}, ${convertedDate.dayValue()}${convertedDate.daySuffix}, ${convertedDate.yearValue()}`);
  
};

talkingCalendar("2017/12/01");
talkingCalendar("2017/12/02");
talkingCalendar("2017/12/03");
talkingCalendar("2017/12/04");
// console.log(talkingCalendar("2017/12/02"), '=?', 'December 2nd, 2017');
// console.log(talkingCalendar("2007/11/11"), '=?', 'November 11th, 2007');
// console.log(talkingCalendar("1987/08/24"), '=?', 'August 24th, 1987');