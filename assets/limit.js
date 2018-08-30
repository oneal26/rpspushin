function whoWon(winner){
	if(winner === 'rock'){
		return "Rock smashes scissors";
	} else if (winner === 'scissors') {
		return "Scissors shred paper";
	} else {
		return "Paper covers rock";
	}
}

var choices = [
	{
		name: 'rock',
		beats: 'scissors'
	},
	{
		name: 'scissors',
		beats: 'paper'
	},
	{
		name: 'paper',
		beats: 'rock'
	}
]

var compScore = 0;
var playScore = 0;

// var rock = document.getElementById('rockButton');
// var paper = document.getElementById('paperButton');
// var scissors = document.getElementById('scissorsButton');

function oneRound(playChoice){

	var compChoice = choices[Math.floor(Math.random() * (3))];


	var result = document.getElementById('result');
	var score = document.getElementById('score');
	var dabod = document.getElementById('dabod');

	if(compChoice === playChoice){
		result.innerHTML = "The computer chose " + playChoice + ", too. It's a tie!";
	} else if (compChoice.beats === playChoice){
		statement = whoWon(compChoice.name);
		compScore++;
		result.innerHTML = "The computer chose " + compChoice.name + ". " + statement + ", sorry. Computer wins.";
	} else {
		statement = whoWon(playChoice);
		playScore++;
		result.innerHTML = "The computer chose " + compChoice.name + ". " + statement + "! Hurrah! You win!";
	}

	if(compScore < 3 && playScore < 3){
	score.innerHTML = "CURRENT SCORE <br/> Player: " + playScore + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer: " + compScore;
	} else {
	score.innerHTML = "FINAL SCORE! <br/> Player: " + playScore + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer: " + compScore;
	dabod.innerHTML = "<h1>GAME OVER!</h1>"
	}
}

rock.addEventListener("click", function(){ oneRound('rock'); }); 

paper.addEventListener("click", function(){ oneRound('paper'); });

scissors.addEventListener("click", function(){ oneRound('scissors'); });
