document.write(typeof "Word");
document.write ("</br>");
document.write(typeof 3);
document.write ("</br>");

document.write(10>5);
document.write ("</br>");
document.write(3>5);

document.write ("</br>");
document.write("100"+10);

document.write ("</br>");
document.write((8+2)==10);

document.write ("</br>");
document.write(8==10);



function myNaNFunction(){
    document.getElementById("NaN").innerHTML=0/0;
}

function myNaNFunction1(){
    document.getElementById("NaN1").innerHTML=isNaN('This is a staring')
}

function myNaNFunction2(){
    document.getElementById("NaN2").innerHTML=isNaN('007')
}


var a = 2;
var b = 5;
var c= a + b;
document.getElementById("demonstration").innerHTML = c;

var a = 10;
document.getElementById("demonstration1").innerHTML = (a == 12);

var x = "Noor";
document.getElementById("demo").innerHTML = (x === "Noor");

var c="menu";
var d="menu1";
document.getElementById("demo1").innerHTML=(c===d);

document.write ("</br>");
document.write(5>2 && 10>4);    //If one or both is false, the code will return “false”

document.write ("</br>");
document.write(5>2 || 2>4);    //The || (or) operator works this way

function NOT_Operation (){
    document.getElementById("LogicalOperators").innerHTML=!(5>10);
}