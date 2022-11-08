/**
 * Function that converts a provided date from YYYY/MM/DD format, to 
 * spoken date format. Ie: a date of `2017/12/02` would be converted 
 * to `December 2nd, 2017`
 * @param {string} date - Formatted YYYY/MM/DD date as a string
 * @returns {string} The converted date in spoken date format
 */
const talkingCalendar = function(date) {

  const spokenDate = new SpokenDate(date);
  // We need a way to output the converted result with comma separators
  return (`${spokenDate.monthName}, ${spokenDate.dayValue}${spokenDate.daySuffix}, ${spokenDate.yearValue}`);

  /**
   * Constructor function that receives a date, and parses it to spoken values
   * @param {string} inputDate - Formatted YYYY/MM/DD date as a string
   */
  function SpokenDate(inputDate) {
    this.kvMonths = {
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
    },
    this.kvDaySuffixes = {
      1: 'st',
      2: 'nd',
      3: 'rd',
      4: 'th',
    },
    this.inputDate = inputDate.toString(),
    this.inputParts = this.inputDate.split('/'),
    this.yearValue = parseInt(this.inputParts[0]),
    this.monthValue = parseInt(this.inputParts[1]),
    this.dayValue = parseInt(this.inputParts[2]),
    this.monthName = this.kvMonths[this.inputParts[1]],
    this.getDaySuffix = function() {
        // Convert and remember the day suffix
        /*
        Identify a pattern of which day suffixes apply to date values
          st: 1, 21, 31, 41... (last digit is 1)
          nd: 2, 22, 32, 42... (last digit is 2)
          rd: 3, 23, 33, 43... (last digit is 3)
          th: all others, or if it's a 'teen' number
        */
        // Convert the day value to a string, so we can work with it
        let dayValueAsString = this.dayValue.toString();
        let kvDaySuffixKey = 0;
        // If the number was larger than 9, check if it's a teen number
        if (dayValueAsString.length > 1) {
          // Retrieve the last two digits from the 
          dayValueAsString = dayValueAsString.slice(-2);
          // Check if the number is a 'teen' number
          if (parseInt(dayValueAsString) - 10 && parseInt(dayValueAsString) < 20) {
            // This is a teen number
            kvDaySuffixKey = 4;
          };
        };
        if (kvDaySuffixKey === 0) {
          dayValueAsString = dayValueAsString.slice(-1);
          kvDaySuffixKey = parseInt(dayValueAsString);
        }
        return this.kvDaySuffixes[kvDaySuffixKey];
      },
      this.daySuffix = this.getDaySuffix()
  };
  
};

console.log(talkingCalendar("2017/12/02"), '=?', 'December 2nd, 2017');
console.log(talkingCalendar("2007/11/11"), '=?', 'November 11th, 2007');
console.log(talkingCalendar("1987/08/24"), '=?', 'August 24th, 1987');