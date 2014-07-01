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
        this.movingAngle = 1;
        //this.movingAngle = (this.moveingAngle + Math.PI * 4) % (Math.PI * 2);
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
        var root;
        var result1;
        var result2;
        //top
        a = 1;
        b = -2 * this.x;
        c = this.x * this.x + (topY - this.y) * (topY - this.y) - this.radius * this.radius;
        root = b * b - 4 * a * c;
        if (root >= 0) {
            result1 = (-b - Math.sqrt(root)) / (2 * a);
            result2 = (-b + Math.sqrt(root)) / (2 * a);
            if (result1 >= leftX-this.radius && result2 <= rightX+this.radius) {
                collideSpot[0] = 1;
            }
        }
        //right
        a = 1;
        b = -2 * this.y;
        c = this.y * this.y + (rightX - this.x) * (rightX - this.x) - this.radius * this.radius;
        root = b * b - 4 * a * c;
        if (root >= 0) {
            result1 = (-b - Math.sqrt(root)) / (2 * a);
            result2 = (-b + Math.sqrt(root)) / (2 * a);
            if (result1 >= topY-this.radius && result2 <= botY+this.radius) {
                collideSpot[1] = 1;
            }
        }
        //bottom
        a = 1;
        b = -2 * this.x;
        c = this.x * this.x + (botY - this.y) * (botY - this.y) - this.radius * this.radius;
        root = b * b - 4 * a * c;
        if (root >= 0) {
            result1 = (-b - Math.sqrt(root)) / (2 * a);
            result2 = (-b + Math.sqrt(root)) / (2 * a);
            if (result1 >= leftX-this.radius && result2 <= rightX+this.radius) {
                collideSpot[2] = 1;
            }
        }
        //left
        a = 1;
        b = -2 * this.y;
        c = this.y * this.y + (leftX - this.x) * (leftX - this.x) - this.radius * this.radius;
        root = b * b - 4 * a * c;
        if (root >= 0) {
            result1 = (-b - Math.sqrt(root)) / (2 * a);
            result2 = (-b + Math.sqrt(root)) / (2 * a);
            if (result1 >= topY-this.radius && result2 <= botY+this.radius) {
                collideSpot[3] = 1;
            }
        }

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