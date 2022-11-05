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



*/

/**
 * Function performs URL encoding on a string
 * @param {string} text The text to url encode
 * @returns {Object} String with URL encoding
 */
const urlEncode = function(text) {
  let newString = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      if (i === 0 || i === text.length -1) {
        newString += '';
      } else {
        newString += '%20';
      }
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"), "=?", "Lighthouse%20Labs")
console.log(urlEncode(" Lighthouse Labs "), "=?", "Lighthouse%20Labs")
console.log(urlEncode("blue is greener than purple for sure"), "=?", "blue%20is%20greener%20than%20purple%20for%20sure")
