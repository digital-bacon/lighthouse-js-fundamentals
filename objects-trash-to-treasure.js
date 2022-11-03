/* 
Welcome back to Codeville, where you are now the mayor! The people of
Codeville want you to focus on Smart City upgrades. You've decided to
begin by replacing all of the city's trash cans with smart cans: when
citizens toss their rubbish into the smart can, it automatically sorts
items into waste, recycling, and compost bins.

We need to complete a function called smartGarbage(trash, bins),
which will be responsible for increasing the garbage count for waste,
recycling, or compost depending on what trash is submitted.


Instruction: Complete the logic in the function smartGarbage.


Our function will receive two arguments:

1. The first argument, `trash`, is a string that will tell our 
function what type of item is being submitted.

2. The second argument, `bins`, is an object containing three 
properties (`waste`, `recycling`, and `compost`), which hold some 
numerical value. Our function must increase the correct value in the 
bins object, and then return the newly updated object.


For example, say we called the function with the following
arguments.

`smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });`

The smartGarbage function should return the object:
{
  waste: 4,
  recycling: 3,
  compost: 5
}


CONSTRAINTS:
1. The function must increase the correct value in the bins object, 
and then return the newly updated object.
2. The @trash parameter can be of 3 string values:
  - waste
  - recycling
  - compost
3. The @bins parameter will always be of object type, and contain at 
minimum the following keys:
  - waste <number>
  - recycling <number>
  - compost <number>

ALGORITHM smartGarbage():
- We need a way to ensure the trash type is valid.
- We need a way to ensure the `bins` object contains the required keys 
  - use `trash in bins` to check if a key exists in the bins object
  - if it doesn't exist, return `bins` unchanged
- We need a way to modify a key directly, without knowing the name of 
the key.
  - because the trash parameter contains the value of the key to 
  modify, we can use ES6 template literal notation to reference the 
  key dynamically and increase it's value
- return the updated bin
*/

/**
 * Function that increases the garbage count inside a bins for waste, 
 * recycling, or compost depending on what trash is submitted.
 * @param {string} trash The type of trash being added from waste, recycling, or compost
 * @param {Object} bins The trash bins that the trash is being added to
 * @returns {Object} The updated trash bins object
 */
 const smartGarbage = function (trash, bins) {
  // Ensure the provided bins accept this kind of trash
  if (trash in bins === false) {
    return bins; // the bins don't accept this kind of trash
  } else {
    // Add this trash to the appropriate bin
    bins[`${trash}`]++;
  }
  return bins;
 }

// Test cases, using valid arguments
// Add recycling to bins with at least 1 item existing of each trash type
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }), "=?", { waste: 4, recycling: 3, compost: 5 });
// Add waste to bins with at least 1 item existing of each trash type
console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }), "=?", { waste: 5, recycling: 2, compost: 5 });
// Add compost to bins with at least 1 item existing of each trash type
console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }), "=?", { waste: 4, recycling: 2, compost: 6 });
// Test add recycling to bins when no recycling exists in the bin
console.log(smartGarbage('recycling', { waste: 4, compost: 5 }), "=?", { waste: 4, compost: 5});
// Test add recycling to bins when the bins is empty
console.log(smartGarbage('recycling', { }), "=?", { });
