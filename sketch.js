var hr, min, sc;




function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  translate(200, 200);

  hr = hour();
  min = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  minAngle = map(min, 0, 60, 0, 360);
  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(hrAngle);
  stroke("Red");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  drawSprites();
}