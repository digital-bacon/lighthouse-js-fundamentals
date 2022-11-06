
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

/**
 * Function that prints a range of numbers, except replacing multiples 
 * of 2 with `Batty`, multiples of 5 with `Beacon`, and multiples of 2 
 * and 5 with `BattyBeacon`
 * @param {Array<number,number>} range - The start and end values for the loop
 * @param {Array<number,number>} multiples - The multiples you to replace with words
 * @param {Array<string,string>} words - The words that will replace the multiples
 * @returns 
 */
function loopyLighthouse(range, multiples, words) {
  
  const rangeStart = range[0];
  const rangeEnd = range[1];

  const multiple1 = multiples[0];
  const multiple2 = multiples[1];

  const replacementWord1 = words[0];
  const replacementWord2 = words[1];

  // Print a list of numbers from `rangeStart` up to and including `rangeEnd`
  for (let number = rangeStart; number <= rangeEnd; number++) {
    switch (true) {
      // If this number is multiple of both multiples, print both words
      case (number % multiple1 === 0 && number % multiple2 === 0):
        console.log(replacementWord1 + replacementWord2);
        break;
      // If this number is multiple of multiple1, print the matching word
      case (number % multiple1 === 0):
        console.log(replacementWord1);
        break;
      // If this number is multiple of multiple2, print the matching word
      case (number % multiple2 === 0):
        console.log(replacementWord2);
        break;
      // Print the number without modification
      default:
        console.log(number);
    }
  }

}
