var exam ;
var girl;
var backgroundImg,girlImg,examImg,booksImg;
var booksGroup;;
var math,science,sst;
var bg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var topEdge ;
var heart ;
function preload(){
backgroundImg = loadImage("school.jpg");
examImg = loadImage("1538.png_300.png");
math = loadImage("71-712950_math-clipart-borders-transparent-math-clipart.png")
science = loadImage("download (1).png");
sst = loadImage("cartoon-history-book-illustration_csp34657322.jpg")
girlImg = loadImage("94917405-vector-flat-frightened-teenage-girl-in-green-dress-running-away-female-cartoon-character-chasing-loo.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    booksGroup = new Group();
    girl= createSprite(600,600,70,70);
    bg = createSprite(400,400,windowWidth,windowHeight);
    bg.x = bg.width/2;
topEdge = createSprite(950,15,windowWidth + 50,20);

textSize (35)
text("hi", 200, 600);

heart1 = createSprite(100,100,50,50)
heart1.shapeColor = "red";

text("= 5" , 50, 700);
}
function draw(){
  
    //backgroundImage(backgroundImg)
  //  text(mouseX+','+mouseY,mouseX,mouseY);
   
   //bg.velocityX = -3;

   bg.scale = 1.4;
   /* if(bg.x < 0){
      bg.x = bg.width/2;
    }*/
    background("white");
   
   
    //exam.addImage(examImg);

    if(gameState === PLAY){
      background("white");
      bg.addImage(backgroundImg);

      
    
     edges= createEdgeSprites();
      girl.bounceOff(edges);

    girl.addImage(girlImg);
 
    girl.scale = 0.1;

   // console.log(girl.x, girl.y)
    //exam.scale= 0.5;
    //console.log(displayWidth,displayHeight)

    girl.depth = bg.depth;
    girl.depth = girl.depth +1;
    //console.log(girl.depth, bg.depth )
  
    if(keyDown(UP_ARROW)){
      girl.velocityY = -5;
      girl.velocityX = 0;
    }
    if(keyDown(LEFT_ARROW)){
      girl.velocityY = 0;
      girl.velocityX = -5;
    }
    if(keyDown(DOWN_ARROW)){
      girl.velocityY = 5;
      girl.velocityX = 0;
    }
    if(keyDown(RIGHT_ARROW)){
      girl.velocityY = 0;
      girl.velocityX = 5;
    }
    books();


    if(girl.isTouching(topEdge)){
    //  displayScore();
    }
   textSize(30)
    text("Score : " + score, 600, 200);
    console.log(score);
  }
    
  girl.debug = true;
  girl.setCollider("circle",0,0,800);
  //booksGroup.debug = true;
  //.setCollider("circle",0,0,800);

  if(booksGroup.isTouching(girl)){
    console.log(gameState);
    
    //gameState = END;
    
  }

  if(gameState === END){
background("red");
    booksGroup.setVelocityXEach(0);
    girl.velocityX =0;
    girl.velocityY = 0;
    bg.destroy();
    girl.destory;
    booksGroup.destroyEach();
    console.log(gameState);

   
    score = score + 5;
    textSize(30);
    text("score :" + score, 500,500)
  }
    drawSprites();

}
function books(){
if(frameCount% 60 === 0){
  exam= createSprite(200,200,70,70);
  
  exam.velocityX = 13;
  exam.y =Math.round(random(100,700))
  var rand = Math.round(random(1,4))
  switch(rand){
    case 1 : exam.addImage(examImg)
    break;
    case 2 : exam.addImage(math)
    break;
    case 3 : exam.addImage(science)
    break;
    case 4 : exam.addImage(sst)
    break;
    default : break;
  }
  booksGroup.add(exam);
  exam.lifetime = 180;
  exam.debug = true;
  exam.setCollider("circle",0,0,250)
}
}

