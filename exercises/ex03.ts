// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.

const reverseArray = <T>(arr: T[]): T[] => arr.reverse();
// Test cases:
reverseArray<number>([1, 2, 3]);
reverseArray<string>(['a', 'b', 'c']);
reverseArray<{ name: string }>([{ name: 'A' }, { name: 'B' }]);
