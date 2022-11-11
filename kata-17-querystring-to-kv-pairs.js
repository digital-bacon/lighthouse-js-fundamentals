/**
 * Function that accepts a query string and returns key value pairs
 * @param {string} text - the query string to decode
 * @returns {<{key: string, value: string}>} key value pairs
 */
const urlDecode = function(text) {
  // In case someone included whitespace before or after, remove it
  text = text.trim();
  // In case someone included a ? at the start, let's remove it
  if (text[0] === "?") text = text.slice(1);
  // Decode the given URL
  // Replace any occurence of `%20` with ` `
  text = text.replace(/%20{1}/g, ' ');
  // Create a collection of key value pairs and populate it
  const kvQuerystring = {};
  for (let kv of text.split('&')) {
    const splitPair = kv.split('=');
    kvQuerystring[splitPair[0]] = splitPair[1];
  };

  return kvQuerystring;
};

// Expected output: {duck: "rubber"}
result(
  parseResult(
    deepEqual(
      urlDecode("duck=rubber"), {duck: "rubber"}
    ), true, `{duck: "rubber"}`
  ), `{duck: "rubber"}`
);

// Expected output: {bootcamp: "Lighthouse Labs"}
result(
  parseResult(
    deepEqual(
      urlDecode(
        "bootcamp=Lighthouse%20Labs"
      ), {bootcamp: "Lighthouse Labs"}
    ), true, `{bootcamp: "Lighthouse Labs"}`
  ), `{bootcamp: "Lighthouse Labs"}`
);

// Expected output: {city: "Vancouver", weather: "lots of rain"}
result(
  parseResult(
    deepEqual(
      urlDecode(
        "city=Vancouver&weather=lots%20of%20rain"
      ), {city: "Vancouver", weather: "lots of rain"}
    ), true, `{city: "Vancouver", weather: "lots of rain"}`
  ), `{city: "Vancouver", weather: "lots of rain"}`
);

// Expected output: "lots of rain"
result(
  urlDecode(
    "city=Vancouver&weather=lots%20of%20rain"
  ).weather, "lots of rain"
);

function result(output, expected) {
  if (output === expected) {
    console.log(`\x1b[32mTEST PASSED\n\x1b[36mresult:\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  } else {
    console.log(`\x1b[33mTEST FAILED\n\x1b[36mresult\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  };
};

function parseResult(result, expectation, output) {
  if (result === expectation) return output;
};

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  };
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    };
  };
  return true;
};
function isObject(object) {
  return object != null && typeof object === 'object';
};