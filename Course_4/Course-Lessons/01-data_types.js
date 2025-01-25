// string
let name = "John Doe";
console.log(name); // Output: "John Doe"

// number
let age = 30;
console.log(age); // Output: 30

// bigint
let bigNumber = 9007199254740991n;
console.log(bigNumber); // Output: 9007199254740991n

// boolean
let isStudent = true;
console.log(isStudent); // Output: true

// undefined
let noValue;
console.log(noValue); // Output: undefined

// null
let emptyValue = null;
console.log(emptyValue); // Output: null

// object
let person = {
  name: "Alice",
  age: 25,
  address: {
    streetName: "name",
    streetNumber: 123,
  },
};
console.log(person); // Output: { name: "Alice", age: 25 }
console.log(person.age); // Output: { 25 }

// array
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // object

// symbol
let id = Symbol("id");
console.log(id); // Output: Symbol(id)
