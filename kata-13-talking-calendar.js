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
  console.log(months);

  // We need to match month number in dateParts to month name in months
  let monthName = months[parseInt(dateParts[1]) - 1]
  console.log(`the month name is ${monthName}`);

  // We need a way to output the converted result with comma separators
  console.log(concat(dateParts, ','));

  function concat(array, separator) {
    let output = '';
    for (item in array) {
      output += array[item];
      // Add a separator
      if (item < array.length - 1) {
        output += separator;
      }
    }
    return output;
  }
  
};

talkingCalendar("2017/12/02");
// console.log(talkingCalendar("2017/12/02"), '=?', 'December 2nd, 2017');
// console.log(talkingCalendar("2007/11/11"), '=?', 'November 11th, 2007');
// console.log(talkingCalendar("1987/08/24"), '=?', 'August 24th, 1987');