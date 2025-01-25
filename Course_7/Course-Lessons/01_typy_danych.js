console.log("Hello World!");
console.log("Hello. How are you today?");

var variableName = "Great and you?"; // zmienna: var
console.log(variableName);

var x = 6;
console.log(x + x);

let textA = "What will we learn today?"; // zmienna: let
console.log("Great too.", textA);

let textB = 10;
console.log("Maybe", textB, "new 'words' in English");

let c;
console.log(c); // undefined
c = 10;
console.log(c);
c = 10 - 3;
console.log(c);
c = "number";
console.log(c);
c = true;
console.log(c);
c = null;
console.log(c);

const a = 22;
console.log(a);

// \n - wyświetla tekst z nowego wiersza
console.log("OK \nGood luck!");

// znak `Jakiś tekst` pozwala na wpsanie długigo tekstu w wielu liniach
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc nec malesuada libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Ut sed risus sed lectus efficitur sollicitudin eget ac eros.`;
console.log(longText);

// tworzenie tablic z wieloma elementami
let tab = [5, "Jonh Smith", 42, 68];
console.log("Second element of the table: " + tab[1]);
console.log("Third element of the table: " + tab[3]);

// Dodaje nowy paragraf (<p>) z tekstem "Hello World Again!" na końcu istniejącej treści w <body> strony
document.body.innerHTML += "<p>Hello World Again!</p>";

// wyskakujący komunikat
alert("Funkcje wyświetlone są w konsoli");

/*
Komentarz w JavaScript wieloliniowy
*/
