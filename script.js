let currentValue = '';
let currentOperator = '';
let previousValue = '';

function appendValue(value) {
    currentValue += value;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    currentOperator = operator;
    previousValue = currentValue;
    currentValue = '';
    updateDisplay();
}

function appendDecimalPoint() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentValue = '';
    currentOperator = '';
    previousValue = '';
    updateDisplay();
}

function calculate() {
    let result;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = num2;
            break;
    }

    currentValue = result.toString();
    currentOperator = '';
    previousValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentValue;
}
