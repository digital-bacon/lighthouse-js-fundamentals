/*

Movements:
Left = turn counter-clockwise
Right = turn clockwise
1 block = 1 grid space

Constraints:
1. The driver always starts in the same position, SW corner of grid
2. The output will always be East and North from start.

*/

const blocksAway = function(directions) {
  // Put your solution here
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// Expected output:
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}