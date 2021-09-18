var bg;
var narutoimg, naruto;

function preload() {
  narutoimg = loadAnimation("naruto1.png","naruto2.png");
}
function setup() {
  createCanvas(500,790);
 
  naruto = createSprite(250,250,50,50);
  naruto.addAnimation("running", narutoimg);
  naruto.scale = 0.5;

}

function draw() {
  background("black");
  
  drawSprites();
}