import Entity from "./Entity.js";

class BaseEntity extends Entity(Phaser.GameObjects.GameObject) {
    constructor(scene, type, name, count) {
        super(scene, type, name, count);
        this.setName(name);
    }
}

export default BaseEntity;

//Reference:
// Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Mixins: http://exploringjs.com/es6/ch_classes.html#sec_simple-mixins
