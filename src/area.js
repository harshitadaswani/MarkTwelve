var sides = document.querySelectorAll(".side");
var result = document.querySelector(".output");

var base, height;

function multiplyBaseAndHeight(b, h) {
  const multipliedOutput = b * h;
  return multipliedOutput;
}

function clickHandler(e) {
  e.preventDefault();
  hide();
  base = Number(sides[0].value);
  height = Number(sides[1].value);
  const basexheight = multiplyBaseAndHeight(base, height);
  const area = basexheight / 2;
  show("Area of Triangle: ", area);
}

function show(text1, text2) {
  result.style.display = "block";
  result.innerText = text1 + text2;
}

function hide() {
  result.style.display = "none";
}

document.addEventListener("submit", clickHandler);
