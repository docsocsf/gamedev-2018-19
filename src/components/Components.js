var Components = {};

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

export default Components;


//Reference:
// Phaser Event Handling Example: https://labs.phaser.io/edit.html?src=src\events\game%20object%20events.js
