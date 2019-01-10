//Load the game assets in this scene

class BootScene extends Phaser.Scene {
    constructor (){
        super({
            key: `BootScene`
        });
    }

    preload(){
        console.log("BootScene");
    }

    create() {
        //adjust Scene size here
        this.scene.start('PreloadScene');
    }
}

export default BootScene;
