// function for use

function getElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  } else {
    throw Error("please check the selector");
  }
}

const randomNumber = (n) => Math.floor(Math.random() * n) + 1;

// store score functions
function UpdateLocalStore() {
  localStorage.setItem("score", JSON.stringify(score));
}

const NUM_1 = randomNumber(10);
const NUM_2 = randomNumber(10);
const ANSWER = NUM_1 * NUM_2;


// element
const QUESTION_EL = getElement("#question");
const FORM_EL = getElement(".form");
const INPUT_EL = getElement("#input");
const SCORE_EL = getElement("#score");

// score 
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
console.log(ANSWER);

SCORE_EL.textContent = `Score:${score}`

// use them
QUESTION_EL.textContent = `what is ${NUM_1} multiply by ${NUM_2}`;

// add event

FORM_EL.addEventListener("submit", () => {
  const USER_ANS = +INPUT_EL.value;
  if (USER_ANS === ANSWER) {
    score++;
    UpdateLocalStore();

  } else {
     score--;
      score = (score < 0)? 0 :score;
    UpdateLocalStore();
  }
});
console.log(score);
