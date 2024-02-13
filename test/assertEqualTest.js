const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("checks if two numbers are equal", () => {
    assert.strictEqual(22, 1);
    assert.strictEqual(5, 10);
    assert.strictEqual(5, 5);
  });

  it("checks if two strings are equal", () => {
    assert.strictEqual("hello", "hello");
  });
});



// // TEST CODE
// assertEqual(22, 1);
// assertEqual(5, 10); 
// assertEqual("hello", "hello");
// assertEqual(5, 5);