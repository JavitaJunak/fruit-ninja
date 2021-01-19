
var alien1 ,alien2 , fruit1 ,fruit2 , fruit3 , fruit4 , sword , gameoverImage , knife ;
var PLAY = 1;
var END = 0;
var gameState = 1;
var score=0;
var enemysGroup , fruitsGroup;
var gameover;
var knifesound, gameoversound;
function preload(){
  
  alien1 = loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  sword = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png");
  knifesound= loadSound("knifeSwooshSound.mp3");
  gameoversound= loadSound ("gameover.mp3");
}

   function setup(){
     createCanvas (400,400);
    knife = createSprite(40,200,20,20);
    knife.addImage (sword);
    knife.scale = 0.7;
  
   fruitsGroup = new Group();
   enemysGroup = new Group();
   gameover= createSprite(200,200,50,50);
     gameover.addImage(gameoverImage);
     gameover.visible=false;
   }

function draw(){
 background ("lightblue");
  if(gameState===1){
  knife.x = World.mouseX;
   knife.y = World.mouseY;
  
  text("score-"+score,300,50);
  fruits();
  enemys();
  
  
  if(fruitsGroup.isTouching(knife)){
  fruitsGroup.destroyEach();
  score = score+2;
  knifesound.play();
}
  if(enemysGroup.isTouching(knife)){
      enemysGroup.destroyEach();
    fruitsGroup.destroyEach();
    gameState=0;
    gameoversound.play();
}
  }
  if(gameState===0){
    enemysGroup.setVelocityEach(0,0);
    fruitsGroup.setVelocityEach(0,0);
   
 
   gameover.visible = true;
  }
  drawSprites();
}

 function enemys(){
    if(World.frameCount%200===0){
      monster=createSprite(400,200,20,20);
      var rand=Math.round(random(1,2));
      if(rand===1){
     monster.addImage("a1", alien1);
      }
      else{
        monster.addImage("a2", alien2);
      }
      monster.y=Math.round(random(100,300));
      monster.velocityX = -8;
      monster.setLifetime=50;
      
      enemysGroup.add(monster);
    }
 }

 

function fruits(){
    if(World.frameCount%80===0){
      fruit = createSprite (400,200,20,20);
      fruit.scale=0.2;
      var rand= Math.round(random(1,2));
      if (rand===1){
        fruit.x=400;
        fruit.velocityX = -(7+score/10);
        
      }
        if (rand===2){
        fruit.x=-10;
        fruit.velocityX = (7+score/10);
        
      }
      r=Math.round(random(1,4));
    if (r == 1 ) {
       fruit.addImage(fruit1);
    } 
      else if (r == 2){
      fruit.addImage(fruit2);
    } 
      else if (r == 3){
      fruit.addImage(fruit3);
    } 
      else {
      fruit.addImage(fruit4);
    }
      
      fruit.y=Math.round (random(50,340));
      
     
      fruit.setLifetime = 100;
      
      fruitsGroup.add(fruit);
    }
}





