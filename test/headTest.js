// REQUIRE HEAD AND ASSERT EQUAL FUNCTIONS
const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");