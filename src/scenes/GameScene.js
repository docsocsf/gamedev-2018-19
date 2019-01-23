import Assemblages from "../assemblages/Assemblages";
import {width, height} from "../helpers/util.js";

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

        this.matter.world.setBounds(0, 0, width, height, 10, true, true, true, true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = Assemblages.PlayerAssemblage(this, 400, 300, 'player', 0, {}, "player", 0);
    }

    update(time, delta){

        //Left Right Input
        if (this.cursors.left.isDown) {
            this.player.emit('leftDown', this.player);
        } else if (this.cursors.right.isDown) {
            this.player.emit('rightDown', this.player);
        } else {
            this.player.emit('noVelocityX', this.player);
        }

        //Up Down Input
        if (this.cursors.up.isDown) {
            this.player.emit('upDown', this.player);
        } else if (this.cursors.down.isDown){
            this.player.emit('downDown', this.player);
        } else {
            this.player.emit('noVelocityY', this.player);
        }
    }
}

export default GameScene;

//References:
// Example Game Scene: https://github.com/nkholski/phaser3-es6-webpack/blob/master/src/scenes/GameScene.js
// Matter World: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.World.html
