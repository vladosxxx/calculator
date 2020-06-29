import './style.sass';

let numbers;
let plus1;
let znak;
function number1(){
    numbers = document.getElementById("numbers").value;
    numbers = Number.parseFloat(numbers);
    return numbers;
}
function eraseVal(){
    document.getElementById("numbers").value = "";
}
function plus(){
    plus1 = number1();
    znak = '+';
    eraseVal()
}
function minus(){
    plus1 = number1();
    znak = '-';
    eraseVal()
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
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
function equal(){
    let equally = eval(plus1 + znak + number1()); 
    document.getElementById("numbers").value = equally;
    return equally;
}
document.getElementById("equal").addEventListener("click", equal);
