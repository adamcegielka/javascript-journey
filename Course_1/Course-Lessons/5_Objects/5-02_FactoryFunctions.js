// Objects - Factory Functions

// Factory functions are functions that return an object.
// They allow you to create multiple instances of an object with the same structure.

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`,
      );
    },
  };
}

// Example usage:
const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25

console.log(person1); // Output: { name: 'Alice', age: 30, greet: [Function] }
console.log(person2); // Output: { name: 'Bob', age: 25, greet: [Function] }
console.log(person1 === person2); // Output: false (different instances)
