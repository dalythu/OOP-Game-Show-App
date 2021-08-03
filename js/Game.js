/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [new Phrase('Thurston'),
			new Phrase("Mailchimp"),
			new Phrase("Treehouse Learning"),
			new Phrase("A real one"),
			new Phrase("Coding is fun")
		];
		this.activePhrase = null;
	}

	//method presents the game and the randomly selected phrase from phrase array
	startGame() {
		const gameOverlay = document.getElementById('overlay');
		gameOverlay.style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	//method uses random number to choose a phrase from array 
	getRandomPhrase() {
		const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randomPhraseIndex];
	}

	//method removes a life if player guess is incorrect
	removeLife() {
		this.missed += 1;
		const scoreboard = document.querySelector('#scoreboard ol').children;
		scoreboard[this.missed - 1].querySelector('img').src = 'images/lostHeart.png';
		if (this.missed === 5) {
			this.gameOver('lose');
		}
	}

	/*
	method handles primary game logic. 
	This method also handles player interaction with the game via mouse or keyboard. 
	It also checks if the player has won.
	*/
	handleInteraction(button) {
		const letter = button.textContent;
		//const winner = this.checkForWin();
		button.disabled = true;
		if (this.activePhrase.checkLetter(letter)) {
			button.classList.add('chosen'); //add class name
			this.activePhrase.showMatchedLetter(letter);
			const winner = this.checkForWin();
			if (winner) {
				this.gameOver('win');
			}
		} else {
			button.classList.add('wrong'); // add class name
			this.removeLife();
		}
	}

	//method checks if all the letters in a phrase have been entered
	checkForWin() {
		const keyList = document.querySelector('#phrase ul').children;
		let showCharacterCount = 0;
		let spaceCharacterCount = 0;
		for (let i = 0; i < keyList.length; i++) {
			if (keyList[i].classList.contains('show')) {
				showCharacterCount += 1;
			} else if (keyList[i].classList.contains('space')) {
				spaceCharacterCount += 1;
			}
		}
		return (showCharacterCount + spaceCharacterCount) === keyList.length
	}

	//method to reset the game and start again
	resetGame() {
		const keyList = document.querySelector('#phrase ul');
		const keys = document.getElementsByClassName('key');
		const buttonReset = document.getElementById('btn__reset');
		const scoreboard = document.querySelector('#scoreboard ol').children;
		//const heartPng = scoreboard[i].querySelector('img');
		keyList.innerHTML = '';
		for (let i = 0; i < keys.length; i++) {
			keys[i].className = 'key';
			keys[i].disabled = false
		}
		buttonReset.textContent = 'Play Again';
		for (let i = 0; i < scoreboard.length; i++) {
			scoreboard[i].querySelector('img').src = 'images/liveHeart.png';
		}
	}
	
	//method manages the display of you win/lose overlay
	gameOver(gameStatus) {
		const gameOverlay = document.getElementById('overlay');
		const gameOverMessage = document.getElementById('game-over-message');
		const overlay = document.getElementById('overlay');
		const currentOverlayClass = overlay.className;
		document.removeEventListener('keyup', eventHandler);
		gameOverlay.style.display = 'block';
		if (gameStatus == 'lose') {
			gameOverMessage.textContent = 'Game Over';
		} else if (gameStatus === 'win') {
			gameOverMessage.textContent = 'You Win!';
		}
		overlay.classList.replace(currentOverlayClass, gameStatus);
		this.resetGame();
	}
}