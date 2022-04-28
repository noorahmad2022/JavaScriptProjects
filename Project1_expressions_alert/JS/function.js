function myFirstFunction(){         // myFirstFunction is the fuction name, we can use it on event action
    var str = "This is my Blue text"; // this text will display on HTML elements ID "blueText"
    var noor = str.fontcolor("blue"); // change the color of str variable
    document.getElementById("blueText").innerHTML=noor; //apply the result to element.
}

function printText(){
    var str="This is Simple Text";
    var result = str.fontcolor("Red");
    document.getElementById("prntxtRed").innerHTML=result;
}
