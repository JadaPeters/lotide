// REQUIRE EQARRAYS AND ASSERT EQUAL FUNCTIONS
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// TEST CODE
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
