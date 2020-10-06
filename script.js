function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};



let operatorInput;
const operator = document.querySelectorAll('.operator');
operator.forEach((button) => {
    button.addEventListener('click', () => {
        let x = button.id;
        switch (x) {
            case 'divide':
                operatorInput = '/';
                break;
            case 'multiply':
                operatorInput = '*';
                break;
            case 'subtract':
                operatorInput = '-';
                break;
            case 'add':
                operatorInput = '+';
                break;
        } 
        operateClear()
    })
});

function operate(operator, num1, num2) {
    //call one of the above functions
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
});




