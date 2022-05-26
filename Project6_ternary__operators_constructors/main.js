function voteAge(){
    var age, Can_vote;

    age=document.getElementById("age").value;
    Can_vote=(age<18)? "You are not allowed":"Your are allowed";
    document.getElementById("vote").innerHTML=Can_vote+" to vote."
}