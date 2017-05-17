/// <reference path="ball.ts"/>
/// <reference path="paddle.ts"/>

class Game {
    
    // geef hier de ball instance een naam
    // ...
    b:Ball;
    pLeft:Paddle;
    pRight:Paddle;

    
    constructor() {
        
        // maak hier een ball instance
        // ...
        
        this.b = new Ball();
        this.pLeft = new Paddle();
        this.pRight = new Paddle();
           
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){
        // roep hier de move functie van de bal aan
        ///
       
        this.b.move();
        this.pLeft.move();
        this.pRight.move();
        this.collisionBallAndPaddeLeft();
        this.collisionBallAndPaddeRight()
        
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private collisionBallAndPaddeLeft(){
        if (this.pLeft.posXLeft < this.b.posX + this.b.ballWidth &&
                this.pLeft.posXLeft + this.pLeft.paddleWidth > this.b.posX &&
                this.pLeft.posYLeft < this.b.posY + this.b.ballHeight &&
                this.pLeft.posYLeft + this.pLeft.paddleHeight > this.b.posY) {
                    console.log("collision")
                    this.b.speedX = -this.b.speedX;
                    
        }else{
            // console.log("nope")
        }
    }
    private collisionBallAndPaddeRight(){
        if (this.pRight.posXRigth < this.b.posX + this.b.ballWidth &&
                this.pRight.posXRigth + this.pRight.paddleWidth > this.b.posX &&
                this.pRight.posYRight < this.b.posY + this.b.ballHeight &&
                this.pRight.posYRight + this.pRight.paddleHeight > this.b.posY) {
                    console.log("collision")
                    this.b.speedX = -this.b.speedX
                    
        }else{
            // console.log("nope")
        }
    }
    



} 