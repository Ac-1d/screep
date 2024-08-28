const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');

const rebuild = require('loop.rebuild');

// 一个不太好的实现方式 考虑extend screep(?
const staticData = require('static.data');

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
        // if-else是个更难维护的东西😅
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