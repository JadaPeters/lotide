const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString()); 
assertEqual(tail(['apple', 'banana', 'cherry']).toString(), ['banana', 'cherry'].toString()); 
