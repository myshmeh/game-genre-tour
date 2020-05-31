class GameClear extends Phaser.Scene {
    constructor() {
        super({
            key: 'gameClear'
        });
    }

    create() {
        this.add.text(WIDTH * 0.5, HEIGHT * 0.5, 'GALAXY IS SAVED', {
            fontSize: '58px',
        }).setOrigin(0.5);
    }
}