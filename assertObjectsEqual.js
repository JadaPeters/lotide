// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; 
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) { 
      return false; 
    }
  }
  
  return true; 
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const objectsAreEqual = eqObjects(actual, expected);

  if (objectsAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Example usage

console.log(assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }))
console.log(assertObjectsEqual({ c: "1", d: ["2", 3], b : 12 }, { b : 2, d: ["2", 3], c: "1" }))