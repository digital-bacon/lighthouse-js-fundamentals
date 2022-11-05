const judgeVegetable = function (vegetables, metric) {
  // Sort the objects by metric
  vegetables.sort((a, b) => a[metric] - b[metric]);
  // Return the last array item's submitter name
  return vegetables[vegetables.length - 1].submitter;
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

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric), "=?", "Sally Tomato-Grower");