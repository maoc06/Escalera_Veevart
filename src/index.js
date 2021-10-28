/**
 * Only entities/models are exported
 * to make them more easily accessible
 * during imports.
 */

const { Board } = require('./Entity/Board');
const { Dice } = require('./Entity/Dice');
const { Player } = require('./Entity/Player');

module.exports = { Board, Dice, Player };
