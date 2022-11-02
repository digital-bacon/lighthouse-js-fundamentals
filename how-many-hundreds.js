/* 
As humanity gets closer to living on Mars, we must start sending 
supplies to the red planet now, to prepare for our arrival. So Canada 
is going to start to send containers of maple syrup. Each container on 
the space ship can hold exactly 100 bottles of maple syrup. A 
container will only be sent if it's full.

Given a certain number of bottles, we need to determine how many 
containers can be filled and sent. In this challenge, we will write a 
function that determines how many hundreds can be made from a number.

EXPECTED OUTPUT:
When this function is given a number, it should return how many 
hundreds fit into that number.

howManyHundreds(1000);  // 10
howManyHundreds(894);	  // 8
howManyHundreds(520);	  // 5
howManyHundreds(99);	  // 0
howManyHundreds(0);	    // 0

CONSTRAINTS:
1. The result should be a whole number.
2. The function must work with an input less than 100.
3. The function must work with an input of 0.

BREAK IT DOWN:
- Start with a number that's easy to understand
  - The number 200 has two 100's in it
  - To calculate this, we would divide 200 by 100, resulting in 2
- Now, for a more complicated number, like 220.
  - Dividing 220 by 100 equals 2.2
  - We can use Math.floor(number) to remove the decimal

ALGORITHM:
- 

*/

/**
 * A function that determines how many hundreds can be made from a number
 * @param {number} number The input number
 * @returns {number} The number of hundreds that can be made
 */
 const howManyHundreds = (number) => {
   
 }

// Test cases
howManyHundreds(1000);  // 10
howManyHundreds(894);	  // 8
howManyHundreds(520);	  // 5
howManyHundreds(99);	  // 0
howManyHundreds(0);	    // 0