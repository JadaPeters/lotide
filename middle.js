

const middle = function(array) {
let length = array.length;
const middleIndex = Math.floor(length / 2);
  if (length <= 2) {
    return [];
  } else if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;
