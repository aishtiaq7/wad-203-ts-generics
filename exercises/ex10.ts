// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.


const customMap = <T, U>(arr: T[], mapper: (item: T) => U): U[] => arr.map(mapper);
// Test cases:
customMap<number, string>([1, 2, 3], (num) => num.toString());
customMap<string, number>(['1', '2', '3'], (str) => parseInt(str));
