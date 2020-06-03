class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'preloader',
        });
    }

    preload() {
        this.load.spritesheet('sprites', 'img/tmp_sprites.png', {
            frameWidth: 32, frameHeight: 32,
        });
    }
    
    create() {
        this.anims.create({
            key: 'playerIdle',
            frames: [{key: 'sprites', frame: 4}],
        });
        this.scene.start('start');
    }
}