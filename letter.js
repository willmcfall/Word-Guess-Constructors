// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying 
// character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder 
// (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, 
// updating the stored boolean value to true if it was guessed correctly

var previousGuess = [];
var booleanPreviousGuess = false;

// Letter constructor should be able to either display an underlying  character or a blank placeholder 
// (such as an underscore), depending on whether or not the user has guessed the letter. 
var Letter = function (guessedLetter) {
  this.guessedLetter = guessedLetter;

  var counter = 0;

  for (i = 0; i < previousGuess.length; i++) {
    if (guessedLetter == previousGuess[i]) {
      counter = counter + 1;
    };
  };

  if (counter > 0) {
    booleanPreviousGuess = true;
  }
  else if (counter == 0) {
    booleanPreviousGuess = false;
  };

  if (booleanPreviousGuess == true) {
    console.log("You have already guessed " + guessedLetter + ", please try another letter!");
  }
  else if (booleanPreviousGuess == false) {
    console.log(guessedLetter + ", is a new guess!");
    previousGuess.push(guessedLetter);
    return previousGuess;
  };
};

module.exports = Letter;