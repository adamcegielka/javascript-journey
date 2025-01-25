// Dynamic
let firstName = "Piotr";
console.log(firstName); // Output: "Piotr"

typeof firstName;
console.log(typeof firstName); // Output: "string"

// Static
class Example {
  static name = "Adam";
}

console.log(Example.name); // Output: "Adam"

// Static method in a class
class Welcome {
  static species = "Homo Sapiens";

  static greet() {
    return "Hello!";
  }
}

// We can access static methods and properties directly on the class, without creating an instance
console.log(Welcome.greet()); // Output: "Hello!"
console.log(Welcome.species); // Output: "Homo Sapiens"
