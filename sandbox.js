// Recursion to repeat a string
const repeat = function(string, repeatCount) { 
  if (repeatCount === 0) return string;
  return string + repeat(string, repeatCount - 1);
}

const repeatNumbers = function(data) {
  let output = '';
  for (let item in data) {
    output += repeat(data[item][0].toString(), data[item][1] -1);
    if ((item += 1) < data.length) output += ', ';
  }

  return output;
};

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// console.log(repeat("abc", 3));

// Recursion to perform exponent multiplication
function mathPower(base, power) { 
  let result;
  if (power === 0) return 1; // Power of 0 always = 1
  // Perform calculation
  result = base * mathPower(base, Math.abs(power) - 1);
  // If `power` is negative, the result is divided by 1
  if (power < 0) {
    result = 1 / result;
  }
  return result;
}

const result = (output, expected) => {
  if (output === expected) {
    console.log(`\x1b[32mTEST PASSED\n\x1b[36mresult:\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  } else {
    console.log(`\x1b[33mTEST FAILED\n\x1b[36mresult\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  }
}


// result("apples", "oranges");
// result([1, 2, 3], [1, 3]);

/**
 * Function that returns the index of the last time an item occurs in an array
 * @param {Array<*>} arrayToSearch The array to check
 * @param {*} itemToFind The item to find in the array
 * @returns {number} Index of the last time the item occurs in the array
 */
 function lastIndexOf(arr, value) {
  let index = -1;

  for(let i=0; i < arr.length; i++) {
    if(arr[i] === value) {
      index = i;
    }
  }
  return index;
}

// Test cases
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);


// let array = [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ];
// // Output arrays on a single line
// console.log(JSON.stringify(array));
// // Output arrays in a table
// console.table(array);


// // Try throw and catch!
// function getRectArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw 'Parameter is not a number!';
//   }
// }

// try {
//   getRectArea(3, 'A');
// } catch (e) {
//   console.error(e);
//   // expected output: "Parameter is not a number!"
// }



// console.log(randomIndexFrom(array));
// console.log(moveToLastIndex(2, array))


const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const randomIndexFrom = (array) => randomNumber(0, array.length);

const moveToLastIndex = (indexOfItem, array) => {
  array.push(...array.splice(indexOfItem, 1)); // Move to the end of the array
  return array;
}

/**
 * Function that randomly selects array elements and moves them to the 
 * end of the array, while never picking the same element more than 
 * once
 * @param {Array} array - The array on which to work
 * @param {Number} [count] - The number of elements to move to last. 
 * When omitted, the entire array will be randomized
 * @returns {Number} Final index of the first of the moved elements, 
 * which is useful if `count` is less than the array length
 */
const randomizeArray = (array, count) => {

  // Ensure the array has more than 1 item
  if (array.length === 1) return 0;

  // If no count argument was provided, assign a default
  if (typeof count === 'undefined') {
    count = array.length;
  // Ensure the count argument isn't larger than the array length
  } else if (count > array.length) {
    count = array.length;
  }

  console.log(`${array} intial`)
  // Move random elements to the end of the array until count is reached
  for (let i = 0; i < count; i++) {
    // If this is the first iteration, don't pick the last element
    const indexMax = i > 0 ? array.length - i : (array.length - 1) - i;
    const randomIndex = Math.floor(Math.random() * (indexMax) + 0);
    array.push(...array.splice(randomIndex, 1));
    console.log(`${array} index: ${randomIndex} moved to end count: ${i} `);
  }

  // Return the final position of the first item that was moved
  return (array.length - count);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`${array} before`)
console.log(`array item with index: ${randomizeArray(array, 5)} denotes the start of the randomized elements`)
console.log(`${array} after`);