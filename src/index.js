function number1(){
    var numbers = document.getElementById("numbers").value;
    numbers = Number.parseInt(numbers);
    return(numbers);
}
const plus = function(){
    number1();
    var plus1 = `${number1()}+`;
    console.log(plus1);
}
document.getElementById("plus").addEventListener("click", plus);

function equal(){
    console.log(plus1);
    var number2 = number1();
    var equally = `${plus}${number2}`;
    console.log(equally);
    return(equally);
}
