import 'phaser';
import BootScene from './scenes/BootScene';
import SplashScene from './scenes/SplashScene';
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';

const config = {
    type: Phaser.AUTO,
    parent: 'content',
    pixelArt: true,
    title: 'Karma',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
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
