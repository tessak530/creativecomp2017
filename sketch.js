var logo;
var structure;

function setup() {
  createCanvas(414, 628);
  logo = loadImage("ASLearn_logo.png");
  background(163, 205, 224);
  structure = new basicStructure();
}

function draw() {
  structure.display();
  
}

function mousePressed() {
  if(structure.clicked() === true) {
    if(30 < mouseX <115 && 135 < mouseY < 155) {
      removeElements();
    }
  }
  else {
    structure.clicked();
  }
}