/* Functions and variables */

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.calc-screen');
const operators = document.querySelectorAll('.op');
const floatingPoint = document.querySelector('.floating-point');
const equals = document.querySelector('.equal');

let currentResult;

let firstNumber;
let secondNumber;
let operator;

function calculate(op) {

    switch(op) {
        case 'add': currentResult = firstNumber + secondNumber;
        break;
        case 'substract' : currentResult = firstNumber - secondNumber;
        break;
        case 'multiply' : currentResult = firstNumber * secondNumber;
        break;
        case 'divide' : currentResult = firstNumber / secondNumber;
        break;
    }

}

/*Listeners for the buttons*/

buttons.forEach((c) => {
    c.addEventListener('click', (n) => {

        if (display.textContent === '0') {

            display.textContent = n.target.textContent;
        
        } else if (display.textContent[0] === '.') {

            display.textContent.shift('0')
        
        } else {
            display.textContent += n.target.textContent;
        }

    });
});

operators.forEach((c) => {
    c.addEventListener('click', (n) => {

        operators.forEach((t) => {
            t.style.backgroundColor = 'rgb(228, 56, 13)';
        })

        n.target.style.backgroundColor = 'rgb(17, 211, 211)';

        operator = n.target.id;

        if (firstNumber === null) {

            if (display.textContent.includes('.')) {

                firstNumber = parseFloat(display.textContent);
            
            } else {

                firstNumber = parseInt(display.textContent);

            }

        }  else if (firstNumber !== null && currentResult === null) {
            
             if (display.textContent.includes('.')) {

                secondNumber = parseFloat(display.textContent);
            
            } else {

                secondNumber = parseInt(display.textContent);

            }

                calculate(n.target.id);
                console.log(calculate(n.target.id))

        }
    })  
});

equals.addEventListener('click', () => {
    

    if (currentResult === null) {
        if (display.textContent.includes('.')) {
            secondNumber = parseFloat(display.textContent);
        } else {
            secondNumber = parseInt(display.textContent);
        }

        currentResult = calculate(operator)
        console.log(calculate(operator))
        console.log(currentResult);
    }

    display.textContent = currentResult

    firstNumber = null;
    secondNumber = null;

    operators.forEach((c) => {
        c.style.backgroundColor = 'rgb(228, 56, 13)';
    })

    operator = null;
})

