class GamePlay extends Phaser.Scene {
    player;
    playerBullets;
    enemies;
    enemyBullets;
    enemySpawnHandler;
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

        const overlapEnemyAndBullet = (enemy, bullet) => {
            this.playerBullets.remove(bullet, true, true);
            enemy.takeDamage(bullet.power);
        }
        this.physics.add.overlap(this.enemies, this.playerBullets, overlapEnemyAndBullet);

        const overlapPlayerAndBullet = (player, bullet) => {
            player.takeDamage(bullet.power);
            this.enemyBullets.remove(bullet, true, true);
        };
        this.physics.add.overlap(this.player, this.enemyBullets, overlapPlayerAndBullet);

        const overlapPlayerAndEnemy = (player, enemy) => {
            player.takeDamage(enemy.bodyPower);
            enemy.kill();
        }
        this.physics.add.overlap(this.player, this.enemies, overlapPlayerAndEnemy);
    }
    
    update() {
        if (this.player.isNotAlive()) {
            this.scene.start('gameOver');
        }
    }
}