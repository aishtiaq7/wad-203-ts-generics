"use strict";
// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.
const safeAccess = (obj, keys) => {
    return keys.reduce((acc, key) => {
        if (acc && typeof acc === 'object') {
            return acc[key];
        }
        return undefined;
    }, obj);
};
// Test cases:
const nestedObject = { a: { b: { c: 42 } } };
console.log(safeAccess(nestedObject, ['a', 'b', 'c'])); // 42
console.log(safeAccess(nestedObject, ['a', 'x', 'c'])); // undefined
console.log(safeAccess(nestedObject, ['a', 'b'])); // { c: 42 }
console.log(safeAccess(nestedObject, ['a'])); // { b: { c: 42 } }
