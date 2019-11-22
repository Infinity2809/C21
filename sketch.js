var mo,mr;

function setup() {
  createCanvas(1200,800);
  mr = createSprite(400, 100, 50, 80);
  mr.shapeColor = "green";
  mr.debug = true;
  mo = createSprite(400, 800,80,30);
  mo.shapeColor = "green";
  mo.debug = true;

  mo.velocityY = -5;
  mr.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  if(isTouching(mo,mr)){
    mo.shapeColor="red";
    mr.shapeColor="white";
  }
  else{
    mr.shapeColor="green";
    mo.shapeColor="green";
  }
 bounceOff(mr,mo);
  drawSprites();
}