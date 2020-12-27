var monkey , monkey_running
var ground, invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage
var score = 0
var bananaGroup, obstacleGroup 
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating a monkey
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground  = createSprite(400,350,900,  10);
  ground.velocityX= -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  invisibleGround = createSprite(400, 350, 900, 10);
  invisibleGround.x = ground.width / 2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background(255);
  
  if(ground.x < 0){
    ground.x =ground.width/2;
  }
  
  if(invisibleGround.x < 0){
    invisibleGround.x = invisibleGround.width/2;
  }
  invisibleGround.velocityX = -5;
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  if(keyDown("up")){
    monkey.velocityY = -12;
  }
  
  if(mouseDown("left")){
    monkey.velocityY = -12;
  }
  
  
  //  addding gravity for monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground)
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50);

  
  spawnFood();
  spawnObstacle();
 
  
  drawSprites();
}


function spawnFood() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(500, 10, 10, 20);
    banana.addImage("banana", bananaImage);
    banana.velocityX = -(5 + 2 * score / 100);
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.1;
    FoodGroup.add(banana);
    FoodGroup.setLifetimeEach(100);
    banana.setCollider("rectangle",0 ,0 ,400, 400);
    
  }
  
} 

function spawnObstacle() {
  
 if (frameCount % 300 === 0 ) {
  var obstacle = createSprite(500, 305, 23, 32);
  obstacle.velocityX = -(5 + 2 * score / 100);
  obstacle.addImage("obstacle" ,obstaceImage );
  obstacle.scale = 0.2;
  obstacleGroup.add(obstacle);
  obstacleGroup.setLifetimeEach(100);
  obstacle.setCollider("circle", 0, 0, 200);
}
}





