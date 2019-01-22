import Assemblages from "../assemblages/Assemblages";

class GameScene extends Phaser.Scene {
    constructor (){
        super({
            key: `GameScene`
        });

    }
    preload(){
        console.log("GameScene");
    }
    create(){
        this.entity = Assemblages.HealthAssemblage(this, "Test", "entity1", 0 );
    }

    update(time, delta){
        // Created an object to pass into player characters to handle input
        // this.keys will contain all we need to control Player Character
        var keys = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        };

        /*       Run the update method of all the game objects         */
        let input = {
            left: keys.left.isDown,
            right: keys.right.isDown,
            down: keys.down.isDown,
            up: keys.up.isDown,
        };

        if(input.up){
            const damage = 5;
            this.entity.emit('decreaseHealth', damage);
        }

    }
}

export default GameScene;

//References:
// Example Game Scene: https://github.com/nkholski/phaser3-es6-webpack/blob/master/src/scenes/GameScene.js
