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

// Recursion
function repeat(string, repeatCount) { 
  if (repeatCount === 0) return string;
  return string + repeat(string, repeatCount - 1);
}

// console.log(repeat("abc", 3))