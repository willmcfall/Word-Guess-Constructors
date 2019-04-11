// Index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

// Creates an array of random movie titles
var WordArray = ["Twister", "Forrest Gump", "Crash", "Green Book", "Birdman", "The Hurt Locker", "Slumdog Millionaire", "No Country for Old Men", "The Departed", "The Shape of Water", "Twelve Years A Slave", "Moonlight", "Spotlight", "Birdman", "Argo", "The Artist", "Argo"];

var misses = 0;

function Run(){

    // draws random word
  
  var wordRandom = WordArray[Math.floor(Math.random() * WordArray.length)];
  
  function Guess(){

    if (misses < 10) {

      // presents random word
      var word = new Word(wordRandom);

      // asks user to guess letter
    
      inquirer.prompt([
        {
          name: "guessedLetter",
          message: "Please guess a letter: ",
          type: "input"
        }
      ]).then(function (answers) {
    
        // checks whether guessed letter in random word
        console.log(answers.guessedLetter);
        var guess = new Letter(answers.guessedLetter);
        // console.log(WordArray);
        Guess();
      });
    
      // addes to missed counter if wrong
    
    }
    else {
      console.log("You lost!");
      inquirer.prompt([
        {
          name: "playAgain",
          message: "Would you like to play again: ",
          type: "choice"
        }
      ]).then(function (answers) {
        if (answers.playAgain == "Yes") {
    
        }
        else if (answers.playAgain == "No") {
          console.log("Ok. Goodbye!");
        };
      });
    };

  }
 
Guess();

}

Run();




