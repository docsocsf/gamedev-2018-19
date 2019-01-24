var Components = {};

//EXAMPLE COMPONENT MOCK UP
// Components.HealthData = function ComponentHealth(healthValue) {
//     healthValue = healthValue || 20;
//     this.healthValue = healthValue;
//     return this;
// };
// Components.HealthData.prototype.name = 'health_data';
//
// Components.HealthLogic = function ComponentHealth(entity) {
//     var healthDecrease = function DecreaseHealth(damage){
//         damage = damage || 1;
//         entity.components.health_data.healthValue = entity.components.health_data.healthValue - damage;
//         console.log("Decrease Health: " + entity.components.health_data.healthValue);
//     };
//     entity.on('decreaseHealth', healthDecrease);
//     return this;
// };
// Components.HealthLogic.prototype.name = 'health_logic';



/*                                  Player Data Components                                 */
Components.WorkloadData = function WorkloadData(workLoadValue) {
    workLoadValue = workLoadValue || 100;
    this.workload = workLoadValue;
    return this;
};
Components.WorkloadData.prototype.name = 'workload_data';

Components.FatigueData = function FatigueData(fatigueValue) {
    fatigueValue = fatigueValue || 100;
    this.fatigue = fatigueValue;
    return this;
};
Components.FatigueData.prototype.name = 'fatigue_data';

Components.MovementData = function MovementData(velocityValue) {
    velocityValue = velocityValue || 10;
    this.velocity = velocityValue;
    return this;
};
Components.MovementData.prototype.name = 'movement_data';

Components.PositionData = function PositionData(initPositionX, initPositionY, entity) {
    entity.setPosition(initPositionX, initPositionY);
    return this;
};
Components.PositionData.prototype.name = 'position_data';

Components.RenderData = function RenderData(spriteTexture, entity) {
    entity.setTexture(spriteTexture);
    return this;
};
Components.RenderData.prototype.name = 'render_data';
//////////////////////////////////////////////////////////////////////////////////////////////


/*                                  Player Logic Components                                 */
Components.MovementLogic = function MovementLogic(entity) {

    var moveLeft = function moveLeft(gameObject){
        gameObject.setVelocityX(-entity.components.movement_data.velocity);
    };
    entity.on('leftDown', moveLeft);

    var moveRight = function moveRight(gameObject){
        gameObject.setVelocityX(entity.components.movement_data.velocity);
    };
    entity.on('rightDown', moveRight);

    var stopVelocityX = function stopVelocityX(gameObject){
        gameObject.setVelocityX(0);
    };
    entity.on('noVelocityX', stopVelocityX);


    var moveUp = function moveUp(gameObject){
        gameObject.setVelocityY(-entity.components.movement_data.velocity);
    };
    entity.on('upDown', moveUp);

    var moveDown = function moveDown(gameObject){
        gameObject.setVelocityY(entity.components.movement_data.velocity);
    };
    entity.on('downDown', moveDown);

    var stopVelocityY = function stopVelocityY(gameObject){
        gameObject.setVelocityY(0);
    };
    entity.on('noVelocityY', stopVelocityY);

    return this;
};
Components.MovementLogic.prototype.name = 'movement_logic';
//////////////////////////////////////////////////////////////////////////////////////////////

export default Components;


//Reference:
// Phaser Event Handling Example: https://labs.phaser.io/edit.html?src=src\events\game%20object%20events.js
// phaser phhysics: https://phaser.io/phaser3/devlog/107
