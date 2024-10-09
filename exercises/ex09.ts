// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.

class Stack<T> {
    private elements: T[] = [];
  
    push(item: T): void {
      this.elements.push(item);
    }
  
    pop(): T | undefined {
      return this.elements.pop();
    }
  }
  // Test cases:
  const numStack = new Stack<number>();
  numStack.push(10);
  numStack.pop();