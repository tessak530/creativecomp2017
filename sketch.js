var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here
var fanData;
var xPos = 0;

function setup() {
  serial = new p5.SerialPort();
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing
  
  serial.open(portName); //opens serial port
  
  createCanvas(400,300);
  background(255);
}

function draw() {
  graphData(fanData);
}

function graphData(newData) {
  var yPos = map(newData, 0, 255, 0, height);
  stroke(0);
  line(xPos, height, xPos, height - yPos);
  if(xPos >= width) {
    xPos = 0;
    background(255);
  }
  else {
    xPos++;
  }
}

function serialEvent() {
  fan = Number(serial.read());
}

