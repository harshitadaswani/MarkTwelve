var angles = document.querySelectorAll(".angle");
var result = document.querySelector(".output");
var arr = [];

function clickHandler(e) {
  e.preventDefault();
  hide();
  for (var i = 0; i < angles.length; i++) {
    arr[i] = Number(angles[i].value);
  }
  console.log(arr);
  let sum = 0;
  for (var j = 0; j < arr.length; j++) {
    sum = sum + Number(arr[j]);
  }
  console.log(sum);
  if (sum === 180) {
    show("Yayyy!!! The entered angles form a triangle");
  } else {
    show("Nayyy!!! The entered triangles do not form a triangle");
  }
}

function show(text) {
  result.style.display = "block";
  result.innerText = text;
}

function hide() {
  result.style.display = "none";
}

document.addEventListener("submit", clickHandler);
