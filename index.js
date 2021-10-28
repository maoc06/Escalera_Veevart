const { Board, Dice, Player } = require('./src'); // import entities
const { DEFAULT_ROWS, DEFAULT_COLUMS, WINNER_POS } = require('./src/constants');

const dice = new Dice();
const player = new Player();

// initialize the board or table game with default size (5x5)
const board = new Board(DEFAULT_ROWS, DEFAULT_COLUMS);
// method to load what is necessary to the game board (rows, columns, scales and snakes)
board.init();

/**
 * Main cycle of the game:
 * runs until the player has reached the winning square
 */
while (player.getCurrPos() !== WINNER_POS) {
  // the die is rolled, and the player moves to a new position
  player.moveAlong(dice.throw());

  // it is checked if the player fell on a staircase
  const fellOnStairPos = board.checkIfFellOnStair(player.getCurrPos());
  // if so, the player is moved to the position that climbs the staircase
  if (fellOnStairPos) player.goTo(fellOnStairPos);

  // it is checked if the player fell on a snake
  const fellOnSnakePos = board.checkIfFellOnSnake(player.getCurrPos());
  // if so, the player is moved to the position drop the snake.
  if (fellOnSnakePos) player.goTo(fellOnSnakePos);
}
