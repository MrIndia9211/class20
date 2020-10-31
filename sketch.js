var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 40, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 2;
  movingRect = createSprite(700,200,80,40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -4;
}

function draw() {
 // movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2    ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX *(-1);
      fixedRect.velocityX = fixedRect.velocityX *(-1);
  
  }
  background(0);  
  drawSprites();
}