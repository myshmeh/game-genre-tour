class Start extends Phaser.Scene {
    title;
    text;
    phraseIndex;
    rect;
    constructor() {
        super({
            key: 'start',
        });
    }
    
    create() {
        this.phraseIndex = -1;
        this.title = this.add.text(WIDTH * 0.5, HEIGHT * 0.45, TITLE_TEXT, {
            fontSize: '48px',
            align: 'center'
        }).setOrigin(0.5);
        console.log(this.title.alpha);
        this.text = this.add.text(WIDTH * 0.5, HEIGHT * 0.55, '', {
            fontSize: '28px',
            align: 'center'
        }).setOrigin(0.5);
        const moveToNextAction = () => {
            this.phraseIndex++;
            if (this.title.alpha === 1) this.fadeOut(this.title, HEIGHT * 0.2);
            if (this.phraseIndex >= TITLE_PHRASES.length) {
                this.startScene('gameplay');
                return;
            }
            this.updatePhrase(TITLE_PHRASES[this.phraseIndex]);
        };
        this.input.keyboard.on('keyup', moveToNextAction.bind(this));
        this.rect = this.add.image(0, 0, 'sprites', 5).setScale(WIDTH/32, HEIGHT/32).setOrigin(0);
        this.rect.setTint(0x222222);
        this.fadeOut(this.rect, 0);
    }

    startScene(sceneName) {
        this.fadeIn(this.rect, 0, 2000, () => this.scene.start(sceneName));
    }

    updatePhrase(phrase) {
        this.fadeOut(this.text, HEIGHT * 0.5, 750, (_, targets) => {
            const target = targets[0];
            target.text = phrase;
            target.y = HEIGHT * 0.6;
            this.fadeIn(target, HEIGHT * 0.55, 750);
        });
    }
}