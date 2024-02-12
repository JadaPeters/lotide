const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test code
console.log("Testing for arrays with one or two elements:");
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

console.log("Testing for arrays with odd number of elements:");
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log("Testing for arrays with even number of elements:");
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);