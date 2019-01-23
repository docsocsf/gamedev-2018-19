var Components = {};

//EXAMPLE COMPONENT MOCK UP
Components.HealthData = function ComponentHealth(healthValue) {
    healthValue = healthValue || 20;
    this.healthValue = healthValue;
    return this;
};
Components.HealthData.prototype.name = 'health_data';

Components.HealthLogic = function ComponentHealth(entity) {
    var healthDecrease = function DecreaseHealth(damage){
        damage = damage || 1;
        entity.components.health_data.healthValue = entity.components.health_data.healthValue - damage;
        console.log("Decrease Health: " + entity.components.health_data.healthValue);
    };
    entity.on('decreaseHealth', healthDecrease);
    return this;
};
Components.HealthLogic.prototype.name = 'health_logic';
///////////////////////////////////////////////////////////////////


//Player Data Components
Components.WorkloadData = function WorkloadData(workLoadValue) {

};
Components.WorkloadData.prototype.name = 'workload_data';

Components.FatigueData = function FatigueData(fatigueValue) {

};
Components.FatigueData.prototype.name = 'fatigue_data';

Components.MovementData = function MovementData(velocityValue) {
    velocityValue = velocityValue || 10;
    this.velocityValue = velocityValue;
    return this;
};
Components.MovementData.prototype.name = 'movement_data';



//Player Logic Components
Components.MovementLogic = function MovementLogic(entity) {

    var moveLeft = function moveLeft(gameObject){
        gameObject.setVelocityX(-entity.components.movement_data.velocityValue);
    };
    entity.on('leftDown', moveLeft);

    var moveRight = function moveRight(gameObject){
        gameObject.setVelocityX(entity.components.movement_data.velocityValue);
    };
    entity.on('rightDown', moveRight);

    var stopVelocityX = function stopVelocityX(gameObject){
        gameObject.setVelocityX(0);
    };
    entity.on('noVelocityX', stopVelocityX);


    var moveUp = function moveUp(gameObject){
        gameObject.setVelocityY(-entity.components.movement_data.velocityValue);
    };
    entity.on('upDown', moveUp);

    var moveDown = function moveDown(gameObject){
        gameObject.setVelocityY(entity.components.movement_data.velocityValue);
    };
    entity.on('downDown', moveDown);

    var stopVelocityY = function stopVelocityY(gameObject){
        gameObject.setVelocityY(0);
    };
    entity.on('noVelocityY', stopVelocityY);

    return this;
};
Components.MovementLogic.prototype.name = 'movement_logic';


export default Components;


//Reference:
// Phaser Event Handling Example: https://labs.phaser.io/edit.html?src=src\events\game%20object%20events.js
// phaser phhysics: https://phaser.io/phaser3/devlog/107
