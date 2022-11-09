/**
 * 
 * @param {number} total - Total transaction value in cents
 * @param {number} cash - Total payment received in cents
 * @returns {{denominations: number}}
 */
const calculateChange = function(total, cash) {
  
  // Add currency denominations and their value in cents
  const kvDenominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  }

  // Add an object to hold the result of making change
  const makeChange = {}

  // Calculate the total change required in cents
  const changeTotal = cash - total;
  
  // Add variable to track the total change remaining
  let changeRemaining = changeTotal;
  
  // Retrieve denomination types to array
  let denominations = Object.keys(kvDenominations);

  // Solve for the valid denomination types for the change required
  for (let denomination of denominations) {
    let denominationValue = kvDenominations[denomination];
    let denominationCount = 0;
    if (denominationValue <= changeRemaining) {
      denominationCount = changeRemaining / denominationValue;
      if (denominationCount >= 1) {
        // Denomination type can be used
        denominationCount = Math.floor(denominationCount);
        // Save the number of this denomination to makeChange
        makeChange[denomination] = denominationCount;
        // Reduce changeRemaining by value given by this denomination
        changeRemaining -= denominationCount * denominationValue;
      };
    }
  }

  // Return the change
  return makeChange;

};

// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000)); // 499 cents change

// Expected output:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }