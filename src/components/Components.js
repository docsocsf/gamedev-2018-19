var Components = {};

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

    var moveLeft = function moveLeft(gameObject) {
        gameObject.setVelocityX(-entity.components.movement_data.velocity);
    };
    entity.on('leftDown', moveLeft);

    var moveRight = function moveRight(gameObject) {
        gameObject.setVelocityX(entity.components.movement_data.velocity);
    };
    entity.on('rightDown', moveRight);

    var stopVelocityX = function stopVelocityX(gameObject) {
        gameObject.setVelocityX(0);
    };
    entity.on('noVelocityX', stopVelocityX);


    var moveUp = function moveUp(gameObject) {
        gameObject.setVelocityY(-entity.components.movement_data.velocity);
    };
    entity.on('upDown', moveUp);

    var moveDown = function moveDown(gameObject) {
        gameObject.setVelocityY(entity.components.movement_data.velocity);
    };
    entity.on('downDown', moveDown);

    var stopVelocityY = function stopVelocityY(gameObject) {
        gameObject.setVelocityY(0);
    };
    entity.on('noVelocityY', stopVelocityY);

    return this;
};
Components.MovementLogic.prototype.name = 'movement_logic';
//////////////////////////////////////////////////////////////////////////////////////////////

/*                              Region Data Components                                      */

Components.Dimensions = function Dimensions(entity, width, height) {
    width = width || 200;
    height = height || 100;
    this.width = width;
    this.height = height;
    entity.setDisplaySize(width, height);
    return this;
};

Components.Depth = function Depth(depth, entity) {
    depth = depth || 0;
    this.depth = depth;
    entity.setDepth(depth);
    return this;
};

Components.Collisions = function Collisions(collisionCategory, entity) {
    collisionCategory = collisionCategory || 0;
    this.collisionCategory = collisionCategory;
    entity.setCollisionCategory(collisionCategory);
    return this;
};

Components.CollisionsWith = function CollisionsWith(collisionsWith, entity) {
    collisionsWith = collisionsWith || 0;
    this.collisionsWith = collisionsWith;
    entity.setCollidesWith(collisionsWith);
    return this;
};

//////////////////////////////////////////////////////////////////////////////////////////////





export default Components;


//Reference:
// Phaser Event Handling Example: https://labs.phaser.io/edit.html?src=src\events\game%20object%20events.js
// phaser phhysics: https://phaser.io/phaser3/devlog/107
