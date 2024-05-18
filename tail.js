// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    result[result.length] = arr[i]; // Add element to the end of result array
  }
  return result;
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
const result1 = tail([1, 2, 3]);
assertEqual(result1.length, 2); // Check if the result has 2 elements
assertEqual(result1[0], 2); // Check if the first element of the result is 2
assertEqual(result1[1], 3); // Check if the second element of the result is 3

const result2 = tail([1]);
assertEqual(result2.length, 0); // Check if the result is an empty array

const result3 = tail([]);
assertEqual(result3.length, 0); // Check if the result is an empty array