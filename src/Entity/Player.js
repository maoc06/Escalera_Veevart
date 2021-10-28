const { WINNER_POS } = require('../constants');
/** Class representing a player */
class Player {
  /**
   * Create a Player.
   * The Player entity contains one parameter:
   * @param {number} currPos - it is the current position of the player on the game board (initialized to zero).
   */
  constructor() {
    this.currPos = 0;
  }

  /**
   * To move the player to a new square after rolling the die
   * @param {number} diceThrow - number on which the die fell
   */
  moveAlong(diceThrow) {
    this.currPos = diceThrow + this.getCurrPos();

    /**
     * When you pass the 25th square you must go back the
     * number of times you pass this square, i.e. you can
     * only finish the game if you fall exactly on the 25th square.
     */
    const exceeds = this.checkIfExceeds(this.currPos);
    if (!exceeds) this.printMove(this.currPos);
  }

  /**
   * To move the player to a new square directly without the need to roll the dice
   * @param {number} newPos - number of the frame on the board
   */
  goTo(newPos) {
    this.currPos = newPos;
  }

  getCurrPos() {
    return this.currPos;
  }

  /**
   * Validate if the player has passed the winning square
   * @param {number} pos - current position of the player on the game board
   * @return {boolean} if the player has passed the winning square
   */
  checkIfExceeds(pos) {
    if (pos > WINNER_POS) {
      // calculate the difference between the current position and the winner position
      const diffExceeds = this.currPos - WINNER_POS;
      // calculate the new number of the frame on the game board
      const goBackFrame = WINNER_POS - diffExceeds;
      console.log('Player exceeded, moves back to the frame', goBackFrame);

      // set the new player position
      this.currPos = goBackFrame;
      return true;
    }
    return false;
  }

  printMove(pos) {
    if (pos < WINNER_POS) console.log('Player moves to frame', pos);
    else if (pos === WINNER_POS)
      console.log(`Player fell exactly in the frame ${WINNER_POS}\nEnd`);
  }
}

module.exports = { Player };
