/** Class representing a ladder */
class Stair {
  /**
   * Create a Ladder/Stair.
   * The ladder entity contains two parameters:
   * @param {number} stairPos - it is the square on the game board from where the stair starts.
   * @param {number} goTo - is the square on the game board where the staircase leads to.
   */
  constructor(stairPos, goTo) {
    this.stairPos = stairPos;
    this.goTo = goTo;
  }

  getStairPos() {
    return this.stairPos;
  }

  getGoTo() {
    return this.goTo;
  }
}

module.exports = { Stair };
