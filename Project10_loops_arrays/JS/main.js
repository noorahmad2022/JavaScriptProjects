function countingToTen(){
    var digit = "";
    var x = 1;
    while (x<11){
        digit +="<br>" +x;
        x++;
    }
    document.getElementById("count").innerHTML=digit;
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet","flute"];
var content="";
var y;
    function forLoop(){
        for (y=0; y<instruments.length; y++){
            content += instruments[y]+"<br>";
        }
        document.getElementById("instrument").innerHTML=content;

    }

function catPic(){
    var catPicture = [];
    catPicture [0] = "Sleeping";
    catPicture [1] = "Playing";
    catPicture [2] = "Eating";
    catPicture [3] = "Purring";

    document.getElementById("array").innerHTML="In this picture, The cat is "+ catPicture[2]+".";
}

function consFunction(){
    const musicalIntrument = {type:"guitar", brand:"Fender", color:"black"};
    musicalIntrument.color = "blue";
    musicalIntrument.price = "$900";

    document.getElementById("constant").innerHTML = "The cost of the "+ musicalIntrument.type + " was "+ musicalIntrument.price;
}

let car = {

    make:"Dodge ",
    model:"Viper ",
    year:"2021 ",
    color:"red ",
    description: function(){
        return "the car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("carObject").innerHTML = car.description();

let num = "";
for(let i=0; i<10; i++){
    if(i===3){break; }
    num += "The number is " + i +"<br>"
}
document.getElementById("break").innerHTML=num;


let num1 = "";
for(let a=0; a<10; a++){
    if(a===3){continue; }
    num1 += "The number is " + a +"<br>"
}
document.getElementById("continue").innerHTML=num1;