function BaseBrick(x,y,length,height) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.height = height;
    this.visible = true;
    this.exist = true;

    BaseBrick.prototype.draw = function (ctx) {
        if (this.exist && this.visible) {
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.length, this.height);
            ctx.closePath();
            ctx.fill();
        }
    };

    BaseBrick.prototype.hit = function () {
        this.exist = false;
        this.visible = false;
    }

    BaseBrick.prototype.setLength = function (length) {
        this.length = length;
    };

    BaseBrick.prototype.setHeight = function (height) {
        this.height = height;
    };

    BaseBrick.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };

    BaseBrick.prototype.setMoving = function (moving) {
        this.moving = moving;
    };

    BaseBrick.prototype.setVisible = function (visible) {
        this.visible = visible;
    };

    BaseBrick.prototype.setExist = function (exist) {
        this.exist = exist;
    };

    BaseBrick.prototype.getLength = function () {
        return this.length;
    };

    BaseBrick.prototype.getHeight = function () {
        return this.height;
    };

    BaseBrick.prototype.getX = function () {
        return this.x;
    };

    BaseBrick.prototype.getY = function () {
        return this.y;
    };
    
    BaseBrick.prototype.getVisible = function () {
        return this.visible;
    };

    BaseBrick.prototype.getExist = function () {
        return this.exist;
    };
}

