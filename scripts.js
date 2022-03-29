let action = prompt('Hello! What do you want to do (/,+,*,-)?');
let numberOne = +prompt('Write the first number.');
let numberTwo = +prompt('Write the second number.');

switch (action) {
    case '+':
        alert (numberOne + numberTwo);
        break;
    case '-':
        alert (numberOne - numberTwo);
        break;
    case '/':
        alert (numberOne / numberTwo);
        break;
    case '*':
        alert(numberOne * numberTwo);
        break;
     default:
    alert('Wrong Action');
}