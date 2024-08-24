const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder')
const rebuild = require('loop.rebuild');
module.exports.loop = function () {
    if(Game.time % 10 == 0) {
        console.log("hello! I'm looping😊");
        for(var name in Game.creeps){
            console.log(Game.creeps[name]);
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory: ', name, ', he is dead😢');
            }
        }
    }
    rebuild();
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}