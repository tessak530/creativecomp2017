var threshold = 20; //255 is white, 0 is black
var TaveX, TaveY; //this is what we are trying to find

//RGB for thumb - purple
var thumbR = 72;
var thumbG = 24;
var thumbB = 72;
//RGB for index - orange
var indexR = 194;
var indexG = 65;
var indexB = 14;
//RBG for middle - green
var middleR = 105;
var middleG = 255;
var middleB = 208;
//RGB for ring - orange
var ringR = 232;
var ringG = 255;
var ringB = 100;
//RGB for pinkie - blue
var pinkieR = 28;
var pinkieG = 105;
var pinkieB = 224;

var continueApp = false;

function setup() {
  createCanvas(400, 300);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  pixelDensity(1);
}

function draw() {

  video.loadPixels();
  //find the average location of change in pixels with sum of all x, sum of all y, and total finds
  var totalThumbPixels, totalIndexPixels, totalMiddlePixels, totalRingPixels, totalPinkiePixels = 0;
  var TsumX, IsumX, MsumX, RsumX, PsumX = 0;
  var TsumY, IsumY, MsumY, RsumY, PsumY = 0;
  var thumb, index, middle, ring, pinkie = false;

  //enter into the classic nested for statements of computer vision
  for (var row = 0; row < video.height; row++) {
    for (var col = 0; col < video.width; col++) {
      //the pixels file into the room long line you use this simple formula to find what row and column the sit in 

      var offset = (row * video.width + col) * 4;
      //pull out the same pixel from the current frame 
      var thisColor = video.pixels[offset];

      //pull out the individual colors for both pixels
      var r = video.pixels[offset];
      var g = video.pixels[offset + 1];
      var b = video.pixels[offset + 2];

      if ((thumbR - 10 < r < thumbR + 10) && (thumbG - 10 < g < thumbG + 10) && (thumbB - 10 < b < thumbB + 10)) {
        TsumX = TsumX + col;
        TsumY = TsumY + row;
        totalThumbPixels++;
      }
      if ((indexR - 10 < r < indexR + 10) && (indexG - 10 < g < thumbG) && (indexB - 10 < b < indexB + 10)) {
        IsumX = IsumX + col;
        IsumY = IsumY + row;
        totalIndexPixels++;
      }
      if ((middleR - 10 < r < middleR + 10) && (middleG - 10 < g < middleG + 10) && (middleB - 10 < b < middleB + 10)) {
        MsumX = MsumX + col;
        MsumY = MsumY + row;
        totalMiddlePixels++;
      }
      if ((ringR - 10 < r < ringR + 10) && (ringG - 10 < g < ringG + 10) && (ringB - 10 < b < ringB + 10)) {
        RsumX = RsumX + col;
        RsumY = RsumY + row;
        totalRingPixels++;
      }
      if ((pinkieR - 10 < r < pinkieR + 10) && (pinkieG - 10 < g < pinkieG + 10) && (pinkieB - 10 < b < pinkieB + 10)) {
        PsumX = PsumX + col;
        PsumY = PsumY + row;
        totalPinkiePixels++;
      }
    }
  }

  video.updatePixels();

  image(video, 0, 0);

  TaveX = TsumX / totalThumbPixels;
  TaveY = TsumY / totalThumbPixels;
  if (130 < TaveX < 170 && 200 < TaveY < 270) {
    thumb = true;
  }
  
  IaveX = IsumX / totalIndexPixels;
  IaveY = IsumY / totalIndexPixels;
  if (185 < TaveX < 215 && 70 < TaveY < 160) {
    index = true;
  }
  
  MaveX = MsumX / totalMiddlePixels;
  MaveY = MsumY / totalMiddlePixels;
  if (155 < MaveX < 185 && 50 < MaveY < 140) {
    middle = true;
  }
  
  RaveX = RsumX / totalRingPixels;
  RaveY = RsumY / totalRingPixels;
  if (125 < RaveX < 155 && 70 < RaveY < 160) {
    ring = true;
  }
  
  PaveX = PsumX / totalPinkiePixels;
  PaveY = PsumY / totalPinkiePixels;
  if (95 < PaveX < 125 && 90 < PaveY < 180) {
    pinkie = true;
  }


  // hand box
  stroke(255);
  noFill();
  rect(40, 30, 220, 250);
  // thumb box
  stroke(72, 24, 72);
  rect(130, 200, 70, 40);
  // index finger box
  stroke(194, 65, 14);
  rect(185, 70, 30, 90);
  // middle finger box
  stroke(105, 255, 208);
  rect(155, 50, 30, 90);
  // ring finger box
  stroke(232, 255, 100);
  rect(125, 70, 30, 90);
  // pinkie finger box
  stroke(28, 105, 224);
  rect(95, 90, 30, 90);
}