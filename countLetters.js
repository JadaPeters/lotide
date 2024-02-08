const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const letterCounts = {};

  for (const letter of word) {
    if (letter !== ' ') {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else { 
        letterCounts[letter] = 1;
      }
    }
  }

  return letterCounts;
};

console.log(countLetters('LHL'));
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);