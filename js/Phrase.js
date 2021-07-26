/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.phraseSplit = this.phrase.split('');
    }

    addPhraseToDisplay() {
       //phraseSplit = this.phrase.split('');
       phraseSplit.forEach(character => {
           if (character === ' '){
               let spaceCharacter = '<li class="space"> </li>'
               document.getElementById('phrase').querySelector('ul').insertAdjacentHTML('beforeend', spaceCharacter);
            } else {
                let letterCharacter = `<li class="hide letter ${character}">${character},</li>`
                document.getElementById('phrase').querySelector('ul').insertAdjacentHTML('beforeend', letterCharacter);
            }
       })
    }

    checkLetter(guessedLetter) {
            if (this.phrase.split('').includes(guessedLetter)){
                return true;
            }
    }

    showMatchedLetter(matchedLetter) {
        for (let i = 0; i < letters.length; i++) {
            document.getElementsByClassName(matchedLetter)[i].classList.replace('hide', 'show');
        }
    }

}
const test = new Phrase('HI');
console.log(test);