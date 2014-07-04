function BaseBrick(x,y,length,height) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.height = height;
    this.visible = true;
    this.exist = true;

    this.draw = function (ctx) {
        if (this.exist && this.visible) {
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.length, this.height);
            ctx.closePath();
            ctx.fill();
        }
    };

    this.hit = function () {
        this.exist = false;
        this.visible = false;
    }

    this.setLength = function (length) {
        this.length = length;
    };

    this.setHeight = function (height) {
        this.height = height;
    };

    this.setSpeed = function (speed) {
        this.speed = speed;
    };

    this.setMoving = function (moving) {
        this.moving = moving;
    };

    this.setVisible = function (visible) {
        this.visible = visible;
    };

    this.setExist = function (exist) {
        this.exist = exist;
    };

    this.getLength = function () {
        return this.length;
    };

    this.getHeight = function () {
        return this.height;
    };

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };
    
    this.getVisible = function () {
        return this.visible;
    };

    this.getExist = function () {
        return this.exist;
    };
}
