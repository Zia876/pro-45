class Form{
    constructor(){
        this.input  = createInput("Name : ");
        this.title = createElement("h2");
        this.PlayB = createButton("Play");
        this.startB = createButton("Start Match");
    }

    display(){
        this.title.position(200,100)
        this.startB.position(100,100)
        this.PlayB.position(400,400);
        this.input.position(300,300)
        this.title.html("ZOMBIE INVASION")
        this.startB.hide();
        this.PlayB.mousePressed(()=>{
            this.startB.show();
            this.input.hide();
            this.title.hide();
            this.PlayB.hide();
            gameState = 1
        })
        this.startB.mousePressed(()=>{
            this.startB.hide();
            gameState = 2;
        })
    }
}