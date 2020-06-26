let numbers;
let plus1;
let znak;
function number1(){
    numbers = document.getElementById("numbers").value;
    numbers = Number.parseFloat(numbers);
    return numbers;
}
function plus(){
    plus1 = number1();
    znak = '+';
}
function minus(){
    plus1 = number1();
    znak = '-';
}
function multiply(){
    plus1 = number1();
    znak = '*';
}
function divide(){
    plus1 = number1();
    znak = '/';
}
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
function equal(){
    let equally = eval(plus1 + znak + number1()); 
    console.log(equally);
    return equally;
}
document.getElementById("equal").addEventListener("click", equal);
