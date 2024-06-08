//  assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function(sentence) {
  const letterCounts = {};

  for (const letter of sentence) {
    if (letterCounts[letter]) {
      letterCounts[letter] += 1;
    } else {
      letterCounts[letter] = 1;
    
    }
  }
  return letterCounts;
};

const result = countLetter('lighthouseinthehouse');
console.log(result);