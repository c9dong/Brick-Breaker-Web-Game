function DoubleBrick(x, y, length, height) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.height = height;
    this.visible = true;
    this.exist = true;
    this.live = 2;

    this.hit = function () {
        if (this.live == 1) {
            this.exist = false;
            this.visible = false;
        } else {
            this.live--;
        }
    }

    this.draw = function (ctx) {
        if (this.exist && this.visible) {
            if (this.live == 2) {
                ctx.fillStyle = "#ABAAAA";
            } else {
                ctx.fillStyle = "#000000";
            }
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.length, this.height);
            ctx.closePath();
            ctx.fill();
        }
    }
}

DoubleBrick.prototype = new BaseBrick();