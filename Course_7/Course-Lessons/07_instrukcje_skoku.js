// INSTRUKCJE SKOKU

let box1 = document.getElementById("boxContinueFirst");
let box2 = document.getElementById("boxContinueSecond");
let box3 = document.getElementById("boxContinueThird");
let box4 = document.getElementById("boxBreakFirst");
let box5 = document.getElementById("boxBreakSecond");
let box6 = document.getElementById("boxBreakThird");

// continue boxContinueFirst

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  box1.innerHTML += i + "<br />";
}

// continue boxContinueSecond

for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) {
      continue;
    }
    box2.innerHTML += j + " <=> " + i + "<br />";
  }
}

// continue boxContinueThird

loop1: for (let j = 0; j < 3; j++) {
  // loop2:
  for (let i = 0; i < 10; i++) {
    box3.innerHTML += " -- <br />";
    if (i > 5) {
      continue loop1;
    }
    if (i % 2 == 1) {
      continue;
    }
    box3.innerHTML += j + " <=> " + i + "<br />";
  }
}

// boxBreakFirst

for (let j = 0; j < 10; j++) {
  if (j == 5) {
    break;
  }
  box4.innerHTML += j + "<br />";
}

// boxBreakSecond

for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      break;
    }
    box5.innerHTML += j + " <=> " + i + "<br />";
  }
}

// boxBreakThird

top: for (let j = 0; j < 3; j++) {
  // inner:
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      break top;
    }
    box6.innerHTML += j + " -- " + i + "<br />";
  }
}

// skip alert

skip: {
  alert("Warning!");
  break skip;
  alert("Skip!");
}
