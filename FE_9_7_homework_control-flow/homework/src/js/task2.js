'use strict'

function randomFunc(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

function textPrompt(minNumber, maxNumber, attemptsLeft, totalPrize, possiblePrize) {
     return prompt(
		'Enter a number from ' + minNumber + ' to ' + maxNumber + '\n' +
        'Attempts left: ' + attemptsLeft + '\n' +
        'Total prize: ' + totalPrize + '$ \n' +
        'Possible prize on current attempt: ' + possiblePrize + '$');
}

if (confirm('Do you want to play a game?')) {
    guessingGame();
} else {
    alert('You did not become a millionaire, but could.');
}


function guessingGame() {
	let one = 1,
		two = 2,
		three = 3,
		minNumber = 1,
		maxNumber = 5,
		prize = { 1: 2, 2: 5, 3: 10 },
		numberComputer = randomFunc(minNumber, maxNumber),
		totalPrize = 0,
		attemptsLeft = 3,
		possiblePrize = prize[attemptsLeft];
	
	for (attemptsLeft; attemptsLeft > 0; attemptsLeft--) {
	let bet = Number(textPrompt(minNumber, maxNumber, attemptsLeft, totalPrize, possiblePrize));
		if (bet === numberComputer) {
			numberComputer = randomFunc(minNumber, maxNumber);
			totalPrize += prize[attemptsLeft];
			prize [three] = 30;
			prize[two] = 15;
			prize[one] = 7;
			maxNumber *= 2;
			possiblePrize = prize[3] + totalPrize;
			attemptsLeft = 4;
		
		if (!confirm('Congratulation! Your prize is: ' + totalPrize + '$ Do you want to continue the game?')) {
			newGame(totalPrize);
		} else {
			let prizeInNextRound= attemptsLeft;
			prizeInNextRound--;
			possiblePrize = prize[prizeInNextRound] + totalPrize;
		}
	}
	
    if (!attemptsLeft) {
		newGame(totalPrize);
	}
}
}

function newGame(totalPrize) {
	if (confirm('Thank you for the game. Your prize is: ' + totalPrize + '$' + '\n' +
				'Do you want to play again?')) {
		guessingGame();
	}
}