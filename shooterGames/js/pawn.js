class Pawn extends Enemy {
    power;
    vSpeed;
    constructor(scene, x, y, addBullet, removeBullet, removeSelf, behaviours)
    {
        super(scene, x, y, 'sprites', 0, addBullet, removeBullet, removeSelf, behaviours);
        this.power = 1;
        this.vSpeed = 75;
    }

    launch() {
        const bullet = new Bullet(this.scene, this.x, this.y, 'sprites', 0, 
            {x: 0, y: this.vSpeed}, this.removeBullet, this.power);
        this.addBullet(bullet);
    }
}