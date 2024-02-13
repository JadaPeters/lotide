const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});


// // TEST CODE
// assertEqual(tail([1, 2, 3])[0], 2);
// assertEqual(tail([1, 2, 3])[1], 3);
