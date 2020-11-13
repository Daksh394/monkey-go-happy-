var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  
  
  //invisibleGround = createSprite(400,350,900,10);
  //invisibleGround.visible = false;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
    
  ground = createSprite(40,400,550,10);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  
  
  

  
}


function draw() {
  background("white")
  
if(keyDown("space") && monkey.y >= 300) {
      monkey.velocityY = -15;
    }
  monkey.velocityY = monkey.velocityY + 1

  console.log(ground.x)
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  monkey.collide(ground);
  
  survivalTime=0
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time: "+survivalTime,100,100)
  
  spawnbanana();
  spawnobstacle();
  
  
  
  
  drawSprites();

  
}

function spawnbanana(){
  
//write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(300,200,40,10);
      banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1
    
    bananaGroup.add(banana);
  }
}
    
    function  spawnobstacle(){
      if (frameCount % 100 === 0){
        var obstacle=createSprite(500,380,10,10);
        obstacle.x =Math.round(random(120,200));
        obstacle.addImage(obstacleImage);
        obstacle.scale=0.1;
        obstacle.velocityX = -3;
        
        obstacle.lifetime = 300;
        
        obstacle.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
        
        obstacleGroup.add(obstacle)
      }
    }
  
  
    
  
  




































