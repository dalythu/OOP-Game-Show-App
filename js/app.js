/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrases = [new Phrase('Thurston'),
	new Phrase("Mailchimp"),
	new Phrase("Treehouse Learning"),
	new Phrase("A real one"),
	new Phrase("Coding is fun")
];
const missed = 0;
const activePhrase = 'null';
const startGameListener = document.getElementById('btn__reset');
const keys = document.getElementsByClassName('key');

//function that manages physical key presses
let eventHandler = function(e) {
	let keyPress = e.key;
	for (let i = 0; i < keys.length; i++) {
		if (keys[i].innerHTML === keyPress) {
			if (keys[i].disabled) {
				continue
			} else {
				game.handleInteraction(keys[i]);
			}
		}
	}
}

//function that starts game when start game is pressed 
startGameListener.addEventListener('click', () => {
	game = new Game(missed, phrases, activePhrase);
	game.startGame();
	document.addEventListener('keyup', eventHandler);
})
for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener('click', (e) => {
		game.handleInteraction(e.target);
	})
}