// utwórz funkcje, która przyjmuje dwa parametry: imie i nazwisko, a w rezultacie zwróci jedną wartość "imie nazwisko"
// zdefiniuj ją za pomocą słowa kluczowego function, zdefiniuj jako zmienną z funkcją anonimową oraz funkcje strzałkową (3 warianty)

// My Solution:

function secondTask(name) {
  console.log("My name is: ");
  console.log(name);
}

let firstName2 = "Jan";
let lastName2 = "Kowalski";

secondTask(firstName2 + " " + lastName2);

// ------------------------------------

const firstTask = function (name) {
  let result = "My name is " + name;
  return result;
};

let firstName1 = "Adam";
let lastName1 = "Brick";

const introduce1 = firstTask(firstName1 + " " + lastName1);
console.log(introduce1);

// ------------------------------------

const thirdTask = (name) => {
  let result = "My name is " + name;
  return result;
};

let firstName3 = "John";
let lastName3 = "Smith";

const introduce3 = thirdTask(firstName3 + " " + lastName3);
console.log(introduce3);

// ------------------------------------
// Solution form lesson:
// 1
function getDidplayName1(firstName, lastName) {
  let result = firstName + " " + lastName;
  return result;
}

console.log(getDidplayName1("Name1", "Surname1"));

// 2
const getDidplayName2 = function (firstName, lastName) {
  let result = firstName + " " + lastName;
  return result;
};

console.log(getDidplayName2("Name2", "Surname2"));

// 3
const getDidplayName3 = (firstName, lastName) => {
  let result = firstName + " " + lastName;
  return result;
};

console.log(getDidplayName3("Name2", "Surname2"));
