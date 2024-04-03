// Игровой лаунчер

const readline = require("readline");
const dictionary = require("../dictionary");
const games = require("../games");

const myInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
  prompt: "",
});

const gamesArray = [
  {
    id: 1,
    game: games.knightDragonAndPrincessGame,
  },
  {
    id: 2,
    game: games.poleChudesGame,
  },
  {
    id: 3,
    game: games.makeWordGame,
  },
  {
    id: 4,
    game: games.blackJackGame,
  },
  {
    id: 5,
    game: games.trueOrFalseGame,
  },
  {
    id: 6,
    game: games.dropCoin,
  },
];

function countResult(gameResult) {
  const message =
    gameResult == "draw"
      ? dictionary.global.draw
      : gameResult
      ? dictionary.global.win
      : dictionary.global.lose;
  console.log(message);
}

function startLauncher() {
  myInterface.question(dictionary.global.chooseGame, (numAnswer) => {
    numAnswer == 7 ? stopLauncher() : startGame(numAnswer);
  });
}

function stopLauncher() {
  console.log(dictionary.global.goodbye);
  myInterface.close();
}

function afterGame(gameId) {
  myInterface.question(dictionary.global.playAgain, (numAnswer) => {
    numAnswer == 1
      ? startGame(gameId)
      : numAnswer == 2
      ? startLauncher()
      : stopLauncher();
  });
}

async function startGame(gameId) {
  const curGame = gamesArray.find((game) => {
    return game.id == gameId;
  });
  if (curGame) {
    const result = await curGame.game();
    countResult(result);
    afterGame(gameId);
  } else {
    console.log(dictionary.global.wrongInput);
    startLauncher();
  }
}

module.exports = { run: startLauncher };
