/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
		//this.phraseSplit = this.phrase.split('');
	}

    //method to display selected phrase which is then spit into divividual characters before being added to the DOM
	addPhraseToDisplay() {
		const splitPhrase = this.phrase.split('');
		const phraseContainer = document.getElementById('phrase');
		splitPhrase.forEach(character => {
			let spaceCharacter = '<li class="space"> </li>'
			let letterCharacter = `<li class="hide letter ${character}">${character}</li>`
			if (character === ' ') {
				phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', spaceCharacter);
			} else {
				phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', letterCharacter);
			}
		})
	}

    //method that checks the player's glessed letter and checks it against the split phrase 
	checkLetter(guessedLetter) {
		const splitPhrase = this.phrase.split('');
		if (splitPhrase.includes(guessedLetter)) {
			return true;
		}
	}
    
    //method that displays the letter if correct
	showMatchedLetter(matchedLetter) {
		const letters = document.getElementsByClassName(matchedLetter);
		for (let i = 0; i < letters.length; i++) {
			letters[i].classList.replace('hide', 'show');
		}
	}
}