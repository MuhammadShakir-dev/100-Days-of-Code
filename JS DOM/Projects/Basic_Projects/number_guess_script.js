let randomNo = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('input');
const submit = document.querySelector('.button');
const guessSlot = document.querySelector('.list');
const remGuesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.reultsParas');

const p = document.createElement('p');

let preGuesses = [];
let numGusses = 1;
let playGame = true;

if (playGame) { 
    submit.addEventListener('click', (e) => { 
        e.preventDefault();
        let guess = parseInt(userInput.value);
        guessValidation(guess);
    })
}

function guessValidation(guess) { 
    if (isNaN(guess)) {
        alert(`Enter a valid number`);
    } else if (guess < 1) {
        alert(`Enter a number greator than 1`);
    } else if (guess > 100) {
        alert(`Enter a number less than 100`);
    } else { 
        preGuesses.push(guess);
        if (numGusses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNo}`);
            endGame();
        } else { 
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess) { 
    if (guess === randomNo) {
        displayMessage(`You guess the right no`);
        endGame()
    } else if (guess < randomNo) {
        displayMessage(`Your guess is too low`);
    } else if (guess > randomNo) { 
        displayMessage(`Your guess is too high`);
    }
}

function displayGuess(guess) { 
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGusses++;
    remGuesses.innerHTML = `${11 - numGusses}`;
}

function displayMessage(message) { 
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() { 
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h4 id = "newGame">Start new Game</h4>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() { 
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', () => { 
        randomNo = parseInt(Math.random() * 100 + 1);
        preGuesses = [];
        numGusses = 1;
        guessSlot.innerHTML  = ''
        userInput.removeAttribute('disabled', '');
        startOver.removeChild(p);
        playGame = true;
        remaining.innerHTML = `${11 - numGusses}`;
    })
}


