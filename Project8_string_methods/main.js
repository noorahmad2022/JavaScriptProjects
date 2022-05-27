function fullSentance(){
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentance.";
    var whole_sentance = part1.concat(part2,part3,part4);
    document.getElementById("concatenate").innerHTML=whole_sentance;
}

function sliceMethod(){
    var Sentennce = "All work and no play makes Johnny a dull boy.";
    var section = Sentennce.slice(27,33);
    document.getElementById("slice").innerHTML=section;
}

function upperCase(){
    var name = "noorahmad";
    var upperName = name.toUpperCase();
    document.getElementById("Para").innerHTML=upperName;
}

function lowerCase(){
    document.getElementById("Para").style.textTransform="lowercase";
}

function capCase(){
    document.getElementById("Para").style.textTransform="capitalize";

}

function Search(){
    var Sname = "Noorahmad Noor";
    var searchName = Sname.search("Noor");
    document.getElementById("Para").innerHTML=searchName;
}

function numStringMethod(){
    var num=250;
    document.getElementById("numToString").innerHTML=num.toString();
}

function precisionMethod(){
    var preNum= 345998.676542327;
    document.getElementById("precision").innerHTML=preNum.toPrecision(10);
}

function toFixe(){
    var preNum= 345998.676547873990;
    document.getElementById("precision").innerHTML=preNum.toFixed();
}
function toFixe1(){
    var preNum= 345998.676547873990;
    document.getElementById("precision").innerHTML=preNum.toFixed(1);
}
function toFixe2(){
    var preNum= 345998.676547873990;
    document.getElementById("precision").innerHTML=preNum.toFixed(2);
}

function valueOf(){
    var student={Name: 'Noorahmad', LastName: 'Noor', RoleNo:'765'};
    document.getElementById("student").innerHTML=student.valueOf();
}