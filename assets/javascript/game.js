var red;
var redValue;
var blue;
var blueValue;
var yellow;
var yellowValue;
var green;
var greenValue;
var yourScore = document.getElementById('yourScore');
var targetScore;
var currentScore;




restart();


function addToScore(val) {
 var numberToAdd = parseInt(val);
currentScore = numberToAdd  + currentScore
yourScore.innerHTML = currentScore;
}
function restart() {

yourScore.innerHTML = ""; 
 targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(101, 19);
 currentScore = 0;



red = document.getElementById("red");

 redValue =  getRandomValue(12, 1);

 blue = document.getElementById("blue");

 blueValue = getRandomValue(12, 1);

 yellow = document.getElementById("yellow");

 yellowValue = getRandomValue(12, 1);

 green = document.getElementById("green");

 greenValue = getRandomValue(12, 1);
}







 red.addEventListener('click', function() {

 addToScore(redValue);
 checkPlayerScore();
});

blue.addEventListener('click', function() {

 addToScore(blueValue);
 checkPlayerScore();
});

yellow.addEventListener('click', function() {

 addToScore(yellowValue);
 checkPlayerScore();
});

green.addEventListener('click', function() {

 addToScore(greenValue);
 checkPlayerScore();
});




function getRandomValue (a, b){
 return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
 var playerInt = parseInt(yourScore.innerHTML);
 var targetInt = parseInt(targetScore.innerHTML);
 if (playerInt === targetInt) {
     alert('You win!'); 
     restart();
 } else if (playerInt > targetInt) {
   alert('You lose!'); 
   restart();


   
 }
}

console.log(getRandomValue(10, 4));



