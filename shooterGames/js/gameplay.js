class GamePlay extends Phaser.Scene {
    player;
    bullets;
    enemies;
    constructor() {
        super({
            key: 'gameplay',
        });
    }

    create() {
        this.bullets = this.physics.add.group();
        this.player = new Player(this, WIDTH*0.5, HEIGHT*0.8, 'sprites', 5, this.bullets.add.bind(this.bullets), this.bullets.remove.bind(this.bullets));
        this.enemies = this.physics.add.group();
        const enemy = this.physics.add.sprite(WIDTH * 0.5, HEIGHT * 0.1, 'sprites', 0);
        this.enemies.add(enemy);

        const overlapEnemyAndBullet = (enemy, bullet) => {
            this.bullets.remove(bullet, true, true);
            this.enemies.remove(enemy, true, true);
        }
        this.physics.add.overlap(this.enemies, this.bullets, overlapEnemyAndBullet);
    }
    
    update() {
        
    }
}