// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    result[result.length] = arr[i];
  }
  return result;
};

module.exports = tail;