const config = {
    width: 640,
    height: 480,
    backgroundColor: 0x333,
    pixelArt: true,
    scene: [],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0
            , debug: true,
        }
    },
    autoCenter: Phaser.Scale.CENTER_BOTH,
};

const game = new Phaser.Game(config);