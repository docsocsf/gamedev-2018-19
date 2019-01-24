import Entity from "./Entity.js";

class BaseEntity extends Entity(Phaser.GameObjects.GameObject) {
    constructor(setup) {
        super(setup.scene, setup.type);
        this.setName(setup.name);
        setup.scene.add.existing(this);
    }
}

export default BaseEntity;

//Reference:
// Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Mixins: http://exploringjs.com/es6/ch_classes.html#sec_simple-mixins
