// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.

// 6. createPair
const createPair = <A, B>(a: A, b: B): [A, B] => [a, b];
// Test cases:
createPair<number, string>(1, 'one');
createPair<boolean, { id: number }>(true, { id: 42 });