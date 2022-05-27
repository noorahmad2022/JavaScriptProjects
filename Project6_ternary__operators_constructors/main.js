function voteAge(){
    var age, Can_vote;

    age=document.getElementById("age").value;
    Can_vote=(age<18)? "You are not allowed":"Your are allowed";
    document.getElementById("vote").innerHTML=Can_vote+" to vote."
}

function Group(){
    var group, result;

    group=document.getElementById("group").value;

    if(group<=7){
        document.getElementById("groupResult").innerHTML= "Group C";

    }
    else if(group>7 && group<=18){
        document.getElementById("groupResult").innerHTML= "Group B";

    }
    else if(group>18 && group<=35){
        document.getElementById("groupResult").innerHTML= "Group A";

    }

    else
    document.getElementById("groupResult").innerHTML= "Your age not matched to any group.";



}