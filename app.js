// var randomNumber1=Math.floor(Math.random()*6)+1 ; 

// var randomDiceImage="dice"+ randomNumber1+".png" ;

// var randomDiceSource="images/"+randomDiceImage ;

// var image1=document.querySelectorAll("img")[0];

// image1.setAttribute("src",randomDiceSource);


// // for image 2
// var randomNumber2=Math.floor(Math.random()*6)+1 ; 
// var randomDiceSource2="images/dice"+randomNumber2+".png" ;

// var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

// // image2.setAttribute("src",randomDiceSource2);

// // logic
// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").textContent=" 🚩player 1 wins!";
// }else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerHTML=" 🚩player 2 wins!";
// }else{
//     document.querySelector("h1").innerHTML="Draw";
// }






document.querySelector("button").addEventListener("click",dice);

function dice(){
    rollDice();
    buttonAnimation();
}







function rollDice(){
    var randomNumber1=Math.floor(Math.random()*6)+1 ; 

var randomDiceImage="dice"+ randomNumber1+".png" ;

var randomDiceSource="images/"+randomDiceImage ;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceSource);


// for image 2
var randomNumber2=Math.floor(Math.random()*6)+1 ; 
var randomDiceSource2="images/dice"+randomNumber2+".png" ;

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

// image2.setAttribute("src",randomDiceSource2);

// logic
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent=" 🚩player 1 wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩player 2 wins!";
}else{
    document.querySelector("h1").innerHTML="Draw";
}

document.querySelector("button").addEventListener("click",rollDice);
}




function buttonAnimation(){
    document.querySelector("button").classList.add("pressed");

    setTimeout(function(){
        document.querySelector("button").classList.remove("pressed");
    },100);
}



document.addEventListener("keypress",spacebar);

function spacebar(event){
    if (event.key === " " || event.key === "Spacebar") {
        event.preventDefault(); // Prevent the default space bar behavior
    rollDice();
    buttonAnimation();
    }
}
