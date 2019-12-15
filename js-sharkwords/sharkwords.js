const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry', 'orange', 'apple', 'banana', 'pineapple', 'kiwi',
  'peach', 'pecan', 'eggplant', 'durian', 'peanut', 'chocolate'
];


let numWrong = 0;

const getSects = document.querySelectorAll('section');

/** Loop over the chars in `word` and create divs. */
const createDivsForChars = (word) => {
  
  const wordContain = getSects[1];
  for (letter of word){
    const newDiv = document.createElement('div');
    newDiv.classList.add(`letter-box`);
    newDiv.classList.add(letter);
    wordContain.append(newDiv);
  }
};


/** Loop over each letter in `ALPHABET` and generate buttons. */
const generateLetterButtons = () => {
  
  const letterButtons = getSects[2];
  for (letter of ALPHABET){
    const newButton = document.createElement('button');
    newButton.innerText = letter;
    letterButtons.append(newButton);
  }
};


/** Set the `disabled` property of `buttonEl` to `true.
 *
 * `buttonEl` is an `HTMLElement` object.
 */
const disableLetterButton = (buttonEl) => {
  const jQueryEl = $(buttonEl); 
  // const targetBtn = document.querySelector('buttonEl');

  // buttonEl.addEventListener('click', (evt) => {
  jQueryEl.attr('disabled', true);
  // })
};


/** Return `true` if `letter` is in the word. */
const isLetterInWord = (letter) => {
  if ($('div').hasClass(letter)){
    return true
  }
};


/** Called when `letter` is in word. Update contents of divs with `letter`. */
const handleCorrectGuess = (letter) => {
    
  for (const div of $('div')){
    if (div.hasClass(letter)){
      div.html(letter);
    } 
  } 
};


/** Called when `letter` is not in word.
 *
 * If the shark gets the person, disable all buttons and show the "play again"
 * message. Otherwise, increment `numWrong` and update the shark image.
 */
const handleWrongGuess = () => {
  // Replace this with your code
};


/** Reset game state. Called before restarting the game. */
const resetGame = () => {
  // Replace this with your code
};



/** This is like if __name__ == '__main__' in Python */

(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
    startGame();
  });
})();
