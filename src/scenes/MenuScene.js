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

        //Create Interactive Menu Interface with event listener
        this.gameButton = this.add.text(100, 100, 'Start Game', {
            fontFamily: 'Courier',
            fontSize: '16px',
            backgroundColor: '#000000',
            color: '#ffffff',
            stroke: '#fff',
            align: 'center'
        })
            .setInteractive({ useHandCursor: false })
            .on('pointerup', () => this.handleClick())
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState());
    }
    update(){

    }

    handleClick() {
        this.scene.start('GameScene');
    }
    enterButtonHoverState(){
        this.gameButton.setColor('#66CD00');

    }
    enterButtonRestState() {
        this.gameButton.setColor('#ffffff');
    }
}

export default MenuScene;

//Reference:
// Button Tutorial: https://snowbillr.github.io/blog/2018-07-03-buttons-in-phaser-3/
// Text: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/text/
// TODO More Indepth Menu:
// TODO https://github.com/MattMcFarland/phaser-menu-system/blob/master/game/states/gamemenu.js
// TODO https://phasergames.com/making-title-screen-phaser/
