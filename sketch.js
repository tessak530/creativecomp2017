var pnt = {
  w: 50,
  h: 50
}
var col = {
  r: 255,
  g: 255,
  b: 255
}
function setup() {
  createCanvas(1250, 600);
}
function draw() {
  background(0);
  pnt.w = random(0, 150);
  pnt.h = random(0, 150);
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  fill(col.r, col.g, col.b);
  ellipse(mouseX, mouseY, pnt.w, pnt.h);
}