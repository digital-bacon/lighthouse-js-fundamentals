/* 
At this year's town festival the Codeville Vegetation Association will
be handing out several awards for the best vegetables in a given
category. We'll be testing out a new judging system on the best
tomatoes to start, which can be judged based on their redness OR their
plumpness.


CHALLENGE:
Complete the logic in the function `judgeVegetable`.

For this challenge, we'll need to implement a function called
judgeVegetable()that will decide which vegetable is best based on a
given judging characteristic. Our function will receive two parameters:
a list of veggies(as an array of objects), and a characteristic to
judge the veggies by (in the case of a tomato, either redness or
plumpness).


Our function must return the name of the person who submitted
(vegetables.submitter) the vegetable with the highest ranking in the
provided category.


CONSTRAINTS:
1. The highest numeric value in the given characteristic wins.

ALGORITHM judgeVegetable():
- Create a number variable named `highScore` with an initial value of 0
to remember the index position of the top scoring vegetable
- Iterate through the objects in the vegetables array.
- Reference the key matching the `metric` parameter
  - If the current key value is higher than the key value matching the 
  current `highScore` record
    - update `highScore` to reflect this loop counter number.
- Return the name of the submitter from the array item matching the
vegetable record matching `highScore`.
*/

/**
 * Function that decides the best vegetable based on a given characteristic
 * @param {Array} vegetables A collection of vegetables as objects in an array
 * @param {string} metric Judgement characteristic, can be redness or plumpness
 * @returns {string} The name of the winning submitter
 */
 const judgeVegetable = function (vegetables, metric) {

 }

 const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric), "=?", "Old Man Franklin");
