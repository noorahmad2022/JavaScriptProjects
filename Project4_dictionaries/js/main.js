function myDictionary(){
    var animal={
        Spicies:"Dog",
        color:"black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark!"
    };
    delete animal.Sound;
    document.getElementById("dictionary").innerHTML=animal.Sound;
}