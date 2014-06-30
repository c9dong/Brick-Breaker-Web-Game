function Bar(length, width, speed, x, y) {
    this.length = length;
    this.width = width;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.moving = false;
    this.colliding = false;
    this.isMovingLeft = false;
    this.isMovingRight = false;


    this.draw = function (ctx) {
        ctx.fillStyle = "#AAAAAA";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.length, this.width);
        ctx.closePath();
        ctx.fill();
    };

    this.moveLeft = function () {
        this.isMovingRight = false;
        this.isMovingLeft = true;
    };

    this.moveRight = function () {
        this.isMovingLeft = false;
        this.isMovingRight = true;
    };

    this.stopMovingLeft = function () {
        this.isMovingLeft = false;
    };

    this.stopMovingRight = function () {
        this.isMovingRight = false;
    }

    this.stop = function () {
        this.isMovingLeft = false;
        this.isMovingRight = false;
    }
    this.move = function (width, height) {
        var contactSpot = this.collide(width, height);
        if (this.isMovingLeft && contactSpot[0] == 1) {
            this.stop();
        } else if (this.isMovingRight && contactSpot[1] == 1) {
            this.stop();
        } else {
            this.colliding = false;
            if (this.isMovingLeft) {
                this.x = this.x - this.speed;
            } else if (this.isMovingRight) {
                this.x = this.x + this.speed;
            }
        }
    };
    
    this.collide = function (width, height) {
        var contactSpot = [0,0]; //index 0 = left, index 1 = right
        if (this.x <= 0) {
            this.colliding = true;
            this.x = 0;
            contactSpot[0] = 1;
        }
        if (this.x + this.length >= width) {
            this.colliding = true;
            this.x = width - this.length;
            contactSpot[1] = 1;
        }
        return contactSpot;
    };

    this.setLength = function (length) {
        this.length = length;
    };
     
    this.setWidth = function (width) {
        this.width = width;
    };

    this.setSpeed = function (speed) {
        this.speed = speed;
    };

    this.setMoving = function (moving) {
        this.moving = moving;
    };

    this.getLength = function () {
        return this.length;
    };

    this.getWidth = function () {
        return this.width;
    };

    this.getSpeed = function () {
        return this.speed;
    };

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };

    this.getMoving = function () {
        return this.moving;
    };
}