class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: 'gameOver'
        });
    }

    create() {
        this.add.text(WIDTH * 0.5, HEIGHT * 0.5, 'GAME OVER', {
            fontSize: '64px',
        }).setOrigin(0.5);
        console.log('gameover');
    }
}