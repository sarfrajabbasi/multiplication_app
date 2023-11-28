function getElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  } else {
    throw Error("please check the selector");
  }
}
const randomNumber = (n) => Math.floor(Math.random() * n) + 1;

const NUM_1 = randomNumber(100);
const NUM_2 = randomNumber(100);
const ANSWER = NUM_1 * NUM_2;
let score = 0;
console.log(ANSWER);

// element
const QUESTION_EL = getElement("#question");
const FORM_EL = getElement(".form");
const INPUT_EL = getElement("#input");

// use them
QUESTION_EL.textContent = `what is ${NUM_1} multiply by ${NUM_2}`;

// add event

FORM_EL.addEventListener('submit',()=>{
    const USER_ANS  = +(INPUT_EL.value) ;
    if(USER_ANS === ANSWER){
        score++
        console.log(score);
    }else{
        score--
    }
})
console.log(score);