// --------------------------
//   Abstraction: Calculate
// --------------------------
const area = (width, depth) => width * depth;

const volumeOfSphere = (radius) => 
  (Math.PI * (Math.pow(radius, 3)) / 3) * 4;

const volumeOfCone = (radius, height) => 
  ((Math.PI * (Math.pow(radius, 2))) * height) / 3;

const volumeOfRectangle = (height, width, depth) => 
  area(width, depth) * height;

/**
 * Function that performs a calculation with provided arguments
 * @param {Function} logic 
 * @param {...any} args 
 * @returns {*}
 */
const calculate = (logic, ...args) => logic(...args);

console.log(calculate(volumeOfSphere, 10));
console.log(calculate(volumeOfCone, 3, 5));
console.log(calculate(volumeOfRectangle, 3, 4, 5));

// And an example with mapping, to show the power of this approach
const prisms = [[3, 4, 5], [4, 2, 10], [5, 2, 7]] // 3 prisms
// Output an array with the volume of each prism
console.log(prisms.map(element => calculate(volumeOfRectangle,element[0], element[1], element[2])))

// --------------------------
//   Abstraction: Evaluate
// --------------------------
const isNegative = (number) => (number - Math.abs(number)) < 0;

const multipleOf = (multiple, number) => 
number % multiple == 0 ? true : false;

/**
 * Function that performs boolean evaluation with provided arguments
 * @param {Function} logic 
 * @param {...any} args 
 * @returns {boolean}
 */
 const evaluate = (logic, ...args) => logic(...args);

 // Example usage: is 3 a multiple of 9?
console.log(evaluate(multipleOf, 3, 9)); // True

 // Example usage: is -3 a negative number?
 console.log(evaluate(isNegative, -3)); // True