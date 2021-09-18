var bgimg, bg;
var narutoimg, naruto, narutodownimg, narutodown, narutojumpimg, narutojump;
var obstacle1img, obstacle1, obstacle2img, obstacle2;

function preload() {
  narutoimg = loadAnimation("naruto1.png","naruto2.png");
  bgimg = loadImage("bg.png");
  obstacle1img = loadImage("obstacle1.png");
  obstacle2img = loadImage("obstacle2.png");
  narutodownimg = loadImage("naruto down.png");
  narutojumpimg = loadImage("naruto jump.png");
}
function setup() {
  createCanvas(1520,790);
 
  bg = createSprite(1520,380,50,50);
  bg.addImage(bgimg);
  bg.scale = 1.5;
  bg.velocityX = -14;

  naruto = createSprite(300,590,50,50);
  naruto.addAnimation("running", narutoimg);
  naruto.scale = 1;

  // obstacle1 = createSprite(1000,500, 20,20);
  // obstacle1.addImage(obstacle1img);
  // obstacle1.scale = 0.5;
  // obstacle1.velocityX = -14;

  // obstacle2 = createSprite(1000,600, 20,20);
  // obstacle2.addImage(obstacle2img);
  // obstacle2.scale = 0.7;
  // obstacle2.velocityX = -14;

  ground = createSprite(500,740,1000,20);
  ground.visible = false;
}

function draw() {
  background(bgimg);

  if(bg.x<10){
    bg.x = bg.width/2;
  }

  if(keyDown("space") && naruto.y >= 159){
    naruto.velocityY = -14;
  }
  naruto.velocityY = naruto.velocityY + 0.8
  naruto.collide(ground);
  
  
  drawSprites();
} 