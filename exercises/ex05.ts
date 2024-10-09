// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.

const duplicateElements = <T>(arr: T[], n: number): T[] => {
  return arr.flatMap((item) => Array(n).fill(item));
};

// Test cases:
duplicateElements<number>([1, 2], 3);
duplicateElements<string>(["a", "b"], 2);
