import Entity from "./Entity.js";

class MatterSpriteEntity extends Entity(Phaser.Physics.Matter.Sprite) {
    constructor(setup) {
        //new Sprite(world, x, y, texture [, frame] [, options])
        super(setup.scene.matter.world, setup.x, setup.y, setup.texture, setup.frame, setup.options);
        this.setName(setup.name);
        setup.scene.add.existing(this);
    }
}

export default MatterSpriteEntity;

//Reference:
// Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Mixins: http://exploringjs.com/es6/ch_classes.html#sec_simple-mixins
// Sprite: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
// Matter: https://www.codeandweb.com/physicseditor/tutorials/how-to-create-physics-shapes-for-phaser-3-and-matterjs
//         https://labs.phaser.io/edit.html?src=src\physics\matterjs\top%20down%20car%20body.js
