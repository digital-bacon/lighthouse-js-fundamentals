
/**
 * Function that concatenates arrays and sorts the resulting array
 * @param {...Array.*} arrays The arrays to merge
 * @returns {Array.<*>} The resulting concatenated and sorted array.
 */
const merge = (...arrays) => {
  
  // Concatenate the arrays provided
  let newArray = [...arrays];
  
  // Convert the merged array to a single dimensional array
  newArray = newArray.flat();
  
  // Sort the array
  let sortedArray = []; // Holds the result
  // Only sort if the array has more than 1 item
  if (newArray.length <= 1) {
    sortedArray = newArray; // Add the single item to the sortedArray
  } else {
    // Perform sorting - loop through the array of values to be sorted
    for (let i = 0; i < newArray.length; i++) {
      if (i === 0) { // Is this the first number?
        // Insert the first number without checks
        sortedArray.push(newArray[i]);
      } else {
        // Loop through numbers already in the sortedArray
        for (let n = 0; n < sortedArray.length; n++) {
          // Number is smaller/equal to this existing sortArray number 
          if (newArray[i] <= sortedArray[n]) {
            // Insert the number before the existing sortArray number
            sortedArray.splice(n, 0, newArray[i]);
            break;
          // Number is larger than all others in sortArray
          } else if (n === sortedArray.length - 1) {
            // Insert the number after all others in sortArray
            sortedArray.push(newArray[i]);
            break;
          }
        }
      }
    }
  }

  return sortedArray;
}

/*

[4, 5, 1, 9, 7]
loop 1
4 [4] ** NO MORE NUMBERS TO CHECK / EMPTY ARRAY
5 > 4 ... [4, 5] ** NO MORE NUMBERS TO CHECK
1 > 4 ... [1, 4, 5] ** INSERT BEFORE 5
9 > 1... 9 > 4 ... 9 > 5 ... [1, 4, 5, 9] ** NO MORE NUMBERS TO CHECK
7 > 1... 7 > 4 ... 7 > 5 ... 7 > 9 [1, 4, 5, 7, 9] ** INSERT BEFORE 9

*/

// merge([ 5, 6, 2], [ 7, 4, 1, 3 ])

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);