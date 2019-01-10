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
       // this.scene.start('MenuScene');
    }
}

export default SplashScene;


//Resource:
//https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/?a=13
