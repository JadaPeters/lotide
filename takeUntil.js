// eqArrays Function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takeUntil Function
const takeUntil = function(array, callback) {
  const result = []; // initialize empty array to hold results
  for (const item of array) { // iterate over each item in the array
    if (callback(item)) { // if the callback function returns truthy
      break; // stop the loop
    }
    result.push(item); // otherwise, add the item to the result array
  }
  return result; // return the result array
};

// Test Cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ","), ["I've", "been", "to", "Hollywood"]);

