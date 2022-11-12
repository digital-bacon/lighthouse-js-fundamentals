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


const multipleOf = (multiple, number) => {
  // ie: (3, 9) => true, while (4, 9) => false
  return number % multiple == 0 ? true : false;
};

const evaluate = (logic, ...args) => {
  return logic(...args);
}

// Print numbers from 100 to 200, inclusive.
// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
for (let i = 100; i <= 200; i++) {
  if (evaluate(multipleOf, 3, i) && evaluate(multipleOf, 4, i)) {
    console.log("LoopyLighthouse");
  } else if (evaluate(multipleOf, 3, i)) {
    console.log("Loopy");
  } else if (evaluate(multipleOf, 4, i)) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}