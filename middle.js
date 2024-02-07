const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; 
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; 
    }
  }
  
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(array) {
let length = array.length;
const middleIndex = Math.floor(length / 2);
  if (length <= 2) {
    return [];
  } else if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

// Testing
console.log("Testing for arrays with one or two elements:");
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

console.log("Testing for arrays with odd number of elements:");
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log("Testing for arrays with even number of elements:");
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);