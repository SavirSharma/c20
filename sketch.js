var fixedRect, movingRect;
var rect1, rect2;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  // fixedRect=createSprite(200,200,50,80);
  // movingRect=createSprite(400,200,80,30);
  // fixedRect.shapeColor="green";
  // movingRect.shapeColor="green";
  rect1=createSprite(200,50,50,100);
  rect2=createSprite(200,350,50,60);
  rect1.shapeColor="blue";
  rect2.shapeColor="pink";
  rect1.velocityY=2;
  rect2.velocityY=-2;
}

function draw() {
  background(255,255,255);
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;
  // if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  //   movingRect.shapeColor="red";
  //   fixedRect.shapeColor="red";
  // }
  // else{
  //   movingRect.shapeColor="green";
  //   fixedRect.shapeColor="green";
  // }

  if(rect1.y-rect2.y<rect1.height/2+rect2.height/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2){
    rect1.velocityY=rect1.velocityY*-1;
    rect2.velocityY=rect2.velocityY*-1;
  }

  drawSprites();
}