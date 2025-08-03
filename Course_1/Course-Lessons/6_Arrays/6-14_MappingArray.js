// Mapping of an Array

const numbers = [1, 2, 3, 4, 5];
const mappedNumbers = numbers.map((num) => num * 2);
console.log(mappedNumbers); // [2, 4, 6, 8, 10]

const strings = ["apple", "banana", "cherry"];
const mappedStrings = strings.map((str) => str.toUpperCase());
console.log(mappedStrings); // ["APPLE", "BANANA", "CHERRY"]

//
const filtered = numbers.filter((num) => num >= 0);
const items = filtered.map((n) => "<li>" + n + "</li>");
console.log(items); // ["<li>1</li>", "<li>2</li>", "<li>3</li>", "<li>4</li>", "<li>5</li>"]

const html = "<ul>" + items.join("") + "</ul>";
console.log(html); // "<ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>"

const itemsObject = filtered.map((n) => {
  const obj = {};
  obj.value = n;
  return obj;
});
console.log(itemsObject); // [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]
