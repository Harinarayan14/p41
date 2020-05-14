// declaring variables for player , enemies, score, lives
var player,e1,e2,e3,e4,e5,e6;
var score = 0;
var lives = 5;
// declaring variables for detecting collision
var E1,E2,E3,E4,E5,E6,P1;

// declaring variables to detect whether the player is going outside the track
var T1,T2;
// declaring variables to store images
var carI1,carE2,carE3,carE4,track;
// preloading the images
function preload (){
  carI1 = loadImage("car1.png");// player
  carE2 = loadImage("car2.png");// enemies
  carE3 = loadImage("car3.png");
  carE4 = loadImage("car4.png");
  track = loadImage("track.jpg");// track
}


function setup() {
  // creating the canvas
 canvas =  createCanvas(displayWidth,displayHeight);

 // creating two players ---- one for showing image and one for detecting collision
 player = createSprite(displayWidth/2,displayHeight -50,60,60);
 player.addImage(carI1);
 P1 = createSprite(player.x,player.y,45,90);
 P1.visible = false;

// creating two sprites to detect if the player goes out of the track
T1 = createSprite(210,player.y,20,100);
T1.visible = false;
T2 = createSprite(1165,player.y,20,100);
T2.visible = false;

// creating enemies for showing image and for detecting collision
 e1 = createSprite(300,-2000,60,60);
 e1.addImage(carE2);
 E1 = createSprite(e1.x,e1.y,45,90);
 E1.visible = false;

 e2 = createSprite(600,-2000,60,60);
 e2.addImage(carE3);
 E2 = createSprite(e2.x,e2.y,45,90);
 E2.visible = false;

 e3 = createSprite(900,-2000,60,60);
 e3.addImage(carE4);
 E3 = createSprite(e3.x,e3.y,45,90);
 E3.visible = false;

 e4 = createSprite(400,-2500,60,60);
 e4.addImage(carE2);
 E4 = createSprite(e4.x,e4.y,45,90);
 E4.visible = false;

 e5 = createSprite(700,-2500,60,60);
 e5.addImage(carE3);
 E5 = createSprite(e5.x,e5.y,45,90);
 E5.visible = false;

 e6 = createSprite(1000,-2500,60,60);
 e6.addImage(carE4);
 E6 = createSprite(e6.x,e6.y,45,90);
 E6.visible = false;

}
function draw() {
  // setting the background
  background(0); 
  // setting the track image
  image(track,0,displayHeight,displayWidth,-displayHeight*4) ;

  // setting the position of collision detecting sprites
  P1.x = player.x;
  P1.y = player.y;
  T1.y = player.y;
  T2.y = player.y;

  E1.x = e1.x;
  E1.y = e1.y;
  E2.x = e2.x;
  E2.y = e2.y;
  E3.x = e3.x;
  E3.y = e3.y;
  E4.x = e4.x;
  E4.y = e4.y;
  E5.x = e5.x;
  E5.y = e5.y;
  E6.x = e6.x;
  E6.y = e6.y;

// creating a infinte game system
  if (player.y <-2200)
  {
    player.y = 550
  }

// setting the velocities of enemies so that they do not start to move till the player moves
  if ( player.velocityX!== 0 || player.velocityY!== 0 )
  {
    e6.velocityY = 10;
    e5.velocityY = 8.5;
    e4.velocityY = 7.5;
    e3.velocityY = 9;
    e2.velocityY = 8;
    e1.velocityY = 7;
  }
  else{
    
    e6.velocityY = 0;
    e5.velocityY = 0;
    e4.velocityY = 0;
    e3.velocityY = 0;
    e2.velocityY = 0;
    e1.velocityY = 0;
  }

  // setting the game camera
  camera.position.x = displayWidth/2;
  camera.position.y = player.y;

  console.log(lives);

  // using the enemy function
  enemy();
  // using drawsprites to display the sprites
  drawSprites();
  // using the des function
  des();
  // using text to show score and lives
  fill(0);
  textSize(30);
  stroke(5);
  text("Score : ",1200, player.y);
  fill(0,0,255);
  stroke(5);
  textSize(30);
  text(score,1250, player.y + 40);
  fill(255,0,0);
  stroke(5);
  textSize(30);
  text("Lives : "+ lives ,0, player.y);
}

// using keys to control the player
function keyPressed(){
  if (keyCode === 37){
    player.velocityX = -8;
    player.velocityY = 0;
  }
  if (keyCode === 38){
    player.velocityY = -8;
    player.velocityX = 0;
  }
  if (keyCode === 39){
    player.velocityX = 8;
    player.velocityY = 0;
  }
}
// if the player does not touch the enemies the enemies are spawned again at the end
function enemy(){
if (e1.y > player.y +300){
  e1.y = -3000;
  e1.x = random(300,1100);
  score = score + 20;
}
if (e2.y > player.y+300){
  e2.y = -3000;
  e2.x = random(300,1100);
  score = score + 20;
}
if (e3.y > player.y+300){
  e3.y = -3000;
  e3.x = random(300,1100);
  score = score + 20;
}
if (e4.y > player.y+300){
  e4.y = -3000;
  e4.x = random(300,1100);
  score = score + 20;
}
if (e5.y > player.y+300){
  e5.y = -3000;
  e5.x = random(300,1100);
  score = score + 20;
}
if (e6.y > player.y+300){
  e6.y = -3000;
  e6.x = random(300,1100);
  score = score + 20;
}
}
 // to detect if the player goes out of the track or if the player crashes with the enemy cars
function  des(){
     collide(T1);
     collide(T2);
     collide(E1);
     collide(E2);
    collide(E3) ;
     collide(E4) ; 
     collide(E5) ; 
     collide(E6);
    
    if (lives <=0){
      player.destroy();
      e1.velocityY =0;
      e2.velocityY =0;
      e3.velocityY =0;
      e4.velocityY =0;
      e5.velocityY =0;
      e6.velocityY =0;
      textSize(40);
      fill("red");
      text("GAMEOVER !!!",400,player.y - 100);
    }
    
    if (score > 2000 && score<2200){
      textSize(40);
      fill("yellow");
      text("Great !!!",300,player.y - 50);
    }
    if (score > 5000 ){
      textSize(40);
      fill("green");
      text("YOUWIN !!!",300,player.y - 50);
      player.destroy();
      e1.destroy();
      e2.destroy();
      e3.destroy();
      e4.destroy();
      e5.destroy();
      e6.destroy();
    }
}
// to create a collide function which detects collision
function collide(a){
  
if ((P1.x - a.x <= P1.width/2 + a.width/2 )
&&(a.x - P1.x <= P1.width/2 + a.width/2 )
&&(P1.y - a.y <= P1.height/2 + a.height/2 )
&&(a.y - P1.y <= P1.height/2 + a.height/2 )
){
  lives = lives -1;
  player.x = displayWidth/2;
  player.y = 695;
  player.velocityX =0;
  player.velocityY = 0;
   e1.y = -2500;
   e2.y = -2500;
   e3.y = -2500;
   e4.y = -2500;
   e5.y = -2500;
   e6.y = -2500;
}
}