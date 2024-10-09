// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.

class Dictionary<K, V> {
  private items: Map<K, V> = new Map();

  add(key: K, value: V): void {
    this.items.set(key, value);
  }

  get(key: K): V | undefined {
    return this.items.get(key);
  }

  delete(key: K): void {
    this.items.delete(key);
  }
}
// Usage example:
const dict = new Dictionary<string, number>();
dict.add("key1", 100);
dict.get("key1");
dict.delete("key1");
