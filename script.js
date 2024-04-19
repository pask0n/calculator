let onDisplay = [];
let firstOperandArr = [];
let currentOperator = '';
let secondOperandArr = [];
let isOperatorSelected = () => {
    if (currentOperator === '') return false;
    return true;
};
let result = 0;

const display = document.querySelector('#display')
const operandsBtn = document.querySelectorAll('.operand');

operandsBtn.forEach(operand => {
    operand.addEventListener('click', (e) => {
        if (isOperatorSelected()) {
            onDisplay.push(e.target.value)
            secondOperandArr.push(e.target.value)
            display.textContent = onDisplay.join('')
        } else {
            if (firstOperandArr.join('') === 'forNewOperand') {
                firstOperandArr = [];
            }
            onDisplay.push(e.target.value)
            firstOperandArr.push(e.target.value)
            display.textContent = onDisplay.join('')
        }
    })
})

const operatorsBtn = document.querySelectorAll('.operator')

operatorsBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
        currentOperator = e.target.value
        if (firstOperandArr.join('') === 'forNewOperand') {
            firstOperandArr = [];
            firstOperandArr = result.toString().split('')
        }
        onDisplay = [];
    })
})

function operate(firstOperandArr, operator, secondOperandArr) {
    const firstOperand = Number(firstOperandArr.join(''));
    const secondOperand = Number(secondOperandArr.join(''));

    if (operator === '+') return firstOperand + secondOperand;
    if (operator === '-') return firstOperand - secondOperand;
    if (operator === '*') return firstOperand * secondOperand;
    if (operator === '/') return firstOperand / secondOperand;
    if (operator === '%') return (firstOperand / 100) * secondOperand;
}

const equalBtn = document.querySelector('.equals');

equalBtn.addEventListener('click', () => {
    if (
        firstOperandArr.toString() === '' ||
        secondOperandArr.toString() === '' ||  
        currentOperator === ''
        ) return;
    result = operate(firstOperandArr, currentOperator, secondOperandArr);
    display.textContent = result;

    onDisplay = [];
    firstOperandArr = ['forNewOperand']
    secondOperandArr = []
    currentOperator = '';
})