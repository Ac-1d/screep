var loopRebuild = () => {
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    // console.log('Harvesters: ' + harvesters.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    // console.log('Upgraders: ' + upgraders.length);
    // TODO: 改成一个遍历
    if(harvesters.length < Memory.harvesterNum) {
        // TODO: 命名后缀改成hash(?
        var newName = 'Harvester' + Game.time;
        if(Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}}) == 0) {
                console.log('Spawning new harvester: ' + newName);
            }
    }
    if(upgraders.length < Memory.upgraderNum) {
        var newName = 'Upgrader' + Game.time;
        if(Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {
                memory: {
                    role: 'upgrader',
                    upgrading: true,
                }
            }) == 0) {
                console.log('Spawning new upgrader: ' + newName);
            }
    }
    if()
}

module.exports = loopRebuild