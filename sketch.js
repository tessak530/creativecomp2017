function setup() {
  createCanvas(500, 500);
}

function draw() {
  //head
  ellipse(250, 150, 75, 75);
  //body
  rect(237, 187, 25, 100);
  //arms
  translate(width/2, height/2);
  rotate(PI/3.0);
  rect(-50, -10, 15, 50);
  
  rotate(PI/3.1);
  rect(-48, -43, 15, 50);
  //legs
  rotate(PI/2.2);
  rect(-15, -112, 15, 75);
  
  rotate(PI/-5);
  rect(-5, -113, 15, 75);
}