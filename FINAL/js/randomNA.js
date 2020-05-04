//JavaScript Final Project: Random Number Guessing Game
//Instructions
// Randomly generate a number from 1-100.
// Prompt the user to guess. Continue the game until the user guesses correctly.
// Include at least two of the following enhancements:
// •	Tell the user whether they are "hot" or "cold" based on proximity to the randomly selected number.
// •	Keep track of numbers which have been guessed, and mock the user when they guess a number for the second time.
// •	Count the number of guesses and return a response based on that number (i.e. 100 tries: "Are you ever going to get this?").



function yourGuess() {
    // To store references to the value and the
    // guesses textarea in local function variables.
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");

    // If the guess is the same, show the answer.
    // Append the result to the textarea.
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "CONGRATS! You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "Your guess is too high. ("+guess+")";
    }  else if (guess > (numToGuess +- 5)) {
            guesses.value = guesses.value + "\r" + "Caliente! ("+guess+")";
    }  else {
        guesses.value = guesses.value + "\r" + "Your guess is too low. ("+guess+")";
    }
}


// Randomly generate a number
function generateNumberToGuess(confirmIt) {
    var guesses = document.getElementById("output");

    guesses.value = '';
    numToGuess = Math.floor(Math.random()*100);
}

function showGuesses(){
    var guesses = document.getElementById('guesses');

}

window.onload = function(){
    generateNumberToGuess();
}
