/** Class representing a Snake */
class Snake {
  /**
   * Create a Snake.
   * The snake entity contains two parameters:
   * @param {number} stairPos - it is the square on the game board from where the snake (the head of the snake) starts.
   * @param {number} goTo - is the square on the game board where the snake leads to.
   */
  constructor(snakePos, goTo) {
    this.snakePos = snakePos;
    this.goTo = goTo;
  }

  getSnakePos() {
    return this.snakePos;
  }

  getGoTo() {
    return this.goTo;
  }
}

module.exports = { Snake };
