const squares = document.querySelectorAll(".squares");
const restartBtn = document.querySelector(".restart-btn");
const message = document.querySelector(".message");

let player = ["X", "O"];
let currentPlayer = player[0];
message.textContent = "X's turn";

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
];

// Adding event listeners to squares
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    // Check if square is already taken or if game is won
    if (squares[i].textContent !== "" || checkWinner(currentPlayer)) return;

    // Set the current player's mark
    squares[i].textContent = currentPlayer;

    // Check for a winner
    if (checkWinner(currentPlayer)) {
      message.textContent = `${currentPlayer} wins the game! Please click on restart to play again.`;
      return;
    }

    // Check for a tie
    if (tieGame()) {
      message.textContent = `The game is a tie!`;
      return;
    }

    // Switch player
    currentPlayer = currentPlayer === player[0] ? player[1] : player[0];
    message.textContent = `${currentPlayer}'s Turn`;
  });
}

// Function to check for a winning condition
function checkWinner(currentPlayer) {
  for (let i = 0; i < winningPattern.length; i++) {
    let [a, b, c] = winningPattern[i];

    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

// Function to check for a tie
function tieGame() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
      return false;
    }
  }
  return true;
}

// Restart game function
function restartGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  currentPlayer = player[0];
  message.textContent = "X's turn";
}

// Event listener for restart button
restartBtn.addEventListener("click", restartGame);
