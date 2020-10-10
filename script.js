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
    if (+b === 0) {
        alert('Divide by 0? yah Good luck with that')
        return displayNumber = '0'
    } 
    else {
        return displayNumber = +a / +b;
    }
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
            operate(operatorInput, oldNumber, displayNumber);
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
        }
           
        //if operatorInput is not null/undefined/whatever, call...whatever function
    })
});

//
let equalState
//

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    operate(operatorInput, oldNumber, displayNumber);
    operatorInput = null;
    oldNumber = displayNumber
    //displayNumber = '0'
    equalState = 1
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
    //displayNumber === '0' ? numberArray = [] : numberArray = displayNumber.split('');
    if (equalState === 1) {
        displayNumber = '0'
        equalState = 0;
    }
    if (displayNumber === '0') {
        numberArray = [];
    } else if (typeof numberArray === 'string') {
        numberArray = displayNumber.split('');
    } else {
        //let tempDisplayNumber = `'${displayNumber}'`;
        numberArray = displayNumber.toString().split('');
    }
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




