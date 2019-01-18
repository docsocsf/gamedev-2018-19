class Player extends Phaser.GameObjects.Sprite {
    constructor(config) {
        //new Sprite(scene, x, y, texture [, frame])
        //config = {
        //     scene:
        //     x:
        //     y:
        //     key:
        // }
        super(config.scene, config.x, config.y, config.key)
        //config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
    }

    update(keys, time, delta) {


    }
}

export default Player;

//Reference:
// Sprite:

// Javscript Classes:
// https://medium.com/code-monkey/javascript-classes-and-prototypal-inheritance-2a53ed7343d8
// Javascript Composition:
// https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6
// Javascript Factory Functions:
// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

// Entity and Component System:
// http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
// http://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/
