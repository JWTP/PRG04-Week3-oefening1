class Ball {
    
    private div : HTMLElement;
    public posX : number;
    public posY : number;
    public ballWidth:number =40;
    public ballHeight:number =40;
    
    public speedX : number;
    public speedY : number;
    
    constructor() {
        // creeer een div element
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        
        
        // start positie
        this.posX = (window.innerWidth/2);
        this.posY = (window.innerHeight/2);
        
        // start snelheid
        this.speedX = Math.ceil(Math.random() * 10);
        this.speedY = Math.ceil(Math.random() * 10);
        

        // plaatsen
        this.move();
    }

    private reset(){
        this.posX = (window.innerWidth/2);
        this.posY = (window.innerHeight/2);
    }
    
    public move() : void {
        this.posX += this.speedX;
        this.posY += this.speedY;
        
        // als we buiten beeld gaan dan de snelheid omdraaien
        // gebruik window.innerWidth en window.innerHeight om te zien of we nog in beeld zijn
        // let op dat de bal 40 pixels breed en hoog is

        if(this.posX < 0 ){
            this.reset();
        }if(this.posX >innerWidth-40){
            this.reset();
        }if(this.posY < 0 ){
            this.speedY = -this.speedY;
        }if(this.posY > innerHeight-40){
            this.speedY = -this.speedY;
        }
        
        // transform gebruiken om de positie op het scherm aan te passen
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
}