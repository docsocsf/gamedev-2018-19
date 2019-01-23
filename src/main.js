import 'phaser';
import BootScene from './scenes/BootScene';
import SplashScene from './scenes/SplashScene';
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import {width, height} from "./helpers/util.js";

const config = {
    type: Phaser.AUTO,
    parent: 'content',
    pixelArt: true,
    title: 'Karma',
    width: width,
    height: height,
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [
        BootScene,
        SplashScene,
        MenuScene,
        GameScene
    ]
};

const game = new Phaser.Game(config);
game.scene.start('BootScene');

//Using Matter physics
