// Objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
};

console.log(person); // Output: { firstName: "John", lastName: "Doe", age: 30, isEmployed: true }
console.log(person.firstName); // Output: "John"

person.lastName = "Smith";
console.log(person.lastName);

person["lastName"] = "Kowalski";
console.log(person.lastName);

let selection = "lastName";
person[selection] = "Nowak";
console.log(person.lastName);

// Objects with methods
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function () {
    console.log("Car is starting...");
  },
  getCarInfo: function () {
    return `${this.brand} ${this.model} (${this.year})`;
  },
};

console.log(car); // Output: { brand: "Toyota", model: "Corolla", year: 2020, start: [Function], getCarInfo: [Function] }
car.start(); // Output: "Car is starting..."
console.log(car.getCarInfo()); // Output: "Toyota Corolla (2020)"
