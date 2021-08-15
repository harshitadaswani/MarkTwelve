var sides = document.querySelectorAll(".side");
var result = document.querySelector(".output");

var sideA, sideB;

function clickHandler(e) {
  e.preventDefault();
  hide();
  sideA = Number(sides[0].value);
  sideB = Number(sides[1].value);
  var hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
  show("Hypotenuse: ", hypotenuse);
}

function show(text1, text2) {
  result.style.display = "block";
  result.innerText = text1 + text2;
}

function hide() {
  result.style.display = "none";
}

document.addEventListener("submit", clickHandler);
