let displayValue = "0";
let firstNum;
let secondNum;
let firstOperator;
let secondOperator;
let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', handleButtons);
});
let display = document.querySelector("#result");
console.log(display);

function handleButtons(e) {
    // console.log(e);
    console.log(`${e.target.className} >> ${e.target.value}`);
    if (e.target.value == "clear") {
        firstNum = undefined;
        secondNum = undefined;
        firstOperator = undefined;
        secondOperator = undefined;
        displayValue = "0";
        display.textContent = displayValue;

    } else if (e.target.className == "numcell" && firstNum == undefined) {
        firstNum = e.target.value;
        displayValue = firstNum;
        display.textContent = `${displayValue}`;
    } else if (e.target.className == "numcell" && firstNum !== undefined && firstOperator == undefined) {
        firstNum += e.target.value;
        displayValue = firstNum;
        display.textContent = `${displayValue}`;
    } else if (e.target.className == "operator-cell" && firstOperator == undefined) {
        firstOperator = e.target.value;
    } else if (e.target.className == "numcell" && firstNum !== undefined && firstOperator !== undefined && secondNum == undefined) {
        secondNum = e.target.value;
        displayValue = secondNum;
        display.textContent = displayValue;
    } else if (e.target.className == "numcell" && firstNum !== undefined && secondNum !== undefined && firstOperator !== undefined) {
        secondNum += e.target.value;
        displayValue = secondNum;
        display.textContent = displayValue;
    } else if (e.target.value == "=" && firstNum && secondNum && firstOperator) {
        switch(firstOperator) {
            case "-":
                displayValue = subtract(firstNum, secondNum);
                firstNum = displayValue;
                secondNum = undefined;
                firstOperator = undefined;
                display.textContent = `${displayValue}`;
                break;
            case "+":
                displayValue = add(firstNum, secondNum);
                firstNum = displayValue;
                secondNum = undefined;
                firstOperator = undefined;
                display.textContent = `${displayValue}`;
                break;
            case "*":
                displayValue = multiply(firstNum, secondNum);
                firstNum = displayValue;
                secondNum = undefined;
                firstOperator = undefined;
                display.textContent = `${displayValue}`;
                break;
            case "/":
                displayValue = divide(firstNum, secondNum);
                firstNum = displayValue;
                secondNum = undefined;
                firstOperator = undefined;
                display.textContent = `${displayValue}`;
                break;
        }
    } 
    
}
function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2);
} 

function divide(num1, num2) {
    let res = parseFloat(num1) / parseFloat(num2);
    return res;
}
function operate(num1, num2, operator) {
//     if (operator === '/') {
//         // do division
//     } else if (opera) {

//     }
}
