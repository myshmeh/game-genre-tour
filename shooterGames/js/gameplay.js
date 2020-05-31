class GamePlay extends Phaser.Scene {
    player;
    playerBullets;
    enemies;
    enemyBullets;
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
        const enemy = new Pawn(this, WIDTH * 0.5, HEIGHT * 0.1, 
            this.enemyBullets.add.bind(this.enemyBullets), 
            this.enemyBullets.remove.bind(this.enemyBullets), 
            this.enemies.remove.bind(this.enemies), 
            [
                {time: 5010, action: 'move', args: {x: 0, y: 75}},
                {time: 6500, action: 'move', args: {x: 0, y: 0}},
                {time: 7000, action: 'launch', args: null},
                {time: 7500, action: 'move', args: {x: 0, y: -75}},
            ]);
        const enemy2 = new Knight(this, WIDTH * 0.5, HEIGHT * 0.1, 
            this.enemyBullets.add.bind(this.enemyBullets), 
            this.enemyBullets.remove.bind(this.enemyBullets), 
            this.enemies.remove.bind(this.enemies), 
            [
                {time: 10, action: 'move', args: {x: 0, y: 75}},
                {time: 1500, action: 'move', args: {x: 0, y: 0}},
                {time: 2000, action: 'launch', args: null},
                {time: 2500, action: 'move', args: {x: 0, y: -75}},
            ]);
        const enemy3 = new Bishop(this, WIDTH * 0.5, HEIGHT * 0.1, 
            this.enemyBullets.add.bind(this.enemyBullets), 
            this.enemyBullets.remove.bind(this.enemyBullets), 
            this.enemies.remove.bind(this.enemies),
            this.player.getPosition.bind(this.player), 
            [
                {time: 10, action: 'move', args: {x: 0, y: 75}},
                {time: 1500, action: 'move', args: {x: 0, y: 0}},
                {time: 2000, action: 'launch', args: null},
                {time: 2500, action: 'move', args: {x: 0, y: -75}},
            ]);
        const enemy4 = new Queen(this, WIDTH * 0.2, HEIGHT * 0.1, 
            this.enemyBullets.add.bind(this.enemyBullets), 
            this.enemyBullets.remove.bind(this.enemyBullets), 
            this.enemies.remove.bind(this.enemies),
            this.player.getPosition.bind(this.player), 
            [
                {time: 10, action: 'move', args: {x: 0, y: 75}},
                {time: 1500, action: 'move', args: {x: 0, y: 0}},
                {time: 2000, action: 'launch', args: null},
                {time: 2500, action: 'launch', args: null},
                {time: 2500, action: 'move', args: {x: 0, y: -75}},
            ]);
        this.enemies.add(enemy);
        this.enemies.add(enemy2);
        this.enemies.add(enemy3);
        this.enemies.add(enemy4);

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
            // game over
        }
    }
}