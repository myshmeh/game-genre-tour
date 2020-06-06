class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'preloader',
            pack: {
                files: [{
                    type: 'plugin',
                    key: 'rexwebfontloaderplugin',
                    url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexwebfontloaderplugin.min.js',
                    start: true
                }]
            },
        });
    }

    preload() {
        this.plugins.get('rexwebfontloaderplugin').addToScene(this);
        const fontLoadConfig = {
            google: {
                families: [FONTS.MONOTON, FONTS.CREEPSTER, FONTS.ORBITRON, FONTS.HANDLEE]
            }
        }
        this.load.rexWebFont(fontLoadConfig);
        this.load.spritesheet('sprites', 'img/tmp_sprites.png', {
            frameWidth: 32, frameHeight: 32,
        });
        this.load.audio('explode', ['sounds/Explosion48.wav']);
        this.load.audio('theme', ['sounds/theme.mp3']);
        this.load.audio('themeSimple', ['sounds/theme_simple.mp3']);
    }
    
    create() {
        this.anims.create({
            key: 'playerIdle',
            frames: [{key: 'sprites', frame: 4}],
        });
        this.scene.start('start');
    }
}