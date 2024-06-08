// REQUIRE TAIL AND ASSERT EQUAL FUNCTIONS
const tail = require("../tail");
const assertEqual = require("../assertEqual");

// TEST CODE
const result1 = tail([1, 2, 3]);
assertEqual(result1.length, 2); // Check if the result has 2 elements
assertEqual(result1[0], 2); // Check if the first element of the result is 2
assertEqual(result1[1], 3); // Check if the second element of the result is 3

const result2 = tail([1]);
assertEqual(result2.length, 0); // Check if the result is an empty array

const result3 = tail([]);
assertEqual(result3.length, 0); // Check if the result is an empty array
