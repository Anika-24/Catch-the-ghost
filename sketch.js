var ghost,door,climber,scarySound,tower,doorGroup,climberGroup;
var gameState="PLAY";


function preload(){
  
  ghostStandingImg=loadImage("ghost-standing.png");
  ghostJumpingImg=loadImage("ghost-jumping.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  towerImg=loadImage("tower.png");
  scarySound=loadSound("spooky.wav");
  
  
}
function setup(){
  
  createCanvas(600,470);
  
  
  climberGroup=new Group();
  doorGroup=new Group();
  tower=createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=4;

  ghost=createSprite(300,300,20,20);
  ghost.addImage(ghostStandingImg);
  ghost.scale=0.3;
  
}
function draw(){
  background(0);

  
 
  if(gameState==="PLAY"){
    
     
  if(tower.y>400){
    tower.y=300;
  }
    
  if(keyDown("space")){
    ghost.velocityY=-12;
    
  }
  //add gravity
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(keyDown("right")){
    ghost.x=ghost.x+5;
    }
  
  if(keyDown("left")){
    ghost.x=ghost.x-5;
  }
  }
  
    spawnDoors();
  
  if(climberGroup.isTouching(ghost)){
     ghost.velocityY=0;
  }
  
  if(ghost.y>600){
    gameState="END";
  }
  
  
  
  
//text(mouseX+","+mouseY,mouseX,mouseY);  
  drawSprites();
if(gameState==="END"){
  fill("yellow");
  textSize(50);
  stroke("yellow");
  text("GAME OVER",180,200);
  
}
}


function spawnDoors(){
  
  
  if(frameCount%80===0){
    
    door=createSprite(200,-50);
    door.addImage(doorImg);
    
    climber=createSprite(200,10);
    climber.addImage(climberImg);
    
    var invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.velocityY=8;
    invisibleBlock.lifetime=70;
    //invisibleBlock.visible=false
    
    door.x=Math.round(random(120,400));
    door.velocityY=8;
    climber.velocityY=8;
 
    doorGroup.add(door);
    climberGroup.add(climber);
    door.lifetime=70;
    climber.lifetime=70;
    door.x=climber.x;
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+2;
  }
  
  
  
  
  
  
  
  
  
  
  
}
  