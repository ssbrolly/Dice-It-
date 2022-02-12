'use strict';
const newGame = document.querySelector('.new-game');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.roll-dice');
const highscore = document.querySelector('.highscore');
const score1 = document.querySelector('.score-0');
const score2 = document.querySelector('.score-1');
const hold = document.querySelector('.hold');
const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');

const playerSection1 = document.querySelector('.player-section-1');
const playerSection2 = document.querySelector('.player-section-2');

let scores = [0, 0];
let activePlayer = 0;
let playerScore = [0, 0];
let playing = false;

const init = function () {
	score1.textContent = 0;
	score2.textContent = 0;
	player1.textContent = 0;
	player2.textContent = 0;
	scores = [0, 0];
	dice.classList.add('hidden');
	activePlayer = 0;
	playerSection1.classList.add('active');
	playerSection2.classList.remove('active');
	playing = true;
};
// init();

const switchPlayer = () => {
	activePlayer = activePlayer === 0 ? 1 : 0;

	playerSection1.classList.toggle('active');
	playerSection2.classList.toggle('active');

	score1.textContent = 0;
	score2.textContent = 0;
	scores = [0, 0];
};

hold.addEventListener('click', () => {
	if (playing) {
		playerScore[activePlayer] += scores[activePlayer];

		document.querySelector(`.player-${activePlayer}`).textContent = playerScore[activePlayer];

		if (playerScore[activePlayer] >= 20) {
			document.querySelector(`.player-${activePlayer}`).textContent = `win`;
			playing = false;
		} else {
			switchPlayer();
			dice.classList.add('hidden');
		}
	}
});

rollDice.addEventListener('click', () => {
	if (playing) {
		let randomNum = Math.trunc(Math.random() * 6) + 1;

		dice.classList.remove('hidden');
		dice.src = `image/dice-${randomNum}.png`;

		if (randomNum === 1) {
			document.querySelector(`.player-${activePlayer}`).textContent = 0;
			switchPlayer();
		} else {
			scores[activePlayer] += randomNum;
		}

		document.querySelector(`.score-${activePlayer}`).textContent = scores[activePlayer];
	}
});

newGame.addEventListener('click', init);
