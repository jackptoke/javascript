let randomNumber = Math.floor(Math.random()*100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let greeting = "Jack Toke";
greeting += " says, 'Hello!'";

function checkGuess(){
    let userGuess = Number(guessField.value);
    //Keep player's guess history
    if (guessCount === 1){
        guesses.textContent = 'Previous guess: ';
    }
    guesses.textContent += userGuess + ' ';

    //if correct guess
    if (userGuess === randomNumber){
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = '';
        setGameOver();
    //if ten attempt has been made
    }else if(guessCount === 10){
        lastResult.textContent = '!!Game Over!!';
        setGameOver();
    
    //if the guess is incorrect
    }else{
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess was too low';
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess was too high';
        }
        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
    
}


guessSubmit.addEventListener('click', checkGuess);

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i=0; i<resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random()*100) + 1;
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New game';
    document.getElementById("container").appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}