//Functional Mixin addition to player member values
const HealthBar = (target, state) => {
    Object.assign(state, {health: 100});
    Object.assign(target, state);
};

const canUseItem = (target) => {
    Object.assign(target, {
        useItem(item){
            console.log("Activate item:" + item);
        }
    })

};



// Factory composition functions that contain specialisations
let Defense = (superclass) => class extends superclass {
    normalDefense(){
        console.log("Normal Defense");
    }
};

let Offense = (superclass) => class extends superclass {
    normalAttack(){
        console.log("NormalAttack");
    }
};


let SpecialSummon = (superclass) => class extends superclass {
    specialSummon(){
        console.log("Special Summon");
    }
};

//Base player object needs a constructor and an update function
class PlayerBase extends Phaser.GameObjects.Sprite {
    constructor(config) {
        //new Sprite(scene, x, y, texture [, frame])
        //config = {
        //     scene:
        //     x:
        //     y:
        //     key:
        // }
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this);
        this.state = {
            name: "player",
        };
        HealthBar(PlayerBase.prototype, this.state);
    }

    update(keys, time, delta) {

    }
}

//Specialised Player Leader Character
class PlayerLeader extends Offense(Defense(SpecialSummon(PlayerBase))) {

    constructor(config){
        super(config);
        console.log("Player leader constructor");
    }

    courseObjects(object = {}) {
        object.curse = true;
        return object;
    }
    type (){
        console.log("Player Leader created");
    }
    carry() {
        console.log("Carry the team");
    }
}

//Specialised Player Leader Character
class PlayerSlacker extends Offense(Defense(PlayerBase)) {

    constructor(config){
        super(config);
        console.log("Player Slacker constructor");
    }

    type (){
        console.log("Player Slacker created");
    }
    deadweight() {
        console.log("Dead weight");
    }
}


//Specialised Player Hacker Character
class PlayerHacker extends Offense(Defense(SpecialSummon(PlayerBase))) {

    constructor(config){
        super(config);
        console.log("Player Hacker constructor");
        canUseItem(PlayerBase.prototype);
    }

    type (){
        console.log("Player Hacker created");
    }
    hack() {
        this.useItem("Botnet");
        console.log("Hack");
    }
    update(keys, time, delta){
        super.update(keys, time, delta);

        let input = {
            left: keys.left.isDown,
            right: keys.right.isDown,
            down: keys.down.isDown,
            up: keys.up.isDown,
        };

        if(input.up){
            this.hack();
        }
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
