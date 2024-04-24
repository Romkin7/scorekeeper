const resetButton = document.querySelector("#resetButton");
const playTo = document.querySelector("#playTo");

const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const winnerClass = "winner";
const loserClass = "loser";

let winningScore = getWinningScore(playTo);

function getWinningScore(element) {
  return parseInt(element.value, 10);
}

function updateScore(player, opponent) {
  player.score = player.score + 1;
  player.display.textContent = player.score;
  if (player.score === winningScore) {
    endGame(player, opponent);
  }
}

function endGame(player, opponent) {
  player.button.disabled = true;
  opponent.button.disabled = true;
  player.display.classList.add(winnerClass);
  opponent.display.classList.add(loserClass);
}

function reset() {
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = p1.score;
  p2.display.textContent = p2.score;
  p1.button.disabled = false;
  p2.button.disabled = false;
  p1.display.classList.remove(winnerClass);
  p1.display.classList.remove(loserClass);
  p2.display.classList.remove(winnerClass);
  p2.display.classList.remove(loserClass);
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

resetButton.addEventListener("click", reset);

playTo.addEventListener("change", function () {
  winningScore = getWinningScore(this);
  reset();
});
