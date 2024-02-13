const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("checks if two arrays are equal", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });

  it("checks if two arrays are not equal", () => {
    assert.notDeepEqual([1, 2, 3], [3, 2, 1]);
  });
});
// // TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
