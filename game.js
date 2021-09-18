class Game{
    constructor(){

    }
reg(){
    form = new Form
    form.display();
}
start(){
    player = new Player();
    player.display();
    if(frameCount%60 === 0){
        var zombies = new Zombie();
        zombies.display()
    }
}

}