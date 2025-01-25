// INSTRUKCJE WARUNKOWE SWITCH

let boxColor = document.getElementById("colorBox");

let color = "secondColor";

switch (color) {
  case "firstColor":
    boxColor.style.borderColor = "#256F45";
    boxColor.style.backgroundColor = "#A4356F";
    boxColor.style.color = "#1F1131";
    break;
  case "secondColor":
    boxColor.style.backgroundColor = "#648BCB";
    boxColor.style.borderColor = "#EFB6BE";
    boxColor.style.color = "#DDF4F2";
    break;
  case 3:
    boxColor.style.backgroundColor = "#F1D0DE";
    boxColor.style.borderColor = "#C4DFAE";
    boxColor.style.color = "#614323";
    break;
  default:
    boxColor.style.backgroundColor = "black";
    boxColor.style.borderColor = "red";
    boxColor.style.color = "white";
    break;
}
