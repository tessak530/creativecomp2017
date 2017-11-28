var logo;
var structure;

function setup() {
  windowWidth = 414;
  windowHeight = 628;
  createCanvas(414, 628);
  
  logo = loadImage("ASLearn_logo.png");
  background(163, 205, 224);
  structure = new basicStructure();
}

function draw() {
  for(var j = 0; j < rects.length; j++) {
     rects[j].display();
     words[j].display();
  }
  structure.display();
}

function mousePressed() {
  structure.clicked();
}