"use strict";
// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.
class Stack {
    elements = [];
    push(item) {
        this.elements.push(item);
    }
    pop() {
        return this.elements.pop();
    }
}
// Test cases:
const numStack = new Stack();
numStack.push(10);
numStack.pop();
