function Ball(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.movingAngle = 90;
    this.stationary = true;
    this.radius = radius;
    this.moving = false;

    this.draw = function (ctx) {
        ctx.fillStyle = "#AAAAAA";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    };

    this.beginMoving = function (bar) {
        this.moveingAngle = Math.acos(bar.getSpeed() / this.speed);
        this.stationary = false;
    };

    this.move = function (width,height,bar,blocks) {
        if (this.stationary == false) {
            this.x += Math.cos(this.movingAngle) * this.speed;
            this.y -= Math.sin(this.movingAngle) * this.speed;
            var collideSpot = this.collide(width, height, bar, blocks);
            if (collideSpot[0] == 1 || collideSpot[2] == 1) {
                this.movingAngle = (this.movingAngle * -1+4*Math.PI) % (2 * Math.PI);
                //console.log(this.movingAngle);
            }
            if (collideSpot[1] == 1 || collideSpot[3] == 1) {
                this.movingAngle = (5*Math.PI - this.movingAngle) % (2 * Math.PI);
                //console.log(this.movingAngle);
            }
        } else {
            this.x = bar.getX() + bar.getLength() / 2;
        }
    };

    this.collide = function (width, height, bar, blocks) {
        var collideSpot = [0, 0, 0, 0]; //index 0 = top, index 1 = right, index 2 = bottom, index 3 = left
        //Bound Collide
        if (this.x-this.radius <= 0) {
            this.x = this.radius+1;
            collideSpot[3] = 1;
        }
        if (this.y-this.radius <= 0) {
            this.y = this.radius+1;
            collideSpot[0] = 1;
        }
        if (this.x + this.radius >= width) { 
            this.x = width - this.radius - 1;
            collideSpot[1] = 1;
        }
        if (this.y + this.radius >= height) {
            this.y = height - this.radius - 1;
            collideSpot[2] = 1;
        }
        /***************Bar Collide ******************/
        
        var leftX = bar.getX();
        var rightX = bar.getX() + bar.getLength();
        var topY = bar.getY();
        var botY = bar.getY() + bar.getWidth();
        var a;
        var b;
        var c;
        var result1;
        var result2;
        //top
        a = 1;
        b = -2 * this.x;
        c = this.x * this.x + (topY - this.y) * (topY - this.y) - this.radius * this.radius;
        if (b * b - 2 * a * c >= 0) {

        }

        //var barCenterX = (bar.getLength()) / 2;
        //var barCenterY = (bar.getWidth()) / 2;
        //if (Math.abs(this.y - bar.getY()) <= (this.radius+barCenterY) && Math.abs(this.x - bar.getX()) <= (this.radius+barCenterX)) {
        //    //console.log("hit");
        //    if (this.movingAngle >= Math.PI && this.movingAngle <= 2 * Math.PI) {
                
        //    }
        //}
        //if (this.x + this.radius >= bar.getX() && this.x - this.radius <= bar.getX() + bar.getLength()) {
        //    console.log("in bar");
        //    if (this.movingAngle >= Math.PI && this.movingAngle <= 2 * Math.PI) {
        //        if ((this.y + this.radius >= bar.getY()) && (this.y + this.radius <= bar.getY() + bar.getWidth())) {
        //            this.y = bar.getY() - 1;
        //            collideSpot[0] = 1;
        //        }
        //    } else {
        //        if ((this.y - this.radius <= bar.getY + bar.getWidth()) && (this.y - this.radius >= bar.getY())) {
        //            this.y = bar.getY() + bar.getWidth() + 1;
        //            collideSpot[2] = 1;
        //        }
        //    }
        //}
        return collideSpot;
    };

    this.getRadius = function () {
        return this.radius;
    };

    this.getStationary = function () {
        return this.stationary;
    };

    this.setStationary = function (stationary) {
        this.stationary = stationary;
    };
};