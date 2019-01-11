//See the Splash Screen

class SplashScene extends Phaser.Scene {
    constructor (){
        super({
            key: `SplashScene`
        });
    }
    preload(){
        console.log("SplashScene");

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        let background = this.add.graphics({
            x: 0,
            y: 0,
            lineStyle: {
                width: 1,
                color: 0xffffff,
                alpha: 1
            },
            fillStyle: {
                color: 0xffffff,
                alpha: 1
            },

            add: true
        });

        background.fillRectShape(
            {
                x: 0,
                y: 0,
                width,
                height
            });

    }

    create() {

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        const logo = this.add.image(width / 2, height / 2, 'logo');

        //Delay the switch to the main menu
        const splashScreenTime = 4000;
        var splashScreenTimer = this.time.addEvent({
                delay: splashScreenTime,
                callback: function(){
                    splashScreenTimer.destroy();
                    this.scene.start('MenuScene');
                },
                callbackScope: this
            });

    }
}

export default SplashScene;


//Resource:
//Clock Tutorial: https://phaser.io/phaser3/devlog/87
//Graphics add: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/graphics/
