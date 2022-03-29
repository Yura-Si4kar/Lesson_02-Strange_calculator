let action = prompt('Hello! What do you want to do (/,+,*,-)?');
let numberOne = +prompt('Write the first number.');
let numberTwo = +prompt('Write the second number.');
const resultPlus = numberOne + numberTwo;
const resultMinus = numberOne - numberTwo;
const resultDivide = numberOne / numberTwo;
const resultMultiply = numberOne * numberTwo;

switch (action) {
    case '+':
        alert(`result ${numberOne} + ${numberTwo} = ${resultPlus}`);
        break;
    case '-':
        alert(`result ${numberOne} - ${numberTwo} = ${resultMinus}`);
        break;
    case '/':
        alert(`result ${numberOne} / ${numberTwo} = ${resultDivide}`);
        break;
    case '*':
        alert(`result ${numberOne} * ${numberTwo} = ${resultMultiply}`);
        break;
     default:
    alert('Wrong Action');
}