const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("Add");
const subtractBtn = document.getElementById("Subtract");
const multiiplyBtn = document.getElementById("Multiply");
const divideBtn = document.getElementById("Divide");

const currentResultOutput = document.getElementById("current-result-output");
const calcDescription = document.getElementById("calculationDescription");
let currentResult = 0;

function getUserInput(){
    return parseInt(userInput.value);
}

function outPutResult(result, text){
    currentResultOutput.textContent = result;
    calcDescription.textContent =text;
}
function createOutPut(operator, resultBefore, Operand){
    const description = `${resultBefore} ${operator} ${Operand}`;
    outPutResult(currentResult,description);
}
//add function
function Add(){
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult = currentResult + enteredNumber;
    createOutPut('+',initialNumber,enteredNumber);
}
//subtract
function Subtract(){
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult = currentResult - enteredNumber;
    createOutPut('-',initialNumber,enteredNumber);
}
//multiply
function Multiply(){
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult = currentResult * enteredNumber;
    createOutPut('*',initialNumber,enteredNumber);
}
//divide
function Divide(){
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult = currentResult / enteredNumber;
    createOutPut('/',initialNumber,enteredNumber);
}

addBtn.addEventListener('click',Add);
subtractBtn.addEventListener('click',Subtract);
multiiplyBtn.addEventListener('click',Multiply);
divideBtn.addEventListener('click', Divide);