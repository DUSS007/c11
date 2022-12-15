






var=ship-1.png;
var=sea.png;


function preload(){
Sea.png =loadImage("sae.png");

ship-1.png=loadImage("ship-1.png",);



}


function setup(){
  createCanvas(400,400);
  
  ship-1.png = createSprite(50, 160, 20, 50);
  sh
  ship-1.png.scale = 0.5;
  
  sea.png = createSprite(200, 180, 400, 20);
  sea.png.x = ground.width / 2;
  
}


function draw() {
  background("blue");
   
  

  

  drawSprites();

 
}
