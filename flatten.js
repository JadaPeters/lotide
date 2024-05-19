// eqArrays Function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }
  return true;
};


// asserEqual Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FUNCTION IMPLEMENTATION
// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
// The Array.isArray() method determines whether the passed value is an Array.
function flatten(array) {
  let flattenedArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        flattenedArray.push(nestedElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
}

// Test Coe
assertArraysEqual(flatten([1, [2, 3], [4, 5], 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]);

