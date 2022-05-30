function colorFunction(){
    var colorOutput;
    var Colors = document.getElementById("colorInput").value;
    var colorString = " is a great color!";

    switch(Colors){
        case "Red":
            colorOutput = "Red" + colorString;
        break;

        case "Yellow":
            colorOutput = "Yellow" + colorString;
        break;

        case "Green":
            colorOutput = "Green" + colorString;
        break;

        case "Blue":
            colorOutput = "Blue" + colorString;
        break;

        case "Pink":
            colorOutput = "Pink" + colorString;
        break;

        case "Purple":
            colorOutput = "Purple" + colorString;
        break;
        default:
            colorOutput="Please enter a color excatly as written on the above list. ";

    }
    document.getElementById("outPut").innerHTML=colorOutput;

}

function helloFunction(){
    var a = document.getElementsByClassName("click");
    a[0].innerHTML="The text has changed!";
    a[1].innerHTML="Noor";

}

function can(){
    var a = document.getElementById("myCanvas");
    var atx = a.getContext("2d");
    var myGradient = atx.createLinearGradient(0,0,0,100);
    myGradient.addColorStop(0, "yellow");
    myGradient.addColorStop(1, "white");
    atx.fillStyle = myGradient;
    atx.fillRect(0, 0, 200, 100);
    atx.font = "30px Arial";
    atx.strokeText("Noorahmad",10,50);



}

function copyCanvas(){
    var c = document.getElementById("picCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("jsLogo");
    ctx.drawImage(img,10,10);
}

