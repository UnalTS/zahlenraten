let secretNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;
let gameOver = false;
let lowGuesses = [];
let highGuesses = [];

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const triesText = document.getElementById("tries");
const lowGuessesText = document.getElementById("lowGuesses");
const highGuessesText = document.getElementById("highGuesses");

function handleGuess() {
  if (gameOver) return;

  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Bitte eine Zahl von 1 bis 100 eingeben.";
    return;
  }

  tries++;
  triesText.textContent = tries;

  if (guess === secretNumber) {
    message.textContent = `Richtig! Du hast ${tries} Versuche gebraucht.`;
    gameOver = true;
  } else if (guess < secretNumber) {
    lowGuesses.push(`${guess} ↑`);
    lowGuessesText.textContent = lowGuesses.join(", ");
    message.textContent = "Zu niedrig!";
  } else {
    highGuesses.push(`${guess} ↓`);
    highGuessesText.textContent = highGuesses.join(", ");
    message.textContent = "Zu hoch!";
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  gameOver = false;
  lowGuesses = [];
  highGuesses = [];
  triesText.textContent = "0";
  lowGuessesText.textContent = "-";
  highGuessesText.textContent = "-";
  message.textContent = "";
  guessInput.value = "";
  guessInput.focus();
}

guessBtn.addEventListener("click", handleGuess);
resetBtn.addEventListener("click", resetGame);
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleGuess();
});
