// FUNCTION IMPLEMENTATION
// a function that can compare two arrays for a perfect match.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; 
    } 
    return true;
};
}


// asserEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Code
// identical arrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// arrays with different lengths
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS

// arrays with same lengths but different elements
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should PASS

// arrays with different lengths and different elements
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // => should PASS

// one empty array
assertEqual(eqArrays([], [1, 2, 3]), false); // => should PASS

// both arrays empty
assertEqual(eqArrays([], []), true); // => should PASS