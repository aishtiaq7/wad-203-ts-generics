"use strict";
// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.
// 7. filterByType
const filterByType = (arr, type) => {
    return arr.filter(item => typeof item === type);
};
// Test cases:
filterByType([1, "a", true], 'number'); // Will filter out numbers
filterByType([1, "a", true], 'string'); // Will filter out strings
filterByType([1, "a", true], 'boolean'); // Will filter out booleans
