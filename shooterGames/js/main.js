const config = {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#333',
    pixelArt: true,
    scene: [ Preloader, GamePlay ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0
            , debug: true,
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

const game = new Phaser.Game(config);