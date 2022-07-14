const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.calc-screen');
const operators = document.querySelectorAll('.op');
const floatingPoint = document.querySelector('.floating-point');
const equals = document.querySelector('.equal');

let currentResult;

let opON = false;

let firstNumber;
let secondNumber;
let operator;

function calculate(op) {
    switch(op) {
        case 'add': return firstNumber + secondNumber;
        break;
        case 'substract' : return firstNumber - secondNumber;
        break;
        case 'multiply' : return firstNumber * secondNumber;
        break;
        case 'divide' : return firstNumber / secondNumber;
        break;
    } 
}

/*Listeners for the buttons*/

buttons.forEach((c) => {
    c.addEventListener('click', (n) => {

        if (display.textContent === '0') {

            display.textContent = n.target.textContent;
            console.log(n.target.textContent);
        
        } else {
            
            display.textContent += n.target.textContent;
            console.log(n.target.textContent);
        
        }

    });
});

operators.forEach((c) => {
    c.addEventListener('click', (n) => {

        operators.forEach((t) => {
            t.style.backgroundColor = 'rgb(228, 56, 13)';
        })

        n.target.style.backgroundColor = 'grey';

        operator = n.target.id;

        opON = true;

        if (firstNumber === null) {
            
            firstNumber = display.textContent;
        
        } else {
            secondNumber = display.textContent;

            currentResult = calculate(operator);

            firstNumber = null;
            secondNumber = null;
        }
    })
});

