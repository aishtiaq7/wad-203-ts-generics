// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.

// 2. identity
const identity = <T>(arg: T): T => arg;
// Test cases:
identity<number>(42);
identity<string>("hello");
identity<{ id: number }>({ id: 1 });