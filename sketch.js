//with help from NYU ITP website and David Rios

var vid;
var canvas;

function setup() {
  createCanvas(600, 338);
  vid = createVideo("IMG_0251.MOV");
  vid.size(600, 338);
  vid.hide();
  noStroke();
  //canvas = createImage(600, 338);
  //canvas.loadPixels();
  vid.loop();
  fill(25);
}

function draw() {
  background(255);
  vid.loadPixels();
  
  var stepSize = round(constrain(mouseX / 8, 1, 5));
  
  for(var y = 0; y < height; y+=stepSize) {
    for (var x = 0; x < width; x+=stepSize) {
      var i = y * width + x;
      
      var darkness = (255 - vid.pixels[i * 4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }

}