const head = function(arr) {
  if (arr.length === 0) {
    return undefined; 
  } else {
    return arr[0]; 
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
