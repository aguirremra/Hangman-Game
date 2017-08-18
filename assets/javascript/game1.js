var keyPress,
  words,
  keyCode,
  lettersGuessed,
  incorrectGuesses,
  wins,
  losses,
  winsCount,
  wordToGuess,  
  placeHolder,
  totalGuesses,
  guessedWord,
  guessesRemaining,
  lettersAlreadyGuessed;

winsCount = 0;
totalGuesses = 12;
guessesRemaining = 12;
lettersAlreadyGuessed = "";
words = ["pizza", "steak", "salad", "hamburger"];
blanks = document.getElementById("blanks");
guessedWord = document.getElementById("guessedWord");
wins = document.getElementById("wins");
guessesLeft = document.getElementById("guessesLeft");
lettersAlreadyGuessed = document.getElementById("lettersAlreadyGuessed");
wordToGuess = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(wordToGuess);
placeHolder = [];
lettersGuessed = [];

displayWins();
hideWord();

//on key press...
document.onkeyup = function(event) {
  keyPress = event.key.toUpperCase();
  console.log(keyPress);
  keyCode = event.keyCode;
  //if there are guesses left
  if (placeHolder.join("") === wordToGuess) {
    guessedWord.innerHTML = wordToGuess;
    winsCount++;
    displayWins();
  } else {
    //if the key press is valid
    if (validateKeys(keyCode)) {
      console.log("keys are valid");
      guessesRemaining--;
      displayRemaining();
      lettersGuessed.push(keyPress);
      console.log(lettersGuessed);
      lettersAlreadyGuessed.innerHTML = lettersGuessed;
      //if the letter is in the word to guess
      if (wordToGuess.indexOf(keyPress) != -1) {
        console.log("your guess is correct");
        //replace blank with letter pressed
        for (var i = 0; i < wordToGuess.length; i++) {
          if (keyPress === wordToGuess.charAt(i)) {
            console.log(i);
            placeHolder[i] = keyPress;
            displayLetters();
            console.log(placeHolder.join(""));
          }
        }
      }
      //if the key press is not valid
    } else {
      alert("not a valid key");
    }
  }
}


//if word is guessed then
function displayRemaining(){
	guessesLeft.innerHTML = guessesRemaining;
}
function displayWins() {
  wins.innerHTML = "Wins: " + winsCount;
}

function displayLetters() {
  blanks.innerHTML = placeHolder.join(" ");
}
//display placeholders to screen
function hideWord() {
  for (i = 0; i < wordToGuess.length; i++) {
    placeHolder.push("__");
  }
  displayLetters();
}

function validateKeys(keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    return true;
  } else {
    return false;
  }
}