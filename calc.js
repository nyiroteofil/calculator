/* Functions and variables */

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.calc-screen');
const operators = document.querySelectorAll('.op');
const floatingPoint = document.querySelector('.floating-point');
const equals = document.querySelector('.equal');

let op;

let prev;
let nxt;

let equalPressed = false;
let operatorPressed = false;

    function convert(n) {

        if (n.includes('.')) {

            return parseFloat(n);
        
        } else {
        
            return parseInt(n);
        
        }
    
    }

    function calculate(op, first, second) {

    switch(op) {
        case 'add': return first + second;
        break;
        case 'substract' : return first - second;
        break;
        case 'multiply' : return first * second;
        break;
        case 'divide' : return first / second;
        break;
        default : return op;
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
            
            } else if (equalPressed === true){

                display.textContent = n.target.textContent;

                
                equalPressed = false;

            } else if (operatorPressed === true) {

                display.textContent = n.target.textContent;

                operatorPressed = false;

            } else {

                display.textContent += n.target.textContent;

            }

        });
    });


    operators.forEach((c) => {
        c.addEventListener('click', (n) => {

            operators.forEach((t) => {

                t.style.backgroundColor = 'rgb(228, 56, 13)';
            
            });

            n.target.style.backgroundColor = 'rgb(17, 211, 211)';

            op = n.target.id;

            if (typeof prev === 'undefined') {

                prev = convert(display.textContent);
            
            } else if ( typeof prev !== 'null' && typeof nxt === 'undefined') {
    
                nxt = convert(display.textContent);

                prev = calculate(op, prev, nxt);
            
            } else {

                console.log(prev);

                nxt = convert(display.textContent);

                prev = calculate(op, prev, nxt);
    
            }

            operatorPressed = true;
            display.textContent = prev;
        })  
    });



    equals.addEventListener('click', () => {
        
        if ( typeof prev === 'undefined') {
            
            display.textContent = '0';

        } else {
            
            display.textContent = calculate(op, prev, convert(display.textContent));
        
        }

        equalPressed = true;
        operatorPressed = false;

        prev = undefined;
        nxt = undefined;
        op = undefined
        
        operators.forEach((t) => {

            t.style.backgroundColor = 'rgb(228, 56, 13)';
        
        }); 

    });

