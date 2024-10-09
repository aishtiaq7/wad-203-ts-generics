"use strict";
// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.
class Dictionary {
    items = new Map();
    add(key, value) {
        this.items.set(key, value);
    }
    get(key) {
        return this.items.get(key);
    }
    delete(key) {
        this.items.delete(key);
    }
}
// Usage example:
const dict = new Dictionary();
dict.add("key1", 100);
dict.get("key1");
dict.delete("key1");
