const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let correctAnswer = "";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = "";
let correctAnswers = "Sally Ride";
let candidateAnswers ="";


function askForName() {}
//just some comments
// TODO 1.1b: Ask for candidate's name //
candidateName = input.question("what is your name? ");
console.log("Hello are you ready for a space quiz:  " + candidateName)
function askQuestion() {}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //}
candidateAnswers = input.question("Who was the first woman in space? ");

function gradeQuiz(candidateAnswers) {}
if (candidateAnswers === correctAnswers ) {
  console.log("Heck yeah! you got it correct");
} else {
  console.log("Sorry that answer is incorrect");
}
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//just an update


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;

function runProgram() {
  askForName();

  // TODO 1.1c: Greet candidate using their name //
console.log("Hello: " + candidateName); 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
//console.log("Hello : " + " " + candidateName);
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};