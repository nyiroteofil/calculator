/* Functions and variables */

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.calc-screen');
const operators = document.querySelectorAll('.op');
const floatingPoint = document.querySelector('.floating-point');
const equals = document.querySelector('.equal');
const clear = document.querySelector('#clear');

let prevOP;
let op;

let prev;
let nxt;

let equalPressed = false;
let operatorPressed = false;
let floatPressed = false;

function convert(n) {

    if (n.includes('.')) {

        return parseFloat(n);

    } else {

        return parseInt(n);

    }

}

function calculate(op, first, second) {

    switch (op) {
        case 'add': return first + second;
            break;
        case 'substract': return first - second;
            break;
        case 'multiply': return first * second;
            break;
        case 'divide': return first / second;
            break;
        default: return op;
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

        } else if (equalPressed === true) {

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

        } else if (typeof prev !== 'null' && typeof nxt === 'undefined') {

            nxt = convert(display.textContent);

            prev = calculate(prevOP, prev, nxt);

            display.textContent = prev;

        } else {

            console.log(prev);

            nxt = convert(display.textContent);

            prev = calculate(prevOP, prev, nxt);

            display.textContent = prev;

        }

        operatorPressed = true;
        floatPressed = false;

        prevOP = op;
    })
});

clear.addEventListener('click', () => {

    prevOP = undefined;
    op = undefined;

    prev = undefined;
    nxt = undefined;

    equalPressed = false;
    operatorPressed = false;
    floatPressed = false;

    display.textContent = '0';

});

equals.addEventListener('click', () => {

    if (typeof prev === 'undefined') {

        display.textContent = '0';

    } else {

        display.textContent = calculate(op, prev, convert(display.textContent));

    }

    equalPressed = true;
    operatorPressed = false;
    floatPressed = false,

        prev = undefined;
    nxt = undefined;
    op = undefined

    operators.forEach((t) => {

        t.style.backgroundColor = 'rgb(228, 56, 13)';

    });

});

floatingPoint.addEventListener('click', () => {

    if (floatPressed === false) {

        display.textContent += '.';

    }

    floatPressed = true;

})