"use strict";
// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.
const getFirstElement = (arr) => arr.length > 0 ? arr[0] : undefined;
// Test cases:
getFirstElement([1, 2, 3]);
getFirstElement(['a', 'b', 'c']);
getFirstElement([]); // undefined
