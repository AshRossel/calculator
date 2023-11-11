const add = (number1, number2) => number1 + number2;
const subtract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (number1, number2) => (number2 == 0) ? 0 : number1 / number2;
const isNumber = (number) => !isNaN(number) ? true : false;
const hasPoint = (number) => (number.indexOf('.') != -1) ? true : false;

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
