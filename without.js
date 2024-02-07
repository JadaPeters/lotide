const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    return true;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true; 
    }
  }
  
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
const without = function(array, values) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let found = false;
    for (let j = 0; j < values.length; j++) {
      if (array[i] === values[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);