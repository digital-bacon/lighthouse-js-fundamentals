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

BREAK IT DOWN:
- 


ALGORITHM:
- 

*/

/**
 * Function that increases the garbage count inside a bin for waste, 
 * recycling, or compost depending on what trash is submitted.
 * @param {string} trash The type of trash being added from waste, recycling, or compost
 * @param {Object} bin The trash bin that the waste is being added to
 * @returns {Object} The updated trash bin object
 */
 const smartGarbage = (trash, bin) => {
  
 }

// Test cases, using valid arguments
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }), "=?", { waste: 4, recycling: 3, compost: 5 });
