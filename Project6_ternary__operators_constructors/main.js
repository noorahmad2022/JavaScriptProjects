function voteAge(){
    var age, Can_vote;

    age=document.getElementById("age").value;
    Can_vote=(age<18)? "You are not allowed":"Your are allowed";
    document.getElementById("vote").innerHTML=Can_vote+" to vote."
}


function countFunction (){
    document.getElementById("Nested_Function").innerHTML=count();
    function count(){
        var starting_point = 9;
        function plus_one() {starting_point +=1;}
        plus_one();
        return starting_point;
    }
}