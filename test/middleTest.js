const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array for arrays with one or two elements", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns the middle element for arrays with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns the two middle elements for arrays with even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});


// // Test code
// console.log("Testing for arrays with one or two elements:");
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// console.log("Testing for arrays with odd number of elements:");
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// console.log("Testing for arrays with even number of elements:");
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);