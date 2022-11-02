/* 
We're going to carve some pumpkins to prepare for Halloween. We'll 
start out easy and just carve circles, triangles, and rectangles. We 
need to know how much pumpkin scraps we'll have once we're done 
though, so we'll need to be able to calculate the areas of each of 
those shapes.

In this exercise, we will define 3 functions to calculate the areas 
of 3 different shapes:

  - rectangles
  - triangles
  - circles

Create the following 3 functions with the correct logic to calculate 
the area of that shape.

  - calculateRectangleArea(length, width)
  - calculateTriangleArea(base, height)
  - calculateCircleArea(radius)

CONSTRAINTS:
1. Each function should return a number that corresponds to the area 
of the shape.
2. If any of the parameters are negative, the function should return 
undefined.

ALGORITHM:
- calculateRectangleArea()
  - if any of the given parameters are negative, return undefined
  - return the area of the rectangle using formula: length × width
- calculateTriangleArea()
  - if any of the given parameters are negative, return undefined
  - return the area of the rectangle using formula: base × height / 2
- calculateCircleArea()
  - if any of the given parameters are negative, return undefined
  - return the area of the rectangle using formula: π × radius(squared)
*/


/**
 * 
 * @param {number} length The length of the rectangle, min value 0
 * @param {number} width The width of the rectangle, min value 0
 * @returns {number|undefined} The area of the rectangle
 */
 function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) return;
  return (length * width);
 }

/**
 * 
 * @param {number} base The base of the triangle, min value 0
 * @param {number} height The height of the triangle, min value 0
 * @returns {number|undefined} The area of the triangle
 */
 function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) return;
 }

/**
 * 
 * @param {number} radius The radius of the circle, min value 0
 * @returns {number|undefined} The area of the circle, min value 0
 */ 
 function calculateCircleArea(radius) {
  if (radius < 0) return;
 }

// Test cases
console.log(calculateRectangleArea(10, 5), "=?", 50);
console.log(calculateRectangleArea(1.5, 2.5), "=?", 3.75);
console.log(calculateRectangleArea(10, -5), "=?", undefined);

console.log(calculateTriangleArea(10, 5), "=?", 25);
console.log(calculateTriangleArea(3, 2.5), "=?", 3.75);
console.log(calculateTriangleArea(10, -5), "=?", undefined);

console.log(calculateCircleArea(10), "=?", "314.159...");
console.log(calculateCircleArea(3.5), "=?", "38.484...");
console.log(calculateCircleArea(-1), "=?", undefined);