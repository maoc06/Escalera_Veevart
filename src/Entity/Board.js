const { Stair } = require('./Stair');
const { Snake } = require('./Snake');

class Board {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.board = new Array();

    this.stairs = new Array();
    this.snakes = new Array();
  }

  init() {
    this.create();

    this.addStairs([
      new Stair(3, 11),
      new Stair(6, 17),
      new Stair(9, 18),
      new Stair(10, 12),
    ]);

    this.addSnakes([
      new Snake(14, 4),
      new Snake(19, 8),
      new Snake(22, 20),
      new Snake(24, 16),
    ]);
  }

  create() {
    const board = [];

    for (let i = 0; i < this.rows; i++) {
      board[i] = [];

      for (let j = 0; j < this.columns; j++) {
        board[i][j] = 'x';
      }
    }

    this.board = board;
  }

  addStairs(stairs) {
    this.stairs = stairs;
  }

  addSnakes(snakes) {
    this.snakes = snakes;
  }

  checkIfFellOnStair(playerPos) {
    let fellOnStair = {};

    this.stairs.map((stair) => {
      if (stair.stairPos === playerPos) {
        fellOnStair = stair;
      }
    });

    if (Object.keys(fellOnStair).length !== 0) {
      console.log(`Player climbs the ladder to frame ${fellOnStair.goTo}`);
      return fellOnStair.goTo;
    }
    return false;
  }

  checkIfFellOnSnake(playerPos) {
    let fellOnSnake = {};

    this.snakes.map((snake) => {
      if (snake.snakePos === playerPos) {
        fellOnSnake = snake;
      }
    });

    if (Object.keys(fellOnSnake).length !== 0) {
      console.log(`Player drops to frame ${fellOnSnake.goTo}`);
      return fellOnSnake.goTo;
    }
    return false;
  }

  print() {
    this.board.map((row) => {
      console.log(row);
    });
  }
}

module.exports = { Board };
