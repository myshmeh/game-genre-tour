class Bullet extends Phaser.Physics.Arcade.Sprite {
    speed;
    removeSelf;
    constructor(scene, x, y, source, frame, speedVector, removeSelf) {
        super(scene, x, y, source, frame);
        this.speed = speedVector;
        this.removeSelf = removeSelf;
        this.setScale(0.2, 0.5);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.events.on('update', this.update, this);
    }

    update() {
        if (this.isDestroryed()) return;
        if (this.isOutOfBoundary()) {
            this.removeSelf(this, true, true);
            return;
        }
        this.setVelocity(this.speed.x, this.speed.y);
    }

    isDestroryed() {
        return this.body === undefined;
    }

    isOutOfBoundary() {
        if (!this.body) return true;
        return this.x < -this.body.halfWidth ||
            this.x > WIDTH + this.body.halfWidth ||
            this.y < -this.body.halfHeight ||
            this.y > HEIGHT + this.body.halfHeight;
    }
}