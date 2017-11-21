function basicStructure() {
  this.img = logo,
  this.imgStartX = 70,
  this.imgStartY = 10,
  this.imgSize = 414 / 1.5,
  
  
  this.display = function() {
    image(this.img, this.imgStartX, this.imgStartY, this.imgSize);
  }
  
  this.clicked = function() {
    fill(230);
    rect(30, 135, 150, 85, 20);
    rect(230, 135, 150, 85, 20);
    rect(30, 260, 150, 85, 20);
    rect(230, 260, 150, 85, 20);
    rect(30, 385, 150, 85, 20);
    rect(230, 385, 150, 85, 20);
    rect(30, 510, 150, 85, 20);
    rect(230, 510, 150, 85, 20);
    
    textFont("Avenir Next", 28);
    textAlign(CENTER);
    fill(0);
    text("LESSON\nONE", 105, 170);
    text("LESSON\nTWO", 306, 170);
    text("LESSON\nTHREE", 105, 295);
    text("LESSON\nFOUR", 306, 295);
    text("LESSON\nFIVE", 105, 420);
    text("LESSON\nSIX", 306, 420);
    text("LESSON\nSEVEN", 105, 545);
    text("LESSON\nEIGHT", 306, 545);
    
    return true;
  }
}