var areaCalBlock = document.querySelectorAll(".area-block");
var options = document.querySelectorAll(".radio");
var result = document.querySelectorAll(".output");

var inputInOption1 = document.querySelectorAll(".inputInOption1");
var inputInOption2 = document.querySelectorAll(".inputInOption2");
var inputInOption3 = document.querySelectorAll(".inputInOption3");

var errorDiv = document.querySelector(".error");
var optionOne = document.getElementById("Option1");
var optionTwo = document.getElementById("Option2");
var optionThree = document.getElementById("Option3");
var calculate = document.querySelectorAll(".submit");

document.addEventListener("continue", clickHandler);

function clickHandler(e) {
  e.preventDefault();
  optionThree.classList.add("hidden");
  optionOne.classList.add("hidden");
  optionTwo.classList.add("hidden");

  if (options[0].checked) {
    optionOne.classList.remove("hidden");
    calculate[0].addEventListener("click", optionOneCalculate);
  } else if (options[1].checked) {
    optionTwo.classList.remove("hidden");
    calculate[1].addEventListener("click", optionTwoCalculate);
  } else if (options[2].checked) {
    optionThree.classList.remove("hidden");
    calculate[2].addEventListener("click", optionThreeCalculate);
  }
}
