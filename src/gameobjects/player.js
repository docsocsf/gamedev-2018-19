class PlayerBase extends Phaser.GameObjects.Sprite {
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
    normalDefense(){
        console.log("Normal Defense");
    }
    normalAttack(){
        console.log("NormalAttack");
    }

    type (){
        console.log("Player type is: ");
    }
}

class PlayerLeader extends PlayerBase {
    constructor(config) {
        //new Sprite(scene, x, y, texture [, frame])
        //config = {
        //     scene:
        //     x:
        //     y:
        //     key:
        // }
        super(config)
        console.log("Created Player leader class");
    }

    update(keys, time, delta) {
        super.update(keys, time, delta);
    }
    carry() {
        console.log("Carry the team");
    }
    specialSummon(){
        console.log("Special Summon");
    }
    type (){
        super.type();
        console.log("Player Leader");
    }

}


class PlayerSlacker extends PlayerBase {
    constructor(config) {
        //new Sprite(scene, x, y, texture [, frame])
        //config = {
        //     scene:
        //     x:
        //     y:
        //     key:
        // }
        super(config)
        console.log("Created Player Slacker class");
    }

    update(keys, time, delta) {
        super.update(keys, time, delta);
    }
    deadweight() {
        console.log("Dead weight");
    }
    type (){
        super.type();
        console.log("Player Slacker");
    }

}


class PlayerHacker extends PlayerBase {
    constructor(config) {
        //new Sprite(scene, x, y, texture [, frame])
        //config = {
        //     scene:
        //     x:
        //     y:
        //     key:
        // }
        super(config)
        console.log("Created Player Hacker class");
    }

    update(keys, time, delta) {
        super.update(keys, time, delta);
    }
    hack() {
        console.log("Hack");
    }
    specialSummon(){
        console.log("Special Summon");
    }
    type (){
        super.type();
        console.log("Player Hacker");
    }

}

export {PlayerLeader, PlayerSlacker, PlayerHacker};

//Reference:
// Sprite:
// Player Structure: https://stackoverflow.com/questions/51158626/phaser-3-es6-how-to-create-a-player-class

// Javscript Classes:
// https://medium.com/code-monkey/javascript-classes-and-prototypal-inheritance-2a53ed7343d8
// Javascript Composition:
// https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6
// Javascript Factory Functions:
// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

// Entity and Component System:
// http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
// http://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/
