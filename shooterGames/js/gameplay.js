class GamePlay extends Phaser.Scene {
    player;
    playerBullets;
    enemies;
    enemyBullets;
    enemySpawnHandler;
    gameOver;
    explosionEmitter;
    constructor() {
        super({
            key: 'gameplay',
        });
    }

    create() {
        this.playerBullets = this.physics.add.group();
        this.player = new Player(this, WIDTH*0.5, HEIGHT*0.8, 'sprites', 5, this.playerBullets.add.bind(this.playerBullets), this.playerBullets.remove.bind(this.playerBullets));
        this.enemyBullets = this.physics.add.group();
        this.enemies = this.physics.add.group();
        this.enemySpawnHandler = new EnemySpawnHandler(this, this.enemies, this.player, this.enemyBullets, ENEMY_SPAWN_SCHEDULE);
        const explosion = this.add.particles('sprites');
        this.explosionEmitter = explosion.createEmitter({
            frame: [0, 1],
            frequency: 100,
            quantity: 10,
            scale: { start: 0.75, end: 0 },
            speed: { min: -150, max: 150 },
            lifespan: 450,
            rotate: {start: 0, end: 180},
            on: false
        });
        const explode = (x, y) => this.explosionEmitter.explode(Phaser.Math.RND.between(10, 20), x, y);

        const overlapEnemyAndBullet = (enemy, bullet) => {
            this.playerBullets.remove(bullet, true, true);
            enemy.takeDamage(bullet.power);
            explode(enemy.x, enemy.y);
        }
        this.physics.add.overlap(this.enemies, this.playerBullets, overlapEnemyAndBullet);

        const overlapPlayerAndBullet = (player, bullet) => {
            player.takeDamage(bullet.power);
            this.enemyBullets.remove(bullet, true, true);
            explode(player.x, player.y);
        };
        this.physics.add.overlap(this.player, this.enemyBullets, overlapPlayerAndBullet);

        const overlapPlayerAndEnemy = (player, enemy) => {
            player.takeDamage(enemy.bodyPower);
            enemy.kill();
            explode(player.x, player.y);
            explode(enemy.x, enemy.y);
        }
        this.physics.add.overlap(this.player, this.enemies, overlapPlayerAndEnemy);

        this.gameOver = false;

        const rect = this.add.image(0, 0, 'sprites', 5).setScale(WIDTH/32, HEIGHT/32).setOrigin(0);
        rect.setTint(0x222222);
        this.fadeOut(rect, 0, 1000, () => rect.destroy());
    }
    
    update() {
        if (this.player.isNotAlive() && !this.gameOver) {
            this.doGameOver();
        }
        if (!this.enemies.getLength() && this.enemySpawnHandler.isSpawnedAll()) {
            this.doGameClear();
        }
        console.log(this.enemies.getLength(), this.enemySpawnHandler.isSpawnedAll());
    }

    doGameOver() {
        this.gameOver = true;
        const rect = this.add.image(0, 0, 'sprites', 5).setScale(WIDTH/32, HEIGHT/32).setOrigin(0);
        rect.setTint(0x222222);
        rect.alpha = 0;
        rect.setDepth(Z_INDEX_DEEP);
        this.fadeIn(rect, 0, 2500, () => this.scene.start('gameOver'));
    }

    doGameClear() {
        this.gameOver = true;
        const rect = this.add.image(0, 0, 'sprites', 5).setScale(WIDTH/32, HEIGHT/32).setOrigin(0);
        rect.setTint(0x222222);
        rect.alpha = 0;
        rect.setDepth(Z_INDEX_DEEP);
        this.fadeIn(rect, 0, 4500, () => this.scene.start('gameClear'), 1, 'Quart.easeIn');
    }
}