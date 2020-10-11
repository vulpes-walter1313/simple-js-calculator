// displayValue should always be a string. this helps convert to either float
//or int depending if it has a decimal.
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
// console.log(display);

function handleButtons(e) {
    // console.log(e);
    // console.log(`${e.target.className} >> ${e.target.value}`);
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
        operate(firstNum, secondNum, firstOperator);
    } else if (e.target.className == "operator-cell" && e.target.value !== "=" && firstOperator && firstNum && secondNum) {
        // console.log('\nSecond operator function called\nBefore values:');
        // console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}, firstOperator: ${firstOperator},\nthe operator called in this function: ${e.target.value}`);
        operate(firstNum, secondNum, firstOperator, e.target.value);
        // console.log('\nAfter operate function:');
        // console.log(`firstNum: ${firstNum}, secondNum: ${secondNum}, firstOperator: ${firstOperator},\nthe operator called in this function: ${e.target.value}`);
        firstOperator == e.target.value;
    }  
    
}
function add(num1, num2) {
    if (num1.includes('.') || num2.includes('.')) {
        return `${(parseFloat(num1) + parseFloat(num2)).toFixed(2)}`;
    } else {
        return `${parseInt(num1) + parseInt(num2)}`;
    }
}

function subtract(num1, num2) {
    if (num1.includes('.') || num2.includes('.')) {
        return `${(parseFloat(num1) - parseFloat(num2)).toFixed(2)}`;
    } else {
        return `${parseInt(num1) - parseInt(num2)}`;
    }
}

function multiply(num1, num2) {
    if (num1.includes('.') || num2.includes('.')) {
        return `${(parseFloat(num1) * parseFloat(num2)).toFixed(2)}`;
    } else {
        return `${parseInt(num1) * parseInt(num2)}`;
    }
} 

function divide(num1, num2) {
    if (num1.includes('.') || num2.includes('.')) {
        return `${(parseFloat(num1) / parseFloat(num2)).toFixed(2)}`;
    } else {
        return `${parseInt(num1) / parseInt(num2)}`;
    }
}

function operate(num1, num2, operator, secondOp) {
    switch(operator) {
        case "-":
            displayValue = subtract(num1, num2);
            firstNum = displayValue;
            secondNum = undefined;
            firstOperator = undefined;
            display.textContent = `${displayValue}`;
            break;
        case "+":
            displayValue = add(num1, num2);
            firstNum = displayValue;
            secondNum = undefined;
            firstOperator = undefined;
            display.textContent = `${displayValue}`;
            break;
        case "*":
            displayValue = multiply(num1, num2);
            firstNum = displayValue;
            secondNum = undefined;
            firstOperator = undefined;
            display.textContent = `${displayValue}`;
            break;
        case "/":
            displayValue = divide(num1, num2);
            firstNum = displayValue;
            secondNum = undefined;
            firstOperator = undefined;
            display.textContent = `${displayValue}`;
            break;
    }
    if (secondOp) {
        firstOperator = secondOp;
    }
}
