var charCode, keyPress, wins, lettersGuessed, guessesLeft, message, winsCount, guessesCount, letter, wordToGuess, blanks, arr, blankSpaces;

arr = "";
blanks = "";

//get elements
wins = document.getElementById("wins");
lettersGuessed = document.getElementById("lettersGuessed");
randomLetter = document.getElementById("randomLetter");
guessesLeft = document.getElementById("guessesLeft");
message = document.getElementById("message");
blanks = document.getElementById("blanks");


resetVariables();
setVariables();

function setVariables(){
	wordToGuess = "Disneyland";	
	keyCode = "";
	keyPress = "";
	guessesCount = 12;
	getlettersGuessed();
	arr = [];
	blankSpaces = [];
	
	for(i = 0; i < wordToGuess.length; i++){
		blankSpaces.push("_");
	}
	blanks.innerHTML = "Word to Guess   " + blankSpaces.join(" ");

}
function resetVariables(){	
	winsCount = 0;
	getWinsCount();
}

function getWinsCount(){
	wins.innerHTML = "Wins: " + winsCount; 
}
function getlettersGuessed(){
	lettersGuessed.innerHTML = "Letters so far: " + arr;
}
function getGuessesCount(){
	guessesLeft.innerHTML = "Guesses Left: " + guessesCount;
}	

document.onkeyup=function(event){
    keyPress = event.key;
    keyCode = event.keyCode;
    if(validateKeys(keyCode)){
    	arr.push(keyPress);
    	getlettersGuessed();
	    	if(checkWinsLosses(keyPress)){
		    	getWinsCount();
		    	setVariables();
	    	}else{
		    	guessesCount--;
		    	getGuessesCount();
		    	checkGuesses(guessesCount);
	    	} 	
    } else{
    	setVariables();
    }  
}
function checkGuesses(count){
		if(count === 0){
			lossesCount++;
			getLossesCount();
			getGuessesCount();
			setVariables();
		}
}

function checkWinsLosses(keyPress){
	var letterIndex = wordToGuess.indexOf(keyPress);
	console.log(letterIndex);
	
	if(letterIndex >= 0){			
		winsCount++;
		return true;
	}else{
		return false;
	}
}
function validateKeys(keyCode){
	if(keyCode > 64 && keyCode < 91){
		return true;
    } else{
    	return false;
    }
}