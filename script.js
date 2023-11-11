const add = (number1, number2) => number1 + number2;
const subtract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (number1, number2) => (number2 == 0) ? 0 : number1 / number2;
const isNumber = (number) => !isNaN(number) ? true : false;
const hasPoint = (number) => (number.indexOf('.') != -1) ? true : false;
const changeOperator = (newOperator) => display.textContent.slice(0, -1) + newOperator;
const removeDisplayChar = (charNumbers) => display.textContent.slice(0, -charNumbers);

const hasDecimalNumber = function(number) {
    return (number != undefined && number % 1 !== 0) ? true : false;
}

const operate = function(number1, operator, number2) {
    let expressionResult;
    if (operator === '+') expressionResult = add(+number1, +number2);
    if (operator === '-') expressionResult = subtract(number1, number2);
    if (operator === 'x') expressionResult = multiply(number1, number2);
    if (operator === '÷') expressionResult = divide(number1, number2);

    if (isNumber(expressionResult)) {
        return (hasDecimalNumber(expressionResult)) ? expressionResult.toFixed(2) : expressionResult;
    }
};

const clearDisplay = function() {
    if (display.textContent.length === 1) {
        display.textContent = '0';
    // Check if display text has space before the last charactere
    } else if (display.textContent.slice(-2)[0] == ' ') {
        display.textContent = removeDisplayChar(2);
    } else {
        display.textContent = removeDisplayChar(1);
    }
};

const cancelClearAllDisplay = function() {
    clearTimeout(clearAllButton);
};

const clearAllDisplay = function() {
    clearAllButton = setTimeout(() => {display.textContent = '0';}, 1000);
};

const keysList = {
    1: ".button-1",
    2: ".button-2",
    3: ".button-3",
    4: ".button-4",
    5: ".button-5",
    6: ".button-6",
    7: ".button-7",
    8: ".button-8",
    9: ".button-9",
    0: ".button-0",
    "+": ".button-add",
    "-": ".button-subtract",
    "/": ".button-divide",
    "÷": ".button-divide",
    "x": ".button-multiply",
    "*": ".button-multiply",
    "=": ".button-equal",
    ".": ".button-decimal",
    Enter: ".button-equal",
    Backspace: ".button-clear",
};

let clearAllButton;
const operators = ['+', '-', 'x', '÷'];
const display = document.querySelector('.display');
const allButtons = document.querySelectorAll('button');
const clearButton = document.querySelector('.button-clear');

document.addEventListener('keydown', simulateClick);
clearButton.addEventListener('mousedown', clearAllDisplay);
clearButton.addEventListener('mouseup', cancelClearAllDisplay);
allButtons.forEach(button => button.addEventListener('click', populateDisplay));
