var quizForm = document.querySelector(".form-quiz");
var qList = document.querySelectorAll(".qa");
var points = document.querySelector(".showScore");
var submitBtn = document.querySelector("#submit-quiz");

var rightAns = [
  "option1",
  "option2",
  "option1",
  "option1",
  "option1",
  "option2",
  "option2",
  "option3",
  "option3",
  "option3"
];
var score = 0;

function clickHandler(e) {
  e.preventDefault();
  var data = new FormData(quizForm);
  let i = 0;
  for (var entry of data) {
    if (entry[1] === rightAns[i]) {
      qList[i].style.backgroundColor = "lightgreen";
      score++;
    } else {
      qList[i].style.backgroundColor = "red";
    }
    i++;
  }
  show(score);
}

function show(text) {
  points.style.display = "block";
  points.innerText = text;
  submitBtn.style.display = "none";
}

quizForm.addEventListener("submit", clickHandler);
