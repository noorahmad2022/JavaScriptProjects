
function additionFunction(){
    var addition = 2 + 8;
    document.getElementById ("Math").innerHTML = "2 + 8 = " + addition;
}


function subtractionFunction(num1, num2){
    return num1 - num2;     // The function returns the product of p1 and p2
}
document.getElementById ("substract").innerHTML= "20 - 10 = " + subtractionFunction(20, 10);

function MultiPlyFunction(){
    var Multiply = 2 * 8;
    document.getElementById ("Multiplication").innerHTML = "2 * 8 = " + Multiply;
}

function dividFunction(){
    var divid = 200 / 8;
    document.getElementById ("dividition").innerHTML = "200 /8 = " + divid;
}

function negation_operator(){
    var x=10;
    document.getElementById("Unary").innerHTML= -x;
}

var x=5;
x++;
document.write(x);

window.alert(Math.random()*100);
