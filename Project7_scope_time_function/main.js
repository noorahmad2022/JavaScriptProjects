if (1<2){
    document.write("The left number is smaller than the number on the right");
}

function getDate(){
    document.getElementById("date").innerHTML=Date();
}

function get_date(){

    if(new Date().getHours()<18){
        document.getElementById("hour").innerHTML="How are you today?"
    }
}

var number = 1;

function increaseNumber(){
    document.getElementById("num").innerHTML=number;
    number=number+1;
    if (number>10){
        alert("you reached number 10");
        return;
    }
}

function ageFunction(){
    age = document.getElementById("Age").value;
    if (age>=18){
        Vote="Your are old enough to Vote!";
    }
    else
    {
        Vote="You are not old enough to Vote!";
    }
    document.getElementById("how_old_are_you?").innerHTML=Vote;
}

function timeFunction(){
    var myDate = new Date();
    var hrs = myDate.getHours();
    var Reply;

    if (hrs < 12){
        Reply = 'Good Morning';
    }
    else if(hrs>=12 && hrs<=1){
        Reply = "Good afternoon";
    }
    else if(hrs>=17 && hrs<=24){
        Reply = "Good Evening";
    }
    document.getElementById("lblGreetings").innerHTML= Reply + ", and Welcome to my JavaScript";
}