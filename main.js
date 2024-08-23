const roleHarvester = require('role.harvester');
module.exports.loop = function () {
    if(Game.time % 10 == 0) {
        console.log("hello! I'm looping😊");
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}