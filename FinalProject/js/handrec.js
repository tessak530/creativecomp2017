var video;

function setup() {
  createCanvas(414, 628);
  
  output = createImage(414, 628);
  video = createCapture(VIDEO);
  
  video.loadPixels();
  output.loadPixels();
}

function draw() {
  video.loadPixels();
  
}

