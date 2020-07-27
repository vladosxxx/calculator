import './style.sass';

let numbers, num1, operation, num2

let inputField = document.getElementById("numbers")

function number1(){
    numbers = parseFloat(inputField.value)
    if(numbers === "-")
    {
        return numbers = ''
    }
    return numbers
}
function eraseVal(){
    inputField.value = "";
    inputField.focus();
}
function plus(){
    if(!operation){
        num1 = number1()
    }
    operation = '+';
    eraseVal()
}
function minus(){
    if(!operation && !num1 || num1 === ''){
        num1 = number1()
    }
    if(!num1 || num1 === '' && !operation){
        inputField.value = "-"
    }
    else {
        operation = '-'
        eraseVal()
    }
}
function multiply(){
    if(!operation){
        num1 = number1()
    }
    operation = '*';
    eraseVal()
}
function divide(){
    if(!operation){
        num1 = number1()
    }
    checkNumber(num1)
    num1 = number1()
    operation = '/'
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
document.getElementById('dot').addEventListener('click', () => calcField('.'))

function equal(){
    num2 = number1()
    let equally = eval(num1 + operation + num2)
    console.log(equally)
    equally = equally.toFixed(15) // округляю до 15 знаков после запятой
    equally = parseFloat(equally)
    inputField.value = equally
    if (equally === NaN || equally === undefined)
    {
        reloadAll()
        return 'Error'
    }
    num1 = equally
    return equally
}
function reloadAll(){
    num1 = ""
    operation = ""
    num2 = ""
    inputField.value = "";
    inputField.focus();
}
document.getElementById("c").addEventListener("click", reloadAll);
document.getElementById("equal").addEventListener("click", equal);
