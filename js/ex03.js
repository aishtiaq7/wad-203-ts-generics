"use strict";
// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.
const reverseArray = (arr) => arr.reverse();
// Test cases:
reverseArray([1, 2, 3]);
reverseArray(['a', 'b', 'c']);
reverseArray([{ name: 'A' }, { name: 'B' }]);
