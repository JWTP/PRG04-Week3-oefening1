var Ball = (function () {
    function Ball() {
        this.ballWidth = 40;
        this.ballHeight = 40;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.posX = (window.innerWidth / 2);
        this.posY = (window.innerHeight / 2);
        this.speedX = Math.ceil(Math.random() * 10);
        this.speedY = Math.ceil(Math.random() * 10);
        this.move();
    }
    Ball.prototype.reset = function () {
        this.posX = (window.innerWidth / 2);
        this.posY = (window.innerHeight / 2);
    };
    Ball.prototype.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        if (this.posX < 0) {
            this.reset();
        }
        if (this.posX > innerWidth - 40) {
            this.reset();
        }
        if (this.posY < 0) {
            this.speedY = -this.speedY;
        }
        if (this.posY > innerHeight - 40) {
            this.speedY = -this.speedY;
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Ball;
}());
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.paddleWidth = 25;
        this.paddleHeight = 100;
        this.speedYLeftUp = 0;
        this.speedYLeftDown = 0;
        this.speedYRightUp = 0;
        this.speedYRightDown = 0;
        this.upKeyLeft = 87;
        this.downKeyLeft = 83;
        this.upKeyRigth = 38;
        this.downKeyRight = 40;
        this.divLeft = document.createElement("paddle");
        document.body.appendChild(this.divLeft);
        this.posXLeft = innerWidth - innerWidth;
        this.posYLeft = ((innerHeight - this.divLeft.clientHeight) / 2);
        this.divRight = document.createElement("paddle");
        document.body.appendChild(this.divRight);
        this.posXRigth = (innerWidth - this.divRight.clientWidth);
        this.posYRight = ((innerHeight - this.divRight.clientHeight) / 2);
        window.addEventListener("keydown", function (e) { return _this.onKeyDownLeft(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUpLeft(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDownRight(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUpRight(e); });
        this.move();
    }
    Paddle.prototype.move = function () {
        this.posYLeft = this.posYLeft - this.speedYLeftUp + this.speedYLeftDown;
        this.divLeft.style.transform = "translate(" + this.posXLeft + "px, " + this.posYLeft + "px)";
        this.posYRight = this.posYRight - this.speedYRightUp + this.speedYRightDown;
        this.divRight.style.transform = "translate(" + this.posXRigth + "px, " + this.posYRight + "px)";
    };
    Paddle.prototype.onKeyDownRight = function (event) {
        switch (event.keyCode) {
            case 38:
                if (this.posYRight < 0) {
                    this.speedYRightUp = 0;
                }
                else {
                    this.speedYRightUp = 7.5;
                }
                break;
            case 40:
                if (this.posYRight > innerHeight - this.paddleHeight) {
                    this.speedYRightDown = 0;
                }
                else {
                    this.speedYRightDown = 7.5;
                }
                break;
        }
    };
    Paddle.prototype.onKeyUpRight = function (event) {
        this.speedYRightDown = this.speedYRightUp = 0;
    };
    Paddle.prototype.onKeyDownLeft = function (event) {
        switch (event.keyCode) {
            case 87:
                if (this.posYLeft < 0) {
                    this.speedYLeftUp = 0;
                }
                else {
                    this.speedYLeftUp = 7.5;
                }
                break;
            case 83:
                if (this.posYLeft > innerHeight - this.paddleHeight) {
                    this.speedYLeftDown = 0;
                }
                else {
                    this.speedYLeftDown = 7.5;
                }
                break;
        }
    };
    Paddle.prototype.onKeyUpLeft = function (event) {
        this.speedYLeftUp = this.speedYLeftDown = 0;
    };
    return Paddle;
}());
var Game = (function () {
    function Game() {
        this.b = new Ball();
        this.pLeft = new Paddle();
        this.pRight = new Paddle();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.b.move();
        this.pLeft.move();
        this.pRight.move();
        this.collisionBallAndPaddeLeft();
        this.collisionBallAndPaddeRight();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.collisionBallAndPaddeLeft = function () {
        if (this.pLeft.posXLeft < this.b.posX + this.b.ballWidth &&
            this.pLeft.posXLeft + this.pLeft.paddleWidth > this.b.posX &&
            this.pLeft.posYLeft < this.b.posY + this.b.ballHeight &&
            this.pLeft.posYLeft + this.pLeft.paddleHeight > this.b.posY) {
            console.log("collision");
            this.b.speedX = -this.b.speedX;
        }
        else {
        }
    };
    Game.prototype.collisionBallAndPaddeRight = function () {
        if (this.pRight.posXRigth < this.b.posX + this.b.ballWidth &&
            this.pRight.posXRigth + this.pRight.paddleWidth > this.b.posX &&
            this.pRight.posYRight < this.b.posY + this.b.ballHeight &&
            this.pRight.posYRight + this.pRight.paddleHeight > this.b.posY) {
            console.log("collision");
            this.b.speedX = -this.b.speedX;
        }
        else {
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map