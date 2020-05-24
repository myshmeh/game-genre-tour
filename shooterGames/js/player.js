class Player extends Phaser.Physics.Arcade.Sprite {
    scene;
    inputs;
    addBullet;
    removeBullet;
    bulletWaitTime;
    constructor(scene, x, y, source, frame, addBullet, removeBullet) {
        super(scene, x, y, source, frame);
        this.addBullet = addBullet;
        this.removeBullet = removeBullet;
        this.scene = scene;
        this.bulletWaitTime = PLAYER_BULLET_WAITTIME;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.events.on('update', this.update, this);
        this.inputs = scene.input.keyboard.addKeys('W,A,S,D,J,K,L');
        this.play('playerIdle');
        this.body.maxSpeed = PLAYER_SPEED_MAX;
    }

    update(_, deltaTime) {
        let acceleration = new Phaser.Math.Vector2(0, 0);

        this.bulletWaitTime += deltaTime;
        this.handleInputs(acceleration);
        this.move(acceleration);
        this.constrain(
            deltaTime,
            PLAYER_CONSTRAIN_HMIN + this.body.halfWidth,
            PLAYER_CONSTRAIN_HMAX - this.body.halfWidth,
            PLAYER_CONSTRAIN_VMIN + this.body.halfHeight,
            PLAYER_CONSTRAIN_VMAX - this.body.halfHeight);
    }

    handleInputs(acceleration) {
        if (this.inputs.W.isDown) {
            acceleration.y += -PLAYER_ACC;
        }
        if (this.inputs.A.isDown) {
            acceleration.x += -PLAYER_ACC
        }
        if (this.inputs.S.isDown) {
            acceleration.y += PLAYER_ACC;
        }
        if (this.inputs.D.isDown) {
            acceleration.x += PLAYER_ACC;
        }
        if (this.inputs.L.isDown && this.bulletWaitTime > PLAYER_BULLET_WAITTIME) {
            const bullet = new Bullet(
                this.scene,
                this.x,
                this.y,
                'sprites',
                3,
                BULLET_SPEED_VECTOR,
                this.removeBullet,
            );
            this.addBullet(bullet);
            this.bulletWaitTime = 0;
        }
    }

    move(acceleration) {
        this.setAcceleration(acceleration.x, acceleration.y);
        const cond = this.inputs.W.isDown || this.inputs.A.isDown || this.inputs.S.isDown || this.inputs.D.isDown;
        if (!cond) this.setVelocity(
            this.body.velocity.x * PLAYER_FRICTION_RATE,
            this.body.velocity.y * PLAYER_FRICTION_RATE);
    }

    constrain(deltaTime, horizontalMin, horizontalMax, verticalMin, verticalMax) {
        deltaTime = deltaTime / 1000; // make deltaTime in sec
        const velXPerFrame = this.body.velocity.x * deltaTime;
        const velYPerFrame = this.body.velocity.y * deltaTime;
        if (this.x + velXPerFrame < horizontalMin) {
            this.x = horizontalMin;
            this.setVelocityX(0);
        }
        if (this.x + velXPerFrame > horizontalMax) {
            this.x = horizontalMax;
            this.setVelocityX(0);
        }
        if (this.y + velYPerFrame < verticalMin) {
            this.y = verticalMin;
            this.setVelocityY(0);
        }
        if (this.y + velYPerFrame > verticalMax) {
            this.y = verticalMax;
            this.setVelocityY(0);
        }
    }
}
