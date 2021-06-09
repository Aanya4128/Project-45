var bg,bgImg;
var star,starImg 
var alienplanet,alienplanetImg 
var rocket,rocketImg 
var asteroid, asteroidImg
var alien, alienImg

var aliensGroup, asteroidsGroup, starsGroup

var fuel= 9000;

var gameState= "fight"
var speed=3;

 
function preload(){
  
  starImg = loadImage("assets/star.png")
  alienImg = loadImage("assets/alien.png")
  alienplanetImg = loadImage("assets/alienplanet.png")
  asteroidImg = loadImage("assets/asteroid.png")
  rocketImg = loadImage("assets/rocket.png");
  bgImg = loadImage("assets/Space.jpeg");
  
   
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  player = createSprite (10, displayHeight-300, 50, 50);
  player.addImage(rocketImg)
  player.scale= 0.3

}

function draw() {
  background(0); 
  image(bgImg,-800,0,displayWidth*10,displayHeight);
  if (keyDown(RIGHT_ARROW)){
    player.x=player.x+3;
  }
  if (keyDown(LEFT_ARROW)){
    player.x=player.x+3;

  }
  if (keyDown(UP_ARROW)){
    player.y=player.y+3;
  }

  if (keyDown(DOWN_ARROW)){
    player.y=player.y+3;
  }

  fuel=fuel-speed;

 camera.position.x=player.x;
 camera.position.y=player.y;

 spawnasteroid();
 if(keyDown("space")){
 }

 showPlanet ();
  drawSprites();
  textSize(12);
  fill("white")
  text(fuel,player.x,player).y-35

}
function spawnasteroid(){
  if(frameCount%100==0){
    asteroid=createSprite(player.x,player.y-20);
    asteroid.addImage(asteroidImg);
    asteroid.scale=0.5
    asteroid.velocityX=-8;
  }
}

function showPlanet(){
  if (player.x>8000){
planet+createSprite(8000,200);
  }
  }

