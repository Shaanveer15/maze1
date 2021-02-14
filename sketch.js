var w1,w2,w3,w4,wc,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21;
var a,b,c;
var door,doorimg;
var bob;
var bg,ship,dmd,dmd2;
var RUN=1;
var gamestate=PLAY;
var PLAY=0;
var l1,l2,lzr;
var ogre;
function preload(){
 bg=loadImage('bg.png')
dmd=loadImage('diamond.png')
dmd2=loadImage('dmd2.png')
 ship=loadImage('ship.png')
 a=loadAnimation("1.png","2.png","3.png")
 doorimg=loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png")
 lzr=loadAnimation("k2.png","k3.png","k4.png","k5.png")
}
function setup() {
  createCanvas(600,600);
  w1=createSprite(300,10,590,10);
  w1.shapeColor=("white");
  w2=createSprite(10,320,10,500);
  w2.shapeColor=("white");
  w3=createSprite(300,590,590,10);
  w3.shapeColor=("white");
  w4=createSprite(590,300,10,520);
  w4.shapeColor=("white");
  wc=createSprite(200,200,40,40);
  wc.addImage(dmd);
  wc.scale=0.11;
  wd=createSprite(380,280,40,40);
  wd.addImage(dmd2);
  wd.scale=0.11;
  w5=createSprite(80,45,20,65);
  w5.shapeColor=("white");
  w6=createSprite(300,75,460,20);
  w6.shapeColor=("white");
 // w7=createSprite(60,45,20,65);
  //w7.shapeColor=("white");
  w8=createSprite(525,300,20,470);
  w8.shapeColor=("white");
  w9=createSprite(480,225,100,20);
  w9.shapeColor=("white");
  w10=createSprite(275,150,380,20);
  w10.shapeColor=("white");
  w11=createSprite(310,405,450,20);
  w11.shapeColor=("white");
  w12=createSprite(95,250,20,190);
  w12.shapeColor=("white");
  w13=createSprite(150,335,90,20);
  w13.shapeColor=("white");
  w14=createSprite(255,250,20,190);
  w14.shapeColor=("white");
  w15=createSprite(150,245,90,20);
  w15.shapeColor=("white");
  w16=createSprite(150,170,20,30);
  w16.shapeColor=("white");
  w17=createSprite(155,290,70,20);
  w17.shapeColor=("white");
  w18=createSprite(370,335,130,20);
  w18.shapeColor=("white");
  w19=createSprite(315,250,20,180);
  w19.shapeColor=("white");
  w20=createSprite(395,185,20,80);
  w20.shapeColor=("white");
  w21=createSprite(510,280,40,20);
  w21.shapeColor=("white");
  Bob=createSprite(20,40,15,15);
  Bob.shapeColor="red";
  Bob.addAnimation("running",a);
  Bob.scale=0.30;
  Bob.debug=true;
  ogre=createSprite(360,200,20,40);

  door=createSprite(110,40,60,10);
  door.addAnimation("opening",doorimg);
  door.scale=0.5;
  l1=createSprite(300,480,20,80);
  l2=createSprite(300,520,20,80);
  l1.addAnimation("lazer",lzr);
  l2.addAnimation("lazer",lzr);
  l1.scale=0.3
  l2.scale=0.3
  l1.velocityX=-4;
  l2.velocityX=4;
l1.visible=false;
l2.visible=false;
}

function draw() {
  background(bg);  
  drawSprites();
  edges=createEdgeSprites();
Bob.bounceOff(edges);
ogre.x=Bob.x-55;
ogre.y=Bob.y+55;
  if(keyDown(UP_ARROW)) {   
Bob.x +=0;
Bob.y +=-2;
  }
if (keyDown(DOWN_ARROW)) {
  Bob.y +=2;
  Bob.x +=0;
 }
   if (keyDown(LEFT_ARROW)) {
  Bob.y +=0;
  Bob.x +=-2;
  }  
  if (keyDown(RIGHT_ARROW)){
Bob.y +=0;
 Bob.x +=2;
  }
if(Bob.isTouching(w1)||Bob.isTouching(w2)||Bob.isTouching(w3)||Bob.isTouching(w4)||Bob.isTouching(w5)
||Bob.isTouching(w6)||Bob.isTouching(w8)||Bob.isTouching(w9)||Bob.isTouching(w10)
||Bob.isTouching(w11)||Bob.isTouching(w12)||Bob.isTouching(w13)||Bob.isTouching(w14)||Bob.isTouching(w15)
||Bob.isTouching(w16)||Bob.isTouching(w17)||Bob.isTouching(w18)||Bob.isTouching(w19)||Bob.isTouching(w20)||
Bob.isTouching(w21)){
  Bob.x=20;
  Bob.y=30;
  Bob.velocityX=0;
  Bob.velocityY=0;
  fill ("black");
  text("GAME OVER",160,200);
}
l1.bounceOff(w2);
l1.bounceOff(w4);
l2.bounceOff(w4);
l2.bounceOff(w2);
 if(Bob.isTouching(wc)){
gamestate=RUN;
}
if(gamestate===RUN){
wc.visible=false;
l1.visible=true;
l2.visible=true;

}
/*if(Bob.isTouching(l1)||Bob.isTouching(l2)){
Bob.x=20;
Bob.y=30;
Bob.velocityX=0;
Bob.velocityY=0;
fill ("black");
text("GAME OVER",160,200);
}
*/
}