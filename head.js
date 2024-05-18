// FUNCTION IMPLEMENTATION
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
    
  }
};
// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Task Notes
// An array with only one element should still yield that one element as its head
// An empty array should yield undefined as its head