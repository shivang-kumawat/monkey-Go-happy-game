
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  createCanvas(400,400);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = 6;
  
  console.log(ground.x);
  
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
 
   bananaGroup=createGroup();
   obstacleGroup=createGroup();
}


function draw() {
background(250);
 if (gameState===PLAY){
  
    ground.x = ground.width/2;
   
 var survivalTime=0;
  
  text("survivalTime:",100,50);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12 ;
    
  }
   monkey.velocityY = monkey.velocityY +0.8;
   monkey.collide(invisibleGround);
 
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }

  if(monkey.isTouching(obstacleGroup)){
    monkey.destroy();
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    gameState=END;
  }
     
    
  
  food();
  obstacle();
   drawSprites();
 }
   
 if(gameState===END){
   text("GameOver",150,200);
 }
 
}    
  
  


function food(){
  
  if(frameCount% 80 ===0){
    var banana = createSprite(200,200,10,10);
     banana.addImage(bananaImage);
     banana.scale=0.1;
      banana.lifetime = 100;
    banana.velocityX=-2;
    var rand=Math.round(random(120,200));
   
    bananaGroup.add(banana);
    
  }
}

function obstacle(){
  
if(frameCount% 300 ===0){
    var obstacle = createSprite(400,310,10,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.2;
      obstacle.lifetime = 400;
    obstacle.velocityX=-2;
    var rand=Math.round(random(120,200));
   
    obstacleGroup.add(obstacle);
    
  }
}



