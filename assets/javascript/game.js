var keyPress,
  words,
  keyCode,
  lettersGuessed,
  wins,
  losses,
  winsCount,
  wordToGuess,  
  placeHolder,
  guessedWord,
  guessesRemaining,
  lettersAlreadyGuessed,
  audioword,
  image;

words = ["incubus", "cake", "madonna"];

//get elements
  blanks = document.getElementById("blanks");
  guessedWord = document.getElementById("guessedWord");
  wins = document.getElementById("wins");
  guessesLeft = document.getElementById("guessesLeft");
  lettersAlreadyGuessed = document.getElementById("lettersAlreadyGuessed");
  image = document.getElementById("myimage");

resetVariables();
setVariables();

function setVariables(){
  wordToGuess = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log(wordToGuess);
  keyCode = "";
  keyPress = "";
  audioword = "";
  guessesRemaining = 8;  
  placeHolder = [];
  lettersGuessed = [];
  hideWord();
  displayWins();
  displayRemaining();
  getLettersGuessed();
}

function resetVariables(){
  winsCount = 0;
}

//on key press...
document.onkeyup = function(event) {
  keyPress = event.key.toUpperCase();
  keyCode = event.keyCode;
    //if the key press is valid
    if (validateKeys(keyCode)) {
      //if the letter is in the word to guess
      if (wordToGuess.indexOf(keyPress) != -1) {
        //replace blank with letter pressed
        for (var i = 0; i < wordToGuess.length; i++) {
          if (keyPress === wordToGuess.charAt(i)) {
            placeHolder[i] = keyPress;
            displayLetters();
          }
        }
          //has the word been guessed yet?
          if (placeHolder.join("") === wordToGuess) {
            displayGuessedWord();
            audioword = wordToGuess;
            playAudio(audioword);
            setImage(audioword);
            winsCount++;
            setVariables();
        }

      }else{
        if(lettersGuessed.indexOf(keyPress) === -1){
          if(guessesRemaining === 0){
            alert("Go ahead and try again.");
            setVariables();
            return;
          }
          else{
            guessesRemaining--;
            displayRemaining();
            lettersGuessed.push(keyPress);
            getLettersGuessed();
          }
        }
      }
      //if the key press is not valid
    } else {
      alert("not a valid key");
    }
  }
  if(guessesRemaining === 0){
  alert("Game is over");
  setVariables();
  }

function displayGuessedWord(){
  guessedWord.innerHTML = wordToGuess;
}
function getLettersGuessed(){
  lettersAlreadyGuessed.innerHTML = lettersGuessed;
}

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
function playAudio(audioword){ 
    aud = new Audio("assets/audio/" + audioword + ".mp3");
        aud.play();
        console.log('aud', aud);
  }
function setImage(audioword){
  image.src = "assets/images/" + audioword + ".jpeg";
  console.log('image.src', image.src);
}