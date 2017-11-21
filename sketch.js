//with the help of p5 online library

var song, analyzer, fft;

function preload() {
  song = loadSound('MeurteScore_1.mp3');
}

function setup() {
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  
  fft = new p5.FFT();
  
  song.loop();
  
  createCanvas(500, 500);
}

function draw() {
  background(255);
  var rms = analyzer.getLevel();
  var spectrum = fft.analyze();
  noStroke();
  
  for(var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    
    rect(x, height, 1, h);
    fill(i / 2, width / spectrum.length, 0);
    
    rotate(PI/x);
    rect(400, 100, 50, 50);
  }
}