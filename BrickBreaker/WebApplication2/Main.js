﻿var canvas = document.getElementById('gamePage');
var ctx = canvas.getContext('2d');
var length = 1024;
var height = 640;
var gLoop;

var bar = new Bar(100, 20, 10, (length - 100) / 2, 500);
var ball = new Ball(bar.getX() + bar.getLength() / 2, bar.getY() - 10, 10, 10);
var b = new BaseBrick(100, 100, 100, 100);
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

var gameLoop = function () {
    clear();
    bar.draw(ctx);
    ball.draw(ctx);
    b.draw(ctx);
    bar.move(length,height);
    ball.move(length, height, bar, b);
    gLoop = setTimeout(gameLoop, 1000 / 50);
};
gameLoop();