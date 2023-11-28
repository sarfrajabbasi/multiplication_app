function getElement(selector){
    const element = document.querySelector(selector);

    if(element){
        return element
    }else{
        throw Error('please check the selector')
    }
}
const  randomNumber = (n)=>Math.floor(Math.random()*n)+ 1;

const NUM_1 = randomNumber(100);
const NUM_2 = randomNumber(100)
const ANSWER = NUM_1 * NUM_2;
const QUESTION_EL = getElement("#question")
QUESTION_EL.textContent = `what is ${NUM_1} multiply by ${NUM_2}`

console.log(ANSWER);
