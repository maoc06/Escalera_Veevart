/**
 * Class representing a die
 */
class Dice {
  /**
   * Create a Dice.
   * The Dice entity contains two parameters:
   * @param {number} min - the minimum value the die can take.
   * @param {number} max - the maximum value the die can take
   */
  constructor() {
    this.min = 1;
    this.max = 6;
  }

  /**
   * calculate a random die value between min (1) and max (6)
   * @return {number} the random value between 1 and 6
   */
  throw() {
    const random = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
    this.printDiceNum(random);
    return random;
  }

  printDiceNum(n) {
    console.log('Dice Throws', n);
  }
}

module.exports = { Dice };
