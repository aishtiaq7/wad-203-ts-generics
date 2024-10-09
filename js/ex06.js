"use strict";
// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.
// 6. createPair
const createPair = (a, b) => [a, b];
// Test cases:
createPair(1, 'one');
createPair(true, { id: 42 });
