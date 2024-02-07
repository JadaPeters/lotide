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

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
function flatten(array) {
  let flattenedArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        flattenedArray.push(nestedElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
}

