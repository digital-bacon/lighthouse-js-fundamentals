/* 

CHALLENGE:
In this exercise, we will be given a normal string of words and turn it
into a percent-encoded string by replacing all whitespace with %20.


Percent Encoding
Take a look at the following URL, specifically the
last part:

https://www.google.com/search?q=lighthouse%20labs

This URL will perform a google search for the term "lighthouse
labs". Notice that when the string "lighthouse labs" is part of a URL,
the space is replaced with %20.


If we want to add a parameter to a url, there are certain characters
that must be encoded in order to make the URL valid. There are many
characters that must be encoded, including: , !, ", and #. For this
exercise, we will only be focusing on replacing the space with
%20.


INSTRUCTION:
Create a function named urlEncode that will receive a string of words, 
and return that string with all of the whitespace characters converted 
to %20. If there is whitespace on the outside of the string, like in 
our second example above, you should only replace the whitespace 
within the string.

Warning
Use some sort of looping. Do Not use String.prototype.replace


CONSTRAINTS:
1. Use some sort of looping. Do Not use String.prototype.replace.
2. Only replace the whitespace within the string.


ALGORITHM:
We need a way to trim whitespace from the string before beginning
  - use charCodeAt(index) to test for the string on either side


*/

/**
 * Function performs URL encoding on a string
 * @param {string} text The text to url encode
 * @returns {Object} String with URL encoding
 */
const urlEncode = function(text) {
  let newString = '';
  newString = trimString(text);
  newString = replaceInString(newString, ' ', '%20', true);
  return newString;

  /**
   * Function that removes whitespace from the start and end of a string
   * @param {string} string String to check for leading/trailing whitespaces
   * @returns {string} String with leading and trailing whitespaces removed
   */
  function trimString(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        if (i === 0 || i === string.length - 1) {
          newString += '';
        } else {
          newString += ' ';
        }
      } else {
        newString += string[i];
      }
    }
    return newString;
  }

  /**
   * Function that returns a substring from a provided string
   * @param {string} string The string from which to extract a substring
   * @param {number} start Indicates where to start slicing (inclusive)
   * @param {number} [end] Indicates where to stop slicing (not inclusive)
   * @returns {string} The substring that was extracted
   */
  function sliceString(string, start, end) {
    let newString = '';
    if (typeof end === 'undefined') end = string.length;
    if (typeof start !== 'number') return;
    if (typeof end !== 'number') return;
    if (end > string.length) end = string.length;
    for (let i = start; i < end; i++) {
      newString += string[i];
    }
    return newString;
  
  }

  /**
   * Function that finds the index of a substring in a string
   * @param {string} string The string to search for the substring
   * @param {string} findText The substring to find
   * @returns {number} The index position where the substring was found
   */
  function findInString(string, findText) {
    let index = -1; // returns -1 if substring not found
    for (let i = 0; i < string.length; i++) {
      // Find a match to the first letter of @findText
      if (string[i] === findText[0] && string.length - i >= findText.length) {  // First letter matched
        // Look ahead by retrieving text matching the length of @findText
        lookAhead = sliceString(string, i, i + findText.length);
        // Check if the text ahead matches @findText
        if (lookAhead === findText) {
          index = i;
          break;
        };
      }
    }
    return index;
  }
     
  /**
   * Function that replaces a substring with another substring
   * @param {string} string The string to search for the substring
   * @param {string} findText The substring to find
   * @param {string} replacementText The substring to use as a relacement
   * @param {boolean} [toggleReplaceAll] Set to false to only replace the first match
   * @returns {string} The new string with replaced substring
   */
  function replaceInString(string, findText, replacementText, toggleReplaceAll = true) {
    let newString = '';
    let subStringLeft = '';
    index = findInString(string, findText);
    if (index > -1) {
      subStringLeft = sliceString(string, 0, index);
      // Save the portion of the string we haven't searched in yet
      string = sliceString(string, index + findText.length);
      if (toggleReplaceAll) {
        // Replace all instances of the matched substring
        newString += subStringLeft + replacementText + replaceInString(string, findText, replacementText);
      } else {
        // Only replace the first instance of the matched substring
        newString += subStringLeft + replacementText + string;
      }
    } else {
      // No more matches, add unmatched substring to the substring that was changed
      newString += string;
    }
    return newString;
    }
};

console.log(urlEncode("Lighthouse Labs"), "=?", "Lighthouse%20Labs")
console.log(urlEncode(" Lighthouse Labs "), "=?", "Lighthouse%20Labs")
console.log(urlEncode("blue is greener than purple for sure"), "=?", "blue%20is%20greener%20than%20purple%20for%20sure")
