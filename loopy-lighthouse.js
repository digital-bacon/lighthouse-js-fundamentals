/*

Challenge
**************
We will be writing a program that prints the numbers from 100 to 200 to
the console, with three exceptions:

  - If the number is a multiple of 3, print the string "Loopy" instead
    of the number.
  - If the number is a multiple of 4, print the string "Lighthouse"
    instead of the number.
  - If the number is a multiple of both 3 and 4, print the string 
    "LoopyLighthouse" instead of the number.

By print, we are referring to console.log.

*/

// Print numbers from 100 to 200, inclusive.
// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
for (let i = 100; i <= 200; i++) {
  switch (true) {
  case ((i % 3 === 0) && (i % 4 === 0)): // A number that's a multiple of 3 and 4.
    console.log("LoopyLighthouse");
    break;
  case (i % 3 === 0): // A number that's a multiple of 3.
    console.log("Loopy");
    break;
  case (i % 4 === 0): // A number that's a multiple of 4.
    console.log("Lighthouse");
    break;
  default: // A number that's not a multiple of 3 or 4.
    console.log(i);
  }
}