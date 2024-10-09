// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message

const concatSum = <T extends string | number>(a: T, b: T): string | number | void => {
  if (typeof a === 'string' && typeof b === 'string') return a.concat(b);
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  console.error('Error: Both arguments must be of the same type and either string or number.');
};
