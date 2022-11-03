/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function () {
    let message = `Welcome!
Your balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
    return message;
  }
};

console.log(savingsAccount.printAccountSummary());

/*
Directions:
Create an object called facebookProfile. The object should
have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index 
provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
  name: 'Mark B',
  friends: 0,
  messages: ['friends', 'don\'t', 'let', 'friends', 'use', 'facebook'],
  postMessage: function(message) {this.messages.push(message)},
  deleteMessage: function(index) {this.messages.splice(index, 1)},
  addFriend: function() {this.friends += 1},
  removeFriend: function() {this.friends -= 1}
}

/*
 * Programming Quiz: Donuts Revisited (7-6)
Use the forEach() method to loop over the array and print out the 
following donut summaries using console.log.

 * QUIZ REQUIREMENTS
 * - Your code should have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects. 
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach((element) => {
  console.log(`${element.type} donuts cost $${element.cost} each`);
});