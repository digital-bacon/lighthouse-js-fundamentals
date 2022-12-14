
/**
 * Function that counts the number of `clean` samples in a data set 
 * and returns a classification of `Clean` if the total meets or 
 * exceeds the provided threshold. Otherwise, it returns `Polluted`
 * @param {Array<string>} samples - A data set of air samples with 
 * valid item values of `clean` or `dirty`
 * @param {number} threshold - Number between `0` and `1.0` 
 * representing percentage of the highest acceptable amount of dirty samples
 * @returns {string} A classification of the data set as `Polluted` or 
 * `Clean`
 */
const checkAir = function (samples, threshold) {
  let totalCleanSamples = countMatches(samples, 'clean');
  let percentageCleanSamples = totalCleanSamples / samples.length;
  return percentageCleanSamples > threshold ? 'Polluted' : 'Clean';
};

/**
   * Function that searches an array or string for an item and returns total matches
   * @param {string | Array} searchIn The string or array to search for the item
   * @param {string} findText The substring to find
   * @returns {string} The new string with replaced substring
   */
function countMatches(searchIn, findText, total = 0) {
  index = findIndexOf(searchIn, findText);
  if (index > -1) {
    if (index < (searchIn.length - 1)) {
      searchIn = slice(searchIn, index + 1);
      // Count all instances of @findText in the array
      total = countMatches(searchIn, findText, total + 1);
    } else {
      total += 1;
    };
  };
  return total;
};

/**
 * Function that finds the index of an item in a string or array
 * @param {string | Array} searchIn The string or array to search
 * @param {*} itemToFind The item to find
 * @returns {number} The index position where the substring was found
 */
function findIndexOf(searchIn, itemToFind) {
  let index = -1; // returns -1 if substring not found
  loopArray:
  for (let i = 0; i < searchIn.length; i++) {
    if (typeof searchIn === 'string') {
      // Find a match to the first letter of @itemToFind
      if (searchIn[i] === itemToFind[0] && searchIn.length - i >= itemToFind.length) {  // First letter matched
        // Look ahead by retrieving text matching the length of @itemToFind
        lookAhead = slice(searchIn, i, i + itemToFind.length);
        // Check if the text ahead matches @itemToFind
        if (lookAhead === itemToFind) {
          index = i;
          break loopArray;
        };
      };
    } else if (searchIn[i] === itemToFind) {
        index = i;
        break loopArray;
    };
  };
  return index;
};

/**
 * Function that returns a part of a string or array
 * @param {string | Array} from The string or array from which to slice
 * @param {number} start Indicates where to start slicing (inclusive)
 * @param {number} [end] Indicates where to stop slicing (not inclusive)
 * @returns {string | Array} The portion that was extracted
 */
function slice(from, start, end) {
  let output;
  if (typeof from === 'string') output = '';
  if (typeof from === 'object') output = [];
  if (typeof end === 'undefined') end = from.length;
  if (typeof start !== 'number') return;
  if (typeof end !== 'number') return;
  if (start > from.length - 1) return;
  if (end > from.length) end = from.length;
  for (let i = start; i < end; i++) {
      if (typeof from === 'string') {
        output += from[i];
      } else {
        output.push(from[i]);
      };
  };
  return output;
};

// Test case 01
result(
  parseResult(
    deepEqual(
      checkAir(
        ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
        0.3
      ), `Polluted` // expected output
    ), true, `Polluted` // expected output, literal form
  ), `Polluted` // expected output, literal form
);

// Test case 02
result(
  parseResult(
    deepEqual(
      checkAir(
        ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
        0.25
      ), `Clean` // expected output
    ), true, `Clean` // expected output, literal form
  ), `Clean` // expected output, literal form
);

// Test case 03
result(
  parseResult(
    deepEqual(
      checkAir(
        ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
        0.9
      ), `Clean` // expected output
    ), true, `Clean` // expected output, literal form
  ), `Clean` // expected output, literal form
);

// TEST CASE DEPENDENCIES:

function result(output, expected) {
  if (output === expected) {
    console.log(`\n\x1b[32mTEST PASSED\n\x1b[36mresult:\n\x1b[0m`, output, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  } else {
    console.log(`\n\x1b[33mTEST FAILED\n\x1b[36mresult:\n\x1b[0m`, output, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  };
};

function parseResult(result, expectation, output) {
  if (result === expectation) return output;
};

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  };
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    };
  };
  return true;
};

function isObject(object) {
  return object != null && typeof object === 'object';
};