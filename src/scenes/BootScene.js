//Load the game assets in this scene

class BootScene extends Phaser.Scene {
    constructor (){
        super({
            key: `BootScene`
        });
    }

    preload(){
        console.log("BootScene");

        //Create the Progress Bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;

        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        loadingText.setOrigin(0.5, 0.5);
        percentText.setOrigin(0.5, 0.5);
        assetText.setOrigin(0.5, 0.5);


        //Event Listeners for Phaser LoaderPlugin
        this.load.on('progress', function(value) {
            //console.log(value);
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function(file) {
            //console.log(file.src);
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function() {
            console.log('complete');
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBox.destroy();
        });

        /***** Load the resources here *****/
        //Splash Screen
        this.loadSplashResources();
        //Main Menu
        this.loadMenuResources();
        //Used to simply test loading screen
        this.testLoadingBar();
    }

    loadSplashResources () {
        this.load.image('logo', '../../assets/images/GameDevlogo.png');
    }

    loadMenuResources() {

    }

    testLoadingBar () {
        for (var i = 0; i < 100; i++) {
            this.load.image('logo'+i, '../../assets/images/GameDevlogo.png');
        }
    }

    create() {
        this.scene.start('SplashScene');
    }
}

export default BootScene;

//Resource:
//Loading Screen Tutorial: https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/?a=13
