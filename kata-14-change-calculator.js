/**
 * 
 * @param {number} total - Total transaction value in cents
 * @param {number} cash - Total payment received in cents
 * @returns {{denominations: number}}
 */
const calculateChange = function(total, cash) {
  
  // A way to solve how many times a number can fit in another
  function getQuotient(dividend, divisor, includeRemainder = true) {
    let result = dividend / divisor;
    return includeRemainder ? result : Math.floor(result);
  }
  
  // Add currency denominations and their value in cents
  const kvDenominations = {
    2000: "twentyDollar",
    1000: "tenDollar",
    500: "fiveDollar",
    200: "twoDollar",
    100: "oneDollar",
    25: "quarter",
    10: "dime",
    5: "nickel",
    1: "penny",
  }

  // Calculate the total change required in cents
  const changeTotal = cash - total;
  
  // Track the total change remaining
  let changeRemaining = changeTotal;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Expected output:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }