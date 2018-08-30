function whoWon(winner){
	if(winner === 'rock'){
		return "Rock smashes scissors";
	} else if (winner === 'scissors') {
		return "Scissors shred paper";
	} else {
		return "Paper covers rock";
	}
}



function oneRound(playChoice){
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

	var compChoice = choices[Math.floor(Math.random() * (3))];

	var result = document.getElementById('result');
	var score = document.getElementById('score');

Test
	if (compChoice.name === 'rock'){
		compRock++;
	} else if (compChoice.name === 'paper'){
		compPap++;
	} else {
		compScis++;
	}

	console.log("Current count: rock=" + compRock + " paper=" + compPap + " scissors=" + compScis);
end test

	if(compChoice.name === playChoice){
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
	score.innerHTML = "CURRENT SCORE <br/> Player: " + playScore + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer: " + compScore;
}

var compScore = 0;
var playScore = 0;

var rock = document.getElementById('rockButton');
var paper = document.getElementById('paperButton');
var scissors = document.getElementById('scissorsButton');

rock.addEventListener('click', oneRound('rock'), true);

paper.addEventListener('click', oneRound('paper'), true);

scissors.addEventListener('click', oneRound('scissors'), true);

var compRock = 0;
var compPap = 0;
var compScis = 0;


 var all = document.querySelector('body');
all.onclick = function(){
	for(var i = 1; i <= 10000; i++){
		oneRound('rock');
		oneRound('paper');
		oneRound('scissors');
	}
	console.log("Current count: rock=" + compRock + " paper=" + compPap + " scissors=" + compScis);
	compRock = 0;
	compPap = 0;
	compScis = 0;
}