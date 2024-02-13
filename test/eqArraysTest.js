const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for equal arrays", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
    assert.isTrue(eqArrays([], []));
  });

  it("returns false for unequal arrays", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2]));
  });
});




// // Test cases
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
// assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
// assertEqual(eqArrays([], []), true);