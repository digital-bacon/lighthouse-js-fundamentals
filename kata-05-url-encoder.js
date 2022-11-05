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
  newString = replaceInString(newString, ' ', '%20');
  return newString;

  /**
   * Function that removes whitespace from the start and end of a string
   * @param {string} string String with trailing and leading whitespaces
   * @returns {string} A string with leading and trailing whitespaces removed
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
   * Function that replaces a character in a string with provided text
   * @param {string} string String with characters to be replaced
   * @returns {string} A string with the character removed
   */
  function replaceInString(string, findCharacter, replacementText) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === findCharacter) {
        newString += replacementText;
      } else {
        newString += string[i];
      }
    }
    return newString;
    }
  // if (text[0] === ' ') text[0] = 'A';
  // if (text[text.length - 1] === ' ') text[text.length - 1] === '';

  // // A collection of possible UTF-16 characters to replace
  // const charCodes = {
  //   32: (input) => '%20' // Space
  // }


  // return replaceAllInString(text);

  // /**
  //  * Function that returns the sum of all pattern in an array
  //  * @param {Array.<number>} array An array of pattern
  //  * @returns {number} The sum of all pattern in the array
  //  */
  // function replaceAllInString(string = '', pattern = '', replacement = '') {
  //   let newString = '';
  //   for (let i = 0; i < string.length; i++) {
  //     string.charCodeAt(i) === 32 ? newString += '%20' : newString += string[i];
  //   }
  //   return newString;
  // }
};

console.log(urlEncode("Lighthouse Labs"), "=?", "Lighthouse%20Labs")
console.log(urlEncode(" Lighthouse Labs "), "=?", "Lighthouse%20Labs")
console.log(urlEncode("blue is greener than purple for sure"), "=?", "blue%20is%20greener%20than%20purple%20for%20sure")
