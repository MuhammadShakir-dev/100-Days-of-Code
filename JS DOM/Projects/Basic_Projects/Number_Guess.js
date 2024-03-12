let randomNo = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector(".button");
const userInput = document.querySelector("input");
const guessSlot = document.querySelector(".list");
const remaining = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".reultsParas");

const p = document.createElement('p');

let preGuesses = [];
let numGusses = 1;
let playGame = true;

if (playGame) { 
    submit.addEventListener("click", (e) => { 
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) { 
    if (isNaN(guess)) {
        alert("Enter a valid Number");
    } else if (guess < 1) {
        alert("Please enter a number greator than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
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
        displayMessage(`You guessed it rigth`);
        endGame();
    } else if (guess < randomNo) {
        displayMessage(`Number is too loo`);
    } else if (guess > randomNo) { 
        displayMessage(`Number is to high`);
    }
}

function displayGuess(guess) { 
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGusses++;
    remaining.innerHTML = `${11 - numGusses}`;

}

function displayMessage(message) { 
    lowOrHi.innerHTML = `<h2>${message}</h2>`    
}

function newGame() {
    const newGameButtton = document.querySelector('#newGame');
    newGameButtton.addEventListener('click', () => {
        randomNo = parseInt(Math.random() * 100 + 1);
        preGuesses = [];
        numGusses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGusses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
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