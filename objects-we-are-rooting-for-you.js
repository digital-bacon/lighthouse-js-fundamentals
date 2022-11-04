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
- To remember the index position of the top scoring vegetable, create 
a number variable named `indexOfHighest` with an initial value of 0
- To track the highest scoring vegetable entry as we loop through them 
create a number variable named `highScore` with an initial value of 0 
- To record the current entry's metric score for the given 
characteristic, create a number variable named `entryScore` 
- Loop through the objects in the vegetables array.
  - Store the value of the key matching the `metric` in `entryScore`
  - If `entryScore` is higher than the `highScore`
    - update highScore to reflect the value of `entryScore`
    - update `indexOfHighest` to reflect this loop counter number.
- Return the name of the submitter matching the highScore record
*/

/**
 * Function that decides the best vegetable based on a given characteristic
 * @param {Array} vegetables A collection of vegetables as objects in an array
 * @param {string} metric Judgement characteristic, can be redness or plumpness
 * @returns {string} The name of the winning submitter
 */
 const judgeVegetable = function (vegetables, metric) {
   let indexOfHighest = 0;
   let highScore = 0;
   let entryScore = 0;
   for (let i = 0; i < vegetables.length; i++) {
     entryScore = vegetables[i][`${metric}`];
     if (entryScore > highScore) {
       indexOfHighest = i;
       highScore = entryScore;
     }
   }
   return vegetables[indexOfHighest].submitter;
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
