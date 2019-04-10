// Index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var word = require("./word.js");
var axios = require("axios");
var inquirer = require("inquirer");

// Creates an array of Nichols Cage movie titles
var WordArray = [];
function wordSelect() {
    axios
        .get("http://api.tvmaze.com/search/people?q=Nicholas Cage")
        .then(function (response) {
            for (i = 0; i < response.data.length; i++) {
                WordArray = Wordarray + response.data[i].name;
                console.log(response.data[i].name);
            }
        });
};

wordSelect();

var misses = 0;

if (misses < 10) {
// draws random word

// presents random word

// asks user to guess letter
inquirer.prompt([
    {
      name: "guessedLetter",
      message: "Please guess a letter: ",
      type: "input"
    }
]).then(function(answers) {
    // checks whether guessed letter in random word
    var letter = new Letter(answers.guessedLetter);
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
]).then(function(answers) {
    if(answers.playAgain == "Yes"){
    
    }
    else if (answers.playAgain == "No"){
    console.log("Ok. Goodbye!");   
    };
  });
};




