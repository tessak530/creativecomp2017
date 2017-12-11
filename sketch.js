var img;
var thumbRed = [];
var indexGreen = [];
var middleBlue = [];
var ringBlack = [];
var pinkieOrange = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(320, 240);
  //pixelDensity(1);
  img = createImage(640, 480);
  img.loadPixels();
}

function draw() {
  video.loadPixels();
  for (var i = 0; i < 4 * (video.width * video.height); i += 4) {
    var r = video.pixels[i];
    var g = video.pixels[i + 1];
    var b = video.pixels[i + 2];
    var a = video.pixels[i + 3];
    
    img.pixels[i] = r;
    img.pixels[i + 1] = g;
    img.pixels[i + 2] = b;
    img.pixels[i + 3] = a;
  }
  img.updatePixels();
  image(img, 0, 0);
}