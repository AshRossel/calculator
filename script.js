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