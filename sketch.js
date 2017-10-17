var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here
var dataa;

function setup() {
  
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  //serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
 
}

function draw() {
  background(255);
  stroke(0);
  textSize(36);
  text("Values coming over the Serial port: " + dataaa, 20, 50);
}


function serialEvent() {
  dataa = serial.readStringUntil("\r\n"); //read bytes
  
  if(dataa == "hello") {
    serial.write('x');
  }
  if(dataa !== "hello") {
    dataa = trim(dataa);
    dataa = Number(dataa);
    console.log("Recieved data: " + dataa);
  }
}

function mousePressed() {
  serial.write(1);
  console.log("1")
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}