var canvas = document.getElementById('gamePage');
var ctx = canvas.getContext('2d');
var length = 1024;
var height = 640;
var gLoop;

var BRICK_LENGTH = 50;
var BRICK_HEIGHT = 25;
var MAX_BRICK_HORIZONTAL = 10;
var MAX_BRICK_VERTICLE = 8;
var brick_x = (length - ((BRICK_LENGTH + 1) * MAX_BRICK_HORIZONTAL - 1)) / 2;
var brick_y = (height - ((BRICK_HEIGHT + 1) * MAX_BRICK_VERTICLE - 1)) / 3;

var bar = new Bar(100, 20, 10, (length - 100) / 2, 500);
var ball = new Ball(bar.getX() + bar.getLength() / 2, bar.getY() - 10, 10, 10);
//var b = new BaseBrick(100, 100, 100, 100);
//var b2 = new DoubleBrick(200, 200, 100, 100);

var bricks = [];

for(var i=0;i<MAX_BRICK_VERTICLE;i++){
    for (var j = 0; j < MAX_BRICK_HORIZONTAL; j++) {
        if (i % 2 == 0) {
            bricks.push(new BaseBrick(brick_x + j * (BRICK_LENGTH + 1), brick_y + i * (BRICK_HEIGHT + 1), BRICK_LENGTH, BRICK_HEIGHT));
        } else {
            bricks.push(new DoubleBrick(brick_x + j * (BRICK_LENGTH + 1), brick_y + i * (BRICK_HEIGHT + 1), BRICK_LENGTH, BRICK_HEIGHT));
        }
            //console.log(brick_x + j * (brick_x + 1));
    }
}

    //console.log(b.getX());
var clear = function () {
    ctx.fillStyle = "#d0e7f9";
    ctx.beginPath();
    ctx.rect(0, 0, length, height);
    ctx.closePath();
    ctx.fill();
};

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    var contactSpot = bar.collide(length, height);
    if (code === 37) { //left key
        bar.moveLeft();
}
    if (code === 39) { //right key
        bar.moveRight();
}
};

window.onkeyup = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 37) {
        bar.stopMovingLeft();
    }
    if (code === 39) {
        bar.stopMovingRight();
    }
    if (code === 32 && ball.getStationary()) {
        ball.beginMoving(bar);
    }
};

var drawBricks = function () {
    for (var i = 0; i < bricks.length; i++) {
        //var brick = bricks[i];
        //console.log(bricks[i]);
        bricks[i].draw(ctx);
    }
}

var gameLoop = function () {
    clear();
    bar.draw(ctx);
    ball.draw(ctx);
    drawBricks();
    //b.draw(ctx);
    bar.move(length,height);
    ball.move(length, height, bar, bricks);
    gLoop = setTimeout(gameLoop, 1000 / 50);
};
gameLoop();