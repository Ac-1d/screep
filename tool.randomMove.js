/** @param {Creep} creep */
var randomMove = (creep) => {
    // 8 is the num of directions
    const randomIndex = Math.floor(Math.random() * 8);
    creep.move(randomIndex);
}

module.exports = randomMove;