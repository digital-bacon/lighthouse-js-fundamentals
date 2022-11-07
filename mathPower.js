/**
 * Function that calculates the product of exponent multiplication
 * @param {number} base 
 * @param {number} power 
 * @returns {number} Result of calculations
 */
function mathPower(base, power) { 
  let result;
  if (power === 0) return 1; // Power of 0 always = 1
  // Perform calculation
  result = base * mathPower(base, Math.abs(power) - 1);
  // If `power` is negative, the result is divided by 1
  if (power < 0) {
    result = 1 / result;
  }
  return result;
}