/**
 * Function that creates a multiplication table up to a given value
 * @param {number} maxValue The highest value of the table
 * @returns {string} The multiplication table
 */
const multiplicationTable = function(maxValue) {
  let table = '';
  for (let multiplier = 1; multiplier <= maxValue; multiplier++) {
    for (let number = multiplier; number <= (multiplier * maxValue); number += multiplier) {
      table += number + ' ';
    };
    table += '\n';
  };
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));