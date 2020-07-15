import './style.sass';
mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

let numbers;
let plus1;
let znak;
let inputField = document.getElementById("numbers")
function number1(){
    numbers = inputField.value
    // numbers = parseFloat(numbers)
    return numbers
}
function eraseVal(){
    inputField.value = "";
    inputField.focus();
}
function plus(){
    plus1 = number1();
    znak = '+';
    eraseVal()
}
function minus(){
    plus1 = number1()
    // if(znak === '+'){ //TODO put it to equal funct
    //     plus1 = "-" + number1()
    //     console.log(plus1)
    //     inputField.value = "-"
    // }
    // else
    if(!plus1){
        inputField.value = "-"
    }
    else {
        znak = '-'
        eraseVal()
    }
}
function multiply(){
    plus1 = number1();
    znak = '*';
    eraseVal()
}
function divide(){
    plus1 = number1();
    znak = '/';
    eraseVal()
}
function calcField(numBut){
    inputField.value += numBut
}
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

document.getElementById('b1').addEventListener('click', () => calcField('1'))
document.getElementById('b2').addEventListener('click', () => calcField('2'))
document.getElementById('b3').addEventListener('click', () => calcField('3'))
document.getElementById('b4').addEventListener('click', () => calcField('4'))
document.getElementById('b5').addEventListener('click', () => calcField('5'))
document.getElementById('b6').addEventListener('click', () => calcField('6'))
document.getElementById('b7').addEventListener('click', () => calcField('7'))
document.getElementById('b8').addEventListener('click', () => calcField('8'))
document.getElementById('b9').addEventListener('click', () => calcField('9'))
document.getElementById('b0').addEventListener('click', () => calcField('0'))

function equal(){
    console.log('plus1: ', plus1)
    console.log('znak: ', znak)

    let equally = eval(plus1 + znak + number1());
    console.log(equally)
    inputField.value = equally;
    return equally;
}
document.getElementById("equal").addEventListener("click", equal);
