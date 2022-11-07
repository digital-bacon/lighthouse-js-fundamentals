/**
 * Function that calculates volume of a sphere, given radius
 * @param {number} radius The radius of the object
 * @returns {number} The volume of the object
 */
const sphereVolume = function (radius) {
  // Code here!
  // Formula: V=4/3(πr3), or in JS: ((Math.PI * (radius * radius * radius) / 3) * 4)
  return ((Math.PI * (radius * radius * radius) / 3) * 4)
}

/**
 * Function that calculates volume of a cone, given radius and height
 * @param {number} radius The radius of the object
 * @param {number} height The height of the object
 * @returns {number} The volume of the object
 */
const coneVolume = function (radius, height) {
  // And here!
}

/**
 * Function that calculates volume of a prism, given height, width, 
 * and depth
 * @param {number} height The height of the object
 * @param {number} width The width of the object
 * @param {number} depth The depth of the object
 * @returns {number} The volume of the object
 */
const prismVolume = function (height, width, depth) {
  // Probably here too!
}

/**
 * Function that calculates total volume of provided solids/shapes 
 * as objects
 * @param {Array<object>} solids Array collection of shape objects
 * @returns {number} The total volume of the objects
 */
const totalVolume = function (solids) {
  // Code here? Yup!
}

/**
 * Function that calculates the product of exponent multiplication
 * @param {number} base 
 * @param {number} power 
 * @returns {number} Result of calculations
 */
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

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);