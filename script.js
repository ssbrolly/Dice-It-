'use strict';
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.roll-dice');
const highscore = document.querySelector('.highscore');
// const score1 = document.querySelector('.score-1');
// const score2 = document.querySelector('.score-2');
const hold = document.querySelector('.hold');
// const playerScore = document.querySelector('.player-scor
// const player1 = document.querySelector('.player-1');
// const player2 = document.querySelector('.player-2');

const int = (function () {
	let scores = [0, 0];
	let activePlayer = 0;
	let playerScore = [0, 0];

	const switchPlayer = () => {
		activePlayer = activePlayer === 0 ? 1 : 0;
	};

	hold.addEventListener('click', () => {
		playerScore[activePlayer] += scores[activePlayer];

		document.querySelector(`.player-${activePlayer}`).textContent = playerScore[activePlayer];
		switchPlayer();
	});

	rollDice.addEventListener('click', () => {
		let randomNum = Math.trunc(Math.random() * 6) + 1;

		dice.classList.remove('hidden');
		dice.src = `image/dice-${randomNum}.png`;

		scores[activePlayer] += randomNum;

		document.querySelector(`.score-${activePlayer}`).textContent = scores[activePlayer];
	});
})();
