let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const messageElement = document.getElementById('message');

    if (userGuess === "") {
        messageElement.textContent = "Please enter a number.";
        messageElement.classList.add("error");
        return;
    }

    guesses++;
    const guess = Number(userGuess);

    if (guess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
        messageElement.classList.add("error");
        messageElement.classList.remove("success");
    } else if (guess > randomNumber) {
        messageElement.textContent = "Too high! Try again.";
        messageElement.classList.add("error");
        messageElement.classList.remove("success");
    } else {
        messageElement.textContent = `Correct! You guessed it in ${guesses} tries.`;
        messageElement.classList.add("success");
        messageElement.classList.remove("error");
    }
}
