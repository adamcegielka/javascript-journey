// INSTRUKCJE WARUNKOWE

document.getElementById("result").innerHTML = "Hello World!";

// Pierwszy przykład:

var comparison = document.getElementById("comparison");
var x = 4, y = 11;

if (x < y) {
  comparison.innerHTML = "True";
}

// Drugi przykład:

var age = document.getElementById("age");
var valueAge = 18;

if (valueAge > 17) {
  age.innerHTML = "Możesz prowadzić auto";
} else if (valueAge == 17) {
  age.innerHTML = "Możesz prowadzić pod opieką dorosłego!";
} else {
  age.innerHTML = "Jesteś niepełnoletni!";
}

// Alert:

let alertText = true;

if (alertText) {
  alert("Hello!");
  alert("How old are you?");
}

// Druga opcja Alertu:

valueAge >= 18 ? alert("Pełnoletni") : alert("Niepełnoletni!");
