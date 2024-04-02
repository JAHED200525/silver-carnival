// Initialize variables
let low = 1;
let high = 10;
let correctAnswer = Math.floor(Math.random() * (high - low + 1)) + low;
let chances = 3;
let gameOver = false;

function guessNumber() {
    if (!gameOver) {
        let guess = parseInt(document.getElementById("guessInput").value);
        if (isNaN(guess) || guess < low || guess > high) {
            alert("Please enter a valid number between 1 and 10.");
            return;
        }
        chances--;
        document.getElementById("chancesLeft").textContent = chances;

        if (guess === correctAnswer) {
            document.getElementById("result").textContent = "You Win!";
            gameOver = true;
            document.getElementById("restartButton").style.display = "block";
            document.getElementById("guessInput").disabled = true;
        } else {
            if (chances === 0) {
                document.getElementById("result").textContent = "You Lose!";
                gameOver = true;
                document.getElementById("restartButton").style.display = "block";
                document.getElementById("guessInput").disabled = true;
            } else {
                if (guess < correctAnswer) {
                    document.getElementById("hint").textContent = "Correct answer is greater!";
                } else {
                    document.getElementById("hint").textContent = "Correct answer is smaller!";
                }
            }
        }
    }
}

function restartGame() {
    correctAnswer = Math.floor(Math.random() * (high - low + 1)) + low;
    chances = 3;
    gameOver = false;
    document.getElementById("chancesLeft").textContent = chances;
    document.getElementById("hint").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
}
