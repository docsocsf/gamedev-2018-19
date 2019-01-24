import Entity from "./Entity";


class Region extends Entity(Phaser.Physics.Matter.Sprite) {
    constructor(setup) {
        //new Sprite(world, x, y, texture [, frame] [, options])
        super(setup.scene.matter.world, setup.x, setup.y, setup.texture,
            setup.frame, setup.options);
        this.setName(setup.name);
        setup.scene.add.existing(this);
    }
}

export default Region;