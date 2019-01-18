import Player from "../gameobjects/player";

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

        // Created an object to pass into player characters to handle input
        // this.keys will contain all we need to control Player Character
        this.keys = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        };

        // Create the player character object
        //config = {
        //     scene:
        //     x:
        //     y:
        //     key:
        //
        this.player = new Player({scene: this, key: 'player', x: 20, y: 10});
    }
    update(time, delta){

        /*       Run the update method of all the game objects         */

        //Run the update method of the player
        this.player.update(this.keys, time, delta);
    }
}

export default GameScene;

//References:
// Example Game Scene: https://github.com/nkholski/phaser3-es6-webpack/blob/master/src/scenes/GameScene.js
