//  PĘTLE

let box1 = document.getElementById("resultWile");
let box2 = document.getElementById("resultDoWile");
let box3 = document.getElementById("resultFor");

// While

let i = 0;

while (i < 7) {
  box1.innerHTML += i + "<br>";
  i++;
}

// Do While

let j = 0;

do {
  box2.innerHTML += j + "<br>";
  j++;
} while (j < 7); // zawsze wykona się co najmniej jeden raz np. let j = 7;

// For

let k = 0;

for (; k < 7; k++) {
  box3.innerHTML += k + "<br>";
}
