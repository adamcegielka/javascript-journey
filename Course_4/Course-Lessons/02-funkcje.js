// Funkcje

function helloName1(name) {
  console.log("hello, ");
  console.log(name);
}

helloName1("Ewa");
// Output: hello,
// Output: Ewa

// -----------------------

function helloName2(name) {
  console.log("hello, ");
  console.log(name);
}

let myName = "Adam";

helloName2(myName);
// Output: hello,
// Output: Adam

// -----------------------

function helloName3(name) {
  let result = "hello, " + name;
  console.log(result); // Output: hello, Jan
}

helloName3("Jan");

// -----------------------

function helloName4(name) {
  let result = "hello, " + name;
  return result;
}

let firstName = "Olga";

const result1 = helloName4("Bob");
console.log(result1); // Output: hello, Bob

const result2 = helloName4(firstName);
console.log(result2); // Output: hello, Olga

const result3 = helloName4();
console.log(result3); // Output: hello, undefined

// -----------------------

const myCars = function (car) {
  let result = "I have a " + car;
  return result;
};

let myCar = "BMW";

const car1 = myCars("Audi");
console.log(car1); // Output: I have a Audi

const car2 = myCars(myCar);
console.log(car2); // Output: I have a BMW

// -----------------------

const myColors = (color) => {
  let result = "I like a " + color;
  return result;
};

let myColor = "blue";

const color1 = myColors("red");
console.log(color1); // Output: I like a red

const color2 = myColors(myColor);
console.log(color2); // Output: I like a blue
