var playerScore = 0;
var compScore = 0;

function oneRound(playChoice){
	var choices = [
		{
			name: "rock",
			beats: "scissors"
		},
		{
			name: "scissors",
			beats: "paper"
		},
		{
			name: "paper",
			beats: "rock"
		}
	]

	// var choices = ["rock", "paper", "scissors"]


	var compChoice = choices[Math.floor(Math.random() * 3)];


	console.log(playChoice);
	console.log("Computer chose:" + compChoice.name);

	if (compChoice == playChoice) {
		//tie
	} else if (compChoice == "rock" && playChoice == "scissors") {
		//computer wins
	} else if (compChoice == "rock" && playChoice == "paper"){
		//player wins
	} else if (compChoice == "paper"){
		if (playChoice == "rock") {
			//computer wins
		} else {
			//player wins
		}
	} else { // we know that the computer chose "scissors" if it gets this far
		if (playChoice == "paper") {
			//computer wins
		} else {
			//player wins
		}
	}

	if (playChoice == compChoice.name) {
		document.getElementById('result').innerHTML = "Draw";
	} else if (playChoice == compChoice.beats) {
		compScore += 1;
		document.getElementById('result').innerHTML = "The computer chose " + compChoice.name + ", sorry. Computer wins.";
	} else {
		playerScore += 1;
		document.getElementById('result').innerHTML = "The computer chose " + compChoice.name + ". Player wins.";
	}

	document.getElementById('score').innerHTML = "<em>Player Score: " + playerScore + " || Computer Score: " + compScore + "</em";

}


document.getElementById('rockButton').onclick = function(){
	oneRound('rock');
}

document.getElementById('paperButton').onclick = function(){
	oneRound('paper');
}

document.getElementById('scissorsButton').onclick = function(){
	oneRound('scissors');
}

