var readlineSync = require("readline-sync");
function welcome(){
     var userName=readlineSync.question("What is Your name: ")
     console.log("Welcome "+userName+ "to this quiz ")
}
var score =0;

var questions =[{
  question:"What is my full name ",
  answer:"syed huzaifa"
},
{ question:"Where do I live ",
  answer:"hyderabad" },
{question:"What is My favorite food ",
 answer:"biryani"},
{question:"What do I do ",
 answer:"student"},
{question:"How old am I ",
 answer:"21" }
];


function play(question, answer) {
  var userName=readlineSync.question(question)
  
  if (userName === answer){
    console.log("You are right")
    score=score+1
  }
  else {
    console.log("you are wrong ");
  }
  
  console.log("current score: ", score);
  console.log("-------------")
}

function game(){
  for(var i=0;i<questions.length;i++){
  var questionName=questions[i]
    play(questionName.question,questionName.answer)}
}
function showScores() {
  console.log("YAY! You SCORED: ", score);
}

welcome()
game()
showScores()
