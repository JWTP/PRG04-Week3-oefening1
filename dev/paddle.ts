class Paddle {
   
    // create paddles
    private divLeft : HTMLElement;
    private divRight : HTMLElement;

    //location paddleleft
    public posXLeft : number;
    public posYLeft : number;

    //location paddleRight
    public posXRigth : number;
    public posYRight : number;

    // width & height
    public paddleWidth:number = 25;
    public paddleHeight:number = 100;

    //keyboard input Left
    private speedYLeftUp : number = 0;
    private speedYLeftDown : number = 0;

    // keyboard inpu right
    private speedYRightUp : number = 0;
    private speedYRightDown : number = 0;

    // keys left
    private upKeyLeft : number = 87;
    private downKeyLeft : number = 83;

    // keys right
    private upKeyRigth : number = 38;
    private downKeyRight : number = 40;

    constructor() {
            // paddle left
            this.divLeft = document.createElement("paddle");
            document.body.appendChild(this.divLeft);
        
            this.posXLeft = innerWidth-innerWidth;
            this.posYLeft = ((innerHeight - this.divLeft.clientHeight)/2);
            
            // paddle right
            this.divRight = document.createElement("paddle");
            document.body.appendChild(this.divRight);
        
            this.posXRigth = (innerWidth - this.divRight.clientWidth) ;
            this.posYRight = ((innerHeight - this.divRight.clientHeight)/2);

            window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDownLeft(e));
            window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUpLeft(e));
            
            window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDownRight(e));
            window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUpRight(e));

            this.move();
    }
    
    public move(): void{
        // left
        this.posYLeft = this.posYLeft - this.speedYLeftUp + this.speedYLeftDown;
        this.divLeft.style.transform = "translate("+this.posXLeft+"px, "+this.posYLeft+"px)";
        
        //right
        this.posYRight = this.posYRight - this.speedYRightUp + this.speedYRightDown;
        this.divRight.style.transform = "translate("+this.posXRigth+"px, "+this.posYRight+"px)"; 
    }

    private onKeyDownRight(event:KeyboardEvent):void{
        switch(event.keyCode){
            case 38:
                if(this.posYRight < 0){
                    this.speedYRightUp = 0;
                }else{
                this.speedYRightUp = 7.5;
                }break;
            case 40:
                if(this.posYRight > innerHeight-this.paddleHeight){
                    this.speedYRightDown = 0;
                }else{
                this.speedYRightDown = 7.5;
                }break;
        }
    }

    private onKeyUpRight(event:KeyboardEvent):void {
        this.speedYRightDown = this.speedYRightUp = 0;
    }

    private onKeyDownLeft(event:KeyboardEvent):void{
        switch(event.keyCode){
            case 87:
                if(this.posYLeft < 0){
                    this.speedYLeftUp = 0;
                }else{
                this.speedYLeftUp = 7.5;
                }break;
            case 83:
                if(this.posYLeft > innerHeight-this.paddleHeight){
                    this.speedYLeftDown = 0;
                }else{
                this.speedYLeftDown = 7.5;
                }break;
        }
    }

    private onKeyUpLeft(event:KeyboardEvent):void{
        this.speedYLeftUp = this.speedYLeftDown = 0
    }

}

   