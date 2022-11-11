let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = prompt("Guess a number: ");
console.log("You answered: " + answer);

/**
 * Function that generates a random number within a range
 * @param {number} min - The minimum number to return
 * @param {number} max - The maximum number to return
 * @returns {number} The random number that was generated
 */
const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

console.log(randomNumber(10, 25));
