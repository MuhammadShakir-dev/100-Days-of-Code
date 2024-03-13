# Project Related to DOM
This repository contains basic JS Projects. Including

1. Color Changer Project
2. BMI Calculator Project
3. Guess the number Project
4. Digital Clock Project


## Projects Links
<p>All projects are hosted and live</p>

1. Link 1: 
2. Link 2:
3. Link 3;
4. Link 4;  

## Project 1 Solution Code
```javascript

const btn_One = document.getElementById("grey");
const btn_Two = document.getElementById("white");
const btn_Three = document.getElementById("blue");
const btn_Four = document.getElementById("yellow");
const body = document.querySelector('body');

btn_Four.addEventListener('click', () => {
    let bgColor = btn_Four.id
    body.style.backgroundColor = bgColor;
});

btn_Three.addEventListener('click', () => { 
    let bgColor = btn_Three.id
    body.style.backgroundColor = bgColor;   
})

btn_Two.addEventListener('click', () => { 
    let bgColor = btn_Two.id
    body.style.backgroundColor = bgColor;
})

btn_One.addEventListener('click', () => { 
    let bgColor = btn_One.id
    body.style.backgroundColor = bgColor;
})

```

## Project 2 Solution Code
```javascript

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#result')
  const feedback = document.querySelector('#feedback')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid heigth ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weigth ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is : ${bmi}</span>`
      feedback.innerHTML = `<span>You are Under Weigth</span>`
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI is : ${bmi}</span>`
      feedback.innerHTML = `<span>You are in Normal Range</span>`
    } else {
      results.innerHTML = `<span>Your BMI is : ${bmi}</span>`
      feedback.innerHTML = `<span>You are Over Weigth</span>`
    }
  }
})

```

## Project 3 Solution Code
```javascript

const clock = document.querySelector(".clock");
const button = document.querySelector("button");
let total = 0;

setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

button.addEventListener("click", () => { 
    if (total === 0) { 
        button.style.backgroundColor = "#2f2f2f";
        button.style.color = "white";
        button.innerHTML = "Dark Mode";
        clock.style.backgroundColor = "#2f2f2f";
        clock.style.color = "white"; 
        total = 1;
    } 

    else if (total === 1) { 
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.innerHTML = "Day Mode";
        clock.style.backgroundColor = "white";
        clock.style.color = "black"; 
        total = 0;
    }
})

```

## Project 4 solution code
```javascript

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

```
