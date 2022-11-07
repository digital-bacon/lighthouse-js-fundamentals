const repeatNumbers = function(data) {
  let output = '';
  // Loop data array
  for (let i = 0; i < data.length; i++) {
    let repeatString = data[i][0];
    let repeatAmount = data[i][1];
    // Repeat the string
    for (let y = 0; y < repeatAmount; y++) {
        output += repeatString;
    }
    // Add a comma if more strings will follow
    if ((i + 1) < data.length) output += ', ';
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));