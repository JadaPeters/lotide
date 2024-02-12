const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual(tail([1, 2, 3])[0], 2);
assertEqual(tail([1, 2, 3])[1], 3);
