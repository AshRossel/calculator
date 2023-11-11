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

const addDecimalPoint = function() {
    let lastExpressionPart = display.textContent.split(' ').pop();
        
    if (isNumber(lastExpressionPart) && !hasPoint(lastExpressionPart)) {
        display.textContent += '.';
    }
};

const performCalculation = function(lastExpressionChar) {
    let expressionResult;

    if(isNumber(lastExpressionChar)) {
        let [number1, operator, number2] = display.textContent.split(' ');
        expressionResult = operate(number1, operator, number2);
    }

    if (isNumber(expressionResult)) {
        display.textContent = expressionResult;
    }
};

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

const populateDisplay = function(event) {
    const newValue = event.target.textContent;
    const lastExpressionChar = display.textContent[display.textContent.length - 1];

    if (newValue === 'CLEAR') clearDisplay();
    if (newValue === '.') addDecimalPoint();
    if (newValue === '=') performCalculation(lastExpressionChar);
    if (isNumber(newValue)) addNumber(lastExpressionChar, newValue);
    if (operators.includes(newValue)) addOperator(lastExpressionChar, newValue);
};

const addOperator = function(lastExpressionChar, newOperator) {
    let expressionResult;

    if(isNumber(lastExpressionChar)) {
        let [number1, operator, number2] = display.textContent.split(' ');
        expressionResult = operate(number1, operator, number2);
    }

    if (isNumber(expressionResult)) {
        display.textContent = `${expressionResult} ${newOperator}`;
    } else if (operators.includes(lastExpressionChar)) {
        display.textContent = changeOperator(newOperator);
    } else if (isNumber(lastExpressionChar)) {
        display.textContent += ` ${newOperator}`;
    }
};

const addNumber = function(lastExpressionChar, newNumber) {
    if (display.textContent === '0') {
        display.textContent = newNumber;
    } else if (isNumber(lastExpressionChar) || lastExpressionChar == '.') {
        display.textContent += newNumber;
    } else if (operators.includes(lastExpressionChar)) {
        display.textContent += ` ${newNumber}`;
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

const simulateClick = function(event) {
    let keyPressed = event.key;
    if (keyPressed in keysList) {
        keyPressed = document.querySelector(keysList[keyPressed]);
        keyPressed.click();
    }  
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
