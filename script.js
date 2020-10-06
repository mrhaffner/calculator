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

function operate(operator, num1, num2) {
    //call one of the above functions
};


let displayNumber = '0'
const displayScreen = document.querySelector('#screen');
displayScreen.textContent = displayNumber;


//this function needs to get an input number from the button click
//that input number is then added to the end of a string or maybe array?(array would then need to be joined)
function setDisplayNumber(num) {
    getDisplayNumber(num)
    displayScreen.textContent = displayNumber;
}

function getDisplayNumber(num) {
    let numberArray
    displayNumber === '0' ? numberArray = [] : numberArray = displayNumber.split('');
    numberArray.push(num);
    displayNumber = numberArray.join('');
}




const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setDisplayNumber(button.id)
        console.log(button.id);
    });
});
