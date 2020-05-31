class Bishop extends Enemy {
    power;
    speed;
    getPlayerPosition;
    constructor(scene, x, y, addBullet, removeBullet, removeSelf, getPlayerPosition, behaviours)
    {
        super(scene, x, y, 'sprites', 2, addBullet, removeBullet, removeSelf, behaviours);
        this.getPlayerPosition = getPlayerPosition;
        this.power = 1;
        this.speed = 75;
    }

    launch() {
        const bullet = new BulletAimingPlayer(this.scene, this.x, this.y, 'sprites', 2,
            this.getPlayerPosition, this.speed, this.removeBullet, this.power);
        this.addBullet(bullet);
    }
}