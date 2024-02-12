const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(['apple', 'banana', 'cherry']), 'apple');
assertEqual(head([undefined, 2, 3]), undefined);