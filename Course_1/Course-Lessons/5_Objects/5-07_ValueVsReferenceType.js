// Objects - Value vs Reference Type

// Value types are stored directly in the variable, while reference types store a reference to the object in memory.

// Value types include Numbers, strings, Booleans, Undefined, Null.
// Reference types include Objects, Arrays, and Functions.

let x = 10; // Value type
let y = x; // y is a copy of x
x = 20; // Changing x does not affect y
console.log(x); // Output: 20
console.log(y); // Output: 10

// Reference types behave differently
let obj1 = { value: 10 }; // Reference type
let obj2 = obj1; // obj2 references the same object as obj1
obj1.value = 20; // Changing obj1 affects obj2
console.log(obj2.value); // Output: 20

// Function reference
let number = 30; // Primitive value

function increase(number) {
  number++;
  console.log(number); // Output: 11
}

increase(number); // Passing a primitive value, Output: 31
console.log(number); // Output: 30 (original value remains unchanged)

// Object reference
let obj = { value: 10 };
function increaseObject(obj) {
  obj.value++;
  console.log(obj.value); // Output: 11
}

increaseObject(obj); // Passing an object reference
console.log(obj.value); // Output: 11 (original object is modified)
