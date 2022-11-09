/**
 * Function that suggests the most efficient denominations to make 
 * change following a transaction
 * @param {number} total - Total transaction value in cents
 * @param {number} cash - Total payment received in cents
 * @returns {{denominations: number}}
 */
const calculateChange = function(total, cash) {

  const makeChange = new MakeChange(total, cash);
  return makeChange.changeSuggested;

  /**
   * Constructor function that receives a transaction amount and 
   * payment received, and parses suggested change
   * @param {number} chargeTotal - Total transaction value in cents
   * @param {number} paymentReceived - Total payment received in cents
   */
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
        // Solve to make suggested change in order of priority in `kvDenominations`
        // To remember the suggested change
        const suggestion = {};
        // Only suggest change if change is required
        if (this.changeRemaining <= 0) return suggestion;
        // Checks each denomination type from `kvDenominations`
        for (let denomination of Object.keys(this.kvDenominations)) {
          // Will remember the total value of this denomination type
          let denominationValue = this.kvDenominations[denomination];
          // To remember the total number of this denomination to dispense
          let denominationCount = 0;
          // Denominations larger than `changeRemaining` are not considered
          if (denominationValue <= this.changeRemaining) {
            // How many of this denomination type can be suggested?
            denominationCount = this.changeRemaining / denominationValue;
            // We can't suggest a part of a currency denomination, only accept counts > 1
            if (denominationCount >= 1) {
              // Ensure the suggested count of this denomination is a whole number
              denominationCount = Math.floor(denominationCount);
              // Add this denomination suggestion and count to our suggested change
              suggestion[`${denomination}`] = denominationCount;
              // Reduce changeRemaining the change we just suggested
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