"use strict";
// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.
const duplicateElements = (arr, n) => {
    return arr.flatMap((item) => Array(n).fill(item));
};
// Test cases:
duplicateElements([1, 2], 3);
duplicateElements(["a", "b"], 2);
