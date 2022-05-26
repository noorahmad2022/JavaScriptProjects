function fullSentance(){
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentance.";
    var whole_sentance = part1.concat(part2,part3,part4);
    document.getElementById("concatenate").innerHTML=whole_sentance;
}