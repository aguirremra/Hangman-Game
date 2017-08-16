var charCode, keyPress, wins, lettersGuessed, guessesLeft, message, winsCount, guessesCount, letter, arr;

arr = "";

//get elements
wins = document.getElementById("wins");
lettersGuessed = document.getElementById("lettersGuessed");
randomLetter = document.getElementById("randomLetter");
guessesLeft = document.getElementById("guessesLeft");
message = document.getElementById("message");


resetVariables();l
setVariables();

function setVariables(){
	letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));	
	keyCode = "";
	keyPress = "";
	guessesCount = 12;
	getlettersGuessed();
	arr = [];

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
	if(letter === keyPress){			
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