var ground, groundImage;
var seaImg
var barco
function preload(){

seaImg = loadImage("sea.png");
barco = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}
function setup(){
  createCanvas(1400,800);
  
  ground = createSprite(300,300, 600,600)
  ground.addImage("sea.png",seaImg)
  barco = createSprite(600,400,50,50)
  barco.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  
  barco.scale = 0.4

  ground.velocityX = -5

}
function draw() {
  background("blue");
    drawSprites();

    if(ground.x < 0){
ground.x = ground.width/2;

    }


}
