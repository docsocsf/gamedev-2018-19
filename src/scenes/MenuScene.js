class MenuScene extends Phaser.Scene {
    constructor (){
        super({
            key: `MenuScene`
        });

    }
    preload(){
        console.log("MenuScene");

    }
    create(){
        this.scene.start('GameScene');

    }
    update(){

    }
}

export default MenuScene;
