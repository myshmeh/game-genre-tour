class GameClear extends Phaser.Scene {
    constructor() {
        super({
            key: 'gameClear'
        });
    }

    create() {
        this.add.text(WIDTH * 0.5, HEIGHT * 0.4, GAME_CLEAR_TITLE_TEXT, {
            fontSize: '48px',
        }).setOrigin(0.5);
        this.add.text(WIDTH * 0.5, HEIGHT * 0.55, GAME_CLEAR_SUBTITLE_TEXT, {
            fontSize: '28px',
        }).setOrigin(0.5);
        const rect = this.add.image(0, 0, 'sprites', 5).setScale(WIDTH/32, HEIGHT/32).setOrigin(0);
        rect.setTint(0x222222);
        this.fadeOut(rect, 0);
    }
}