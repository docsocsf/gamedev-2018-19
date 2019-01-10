//Load the game assets in this scene

class PreloadScene extends Phaser.Scene {
    constructor (){
        super({
            key: `PreloadScene`
        });

    }
    preload(){
        console.log("PreloadScene");

        const loadingBar = this.add.sprite(160, 240, "loading");
        //Load the resources here
    }

    create() {
        this.scene.start('MenuScene');
    }
}

export default PreloadScene;


//Resource:
//https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/?a=13
