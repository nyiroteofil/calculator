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

        n.target.style.backgroundColor = 'grey';

        operator = n.target.id;

        if (firstNumber === null) {
            if (display.textContent.includes('.')) {

                firstNumber = parseFloat(display.textContent);
            
            } else {
                
                firstNumber = parseInt(display.textContent);
            
            }

            console.log(firstNumber)

            display.textContent = '0';
        
        } else {
            if (display.textContent.includes('.')) {

                secondNumber = parseFloat(display.textContent);
            
            } else {
                
                secondNumber = parseInt(display.textContent);
            
            }

            console.log(secondNumber)
            
            console.log(operator);

            currentResult = calculate(operator);

            display.textContent = '0'

            firstNumber = null;
            secondNumber = null;
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

