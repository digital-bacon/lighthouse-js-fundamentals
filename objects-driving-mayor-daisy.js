/* 
As Mayor of Codeville, you want one of your legacies to be bettering
street design enough to improve traffic flow and reduce congestion.
You've decided to start by installing special sensors on some streets
to monitor how often cars pass by, and track their speeds.


Challenge: Complete the logic in the function `carPassing`.

The function, carPassing(cars, speed), takes in an array of car
objects, and the speed of a car as it passes the sensor.

This function should create a new object with a property called
speed, and another property called time and add it to the cars array.
We can retrieve the current time, for setting the time property, by
using the Date.now() function, which is built into JavaScript!


CONSTRAINTS:

ALGORITHM carPassing():
- 
*/

/**
 * Function that returns an array that includes all of the elements in 
 * cars as well as our new element
 * @param {Array} cars The existing cars as objects in an array
 * @param {number} speed The speed of the car that's being added
 * @returns {Array} The updated array of cars
 */
 const carPassing = function (cars, speed) {

 }

 const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38;

console.log(carPassing(cars, speed), "=?", [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  },
  {
    time: Date.now(),
    speed: 38
  }
]);
