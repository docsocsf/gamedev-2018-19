//See the Splash Screen

class SplashScene extends Phaser.Scene {
    constructor (){
        super({
            key: `SplashScene`
        });

    }
    preload(){
        console.log("SplashScene");
    }

    create() {

        const logo = this.add.image(400, 300, 'logo');

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
