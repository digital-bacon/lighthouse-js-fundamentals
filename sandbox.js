const repeatNumbers = function(data) {
  let output = '';
  for (let i = 0; i < data.length; i++) {
    output += repeat(data[i][0].toString(), data[i][1] -1);
    if ((i + 1) < data.length) output += ', ';
  }

  return output;
};

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Recursion to repeat a string
function repeat(string, repeatCount) { 
  if (repeatCount === 0) return string;
  return string + repeat(string, repeatCount - 1);
}

// console.log(repeat("abc", 3));

// Recursion to perform exponent multiplication
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

console.log(mathPower(2, 1));
console.log(mathPower(2, 3));
console.log(mathPower(2, -2));