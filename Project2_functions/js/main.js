function printRedText(){
    var str="This is Red text";
    var prn=str.fontcolor("Red");
    document.getElementById("redText").innerHTML=prn;
}

function myFunction (){
    var sentance = "I am learning ";
    sentance += "a lot from this course!";
    document.getElementById("con").innerHTML=sentance;
}

function sumOfTwoNumber(num1, num2){
    return num1 + num2;     // The function returns the product of p1 and p2
}
document.getElementById ("Calculation").innerHTML=sumOfTwoNumber(20, 10);


function additionFunction(){
    var addition = 2 + 8;
    document.getElementById ("math").innerHTML = addition;
}