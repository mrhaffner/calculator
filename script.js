function add(a, b) {

    return displayNumber = +a + +b;
};

function subtract(a, b) {
    return displayNumber = +a - +b;
};

function multiply(a, b) {
    return displayNumber = +a * +b;
};

function divide(a, b) {
    return displayNumber = +a / +b;
};

function setOperatorInput () {
    
}

let operatorInput = null;
const operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        let x = button.id;
        if (operatorInput === null) {
            switch (x) {
            case 'divide':
                operatorInput = divide;
                break;
            case 'multiply':
                operatorInput = multiply;
                break;
            case 'subtract':
                operatorInput = subtract;
                break;
            case 'add':
                operatorInput = add;
                break;
            };
            operateClear();
        } else {
            switch (x) {
            case 'divide':
                operatorInput = divide;
                break;
            case 'multiply':
                operatorInput = multiply;
                break;
            case 'subtract':
                operatorInput = subtract;
                break;
            case 'add':
                operatorInput = add;
                break;
            };
            operate(operatorInput, oldNumber, displayNumber);
            operateClear();
        }
           
        //if operatorInput is not null/undefined/whatever, call...whatever function
    })
});


const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    operate(operatorInput, oldNumber, displayNumber);
    operatorInput = null;
    //oldNumber = displayNumber
});
    //or clicking an operator when opretator does not equal undefined/null call operate function

function operate(operatorFunc, num1, num2) {

    operatorFunc(num1, num2);
    //oldNumber = displayNumber;
    //get new display number
    //operatorInput = null;
    return displayScreen.textContent = displayNumber;
    
};

function operateClear() {
    oldNumber = displayNumber;
    displayNumber = '0'
};



let displayNumber = '0';
let oldNumber;
const displayScreen = document.querySelector('#screen');
displayScreen.textContent = displayNumber;


function setDisplayNumber(num) {
    getDisplayNumber(num);
    displayScreen.textContent = displayNumber;
}

function getDisplayNumber(num) {
    let numberArray;
    displayNumber === '0' ? numberArray = [] : numberArray = displayNumber.split('');
    numberArray.push(num);
    displayNumber = numberArray.join('');
}


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setDisplayNumber(button.id);
    });
});


function clearScreen () {
    displayNumber = '0';
    displayScreen.textContent = displayNumber;
};

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    clearScreen();
    operatorInput = null;
});




