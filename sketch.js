var kernels = [];

function Kernel(x, y) {
  this.x = x;
  this.y = y;
  this.w = 15;
  this.h = 15;
  this.col = color(255, 200, 100);
  
  this.display = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.w, this.h);
    noFill();
  }
  
  this.dontMove = function() {
    this.x = this.x;
    this.y = this.y;
  }
  
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 24) {
      this.col = color(255, 249, 206);
      this.w = this.w * 2;
      this.h = this.h * 2;
    }
  }
  
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

function setup() {
  createCanvas(1000, 580);
  background(255);
  
  for(var i = 0; i < 20; i++) {
    var x = random(250, 750);
    var y = random(150, 450);
    kernels.push(new Kernel(x, y));
  }
}

function draw() {
  fill(239, 23, 38);
  ellipse(500, 300, 1000, 800);
  fill(214, 17, 30);
  noStroke();
  ellipse(500, 300, 350, 300);
  for(var i = 0; i < kernels.length; i++) {
    kernels[i].move();
    kernels[i].display();
  }
}

function mousePressed() {
  for(var i = 0; i < kernels.length; i++) {
    kernels[i].dontMove();
    kernels[i].clicked();
  }
}