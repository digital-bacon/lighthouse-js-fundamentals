/**
 * 
 * @param {number} total - Total transaction value in cents
 * @param {number} cash - Total payment received in cents
 * @returns {{denominations: number}}
 */
const calculateChange = function(total, cash) {

  const makeChange = new MakeChange(total, cash);
  return makeChange.changeSuggested;

  function MakeChange(chargeTotal, paymentReceived) {
    this.chargeTotal = chargeTotal,
    this.paymentReceived = paymentReceived,
    this.changeTotal = this.paymentReceived - this.chargeTotal,
    this.changeRemaining = this.changeTotal,
    this.kvDenominations = {
      twentyDollar: 2000,
      tenDollar: 1000,
      fiveDollar: 500,
      twoDollar: 200,
      oneDollar: 100,
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1,
    },
    this.suggestChange = function() {
        // Solve for the valid denomination types for the change required
        // Retrieve denomination types to array
        let denominations = Object.keys(this.kvDenominations);
        const suggestion = {};
        for (let denomination of denominations) {
          let denominationValue = this.kvDenominations[denomination];
          let denominationCount = 0;
          if (denominationValue <= this.changeRemaining) {
            denominationCount = this.changeRemaining / denominationValue;
            if (denominationCount >= 1) {
              // Denomination type can be used
              denominationCount = Math.floor(denominationCount);
              console.log(denominationCount);
              // Save the number of this denomination to makeChange
              suggestion[`${denomination}`] = denominationCount;
              // Reduce changeRemaining by value given by this denomination
              this.changeRemaining -= denominationCount * denominationValue;
            };
          }
        }
        return suggestion;
      },
      this.changeSuggested = this.suggestChange()
  };

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000)); // 499 cents change

// Expected output:
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }