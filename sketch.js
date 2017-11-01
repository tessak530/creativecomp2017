var num = "";
var button = {
  x: 0,
  y: 0,
  w: 50,
  h: 50,
  display: function() {
    fill(153);
    ellipse(this.x, this.y, 50, 50);
  },
  clicked: function() {
    text("");
    num = "";
    textSize(22);
    text("--- CALLING NOW ---", 148, 80);
  }
};
var nums = {
  n: 1,
  x: 0,
  y: 0,
  display: function() {
    textSize(40);
    fill(0);
    text(this.n, this.x, this.y);
  }
};

function setup() {
  createCanvas(500, 500);
  background(0);
  createScreen();
  button.x = 175;
  button.y = 175;
  button.display();
  nums.x = 164;
  nums.y = 189;
  nums.n = 1;
  nums.display();
  button.x = 250;
  button.display();
  nums.x = 239;
  nums.n = 2;
  nums.display();
  button.x = 325;
  button.display();
  nums.x = 314;
  nums.n = 3;
  nums.display();
  button.x = 175;
  button.y = 250;
  button.display();
  nums.x = 164;
  nums.y = 264;
  nums.n = 4;
  nums.display();
  button.x = 250;
  button.display();
  nums.x = 239;
  nums.n = 5;
  nums.display();
  button.x = 325;
  button.display();
  nums.x = 314;
  nums.n = 6;
  nums.display();
  button.x = 175;
  button.y = 325;
  button.display();
  nums.x = 164;
  nums.y = 339;
  nums.n = 7;
  nums.display();
  button.x = 250;
  button.display();
  nums.x = 239;
  nums.n = 8;
  nums.display();
  button.x = 325;
  button.display();
  nums.x = 314;
  nums.n = 9;
  nums.display();
  button.x = 175;
  button.y = 400;
  button.display();
  nums.x = 167;
  nums.y = 422;
  nums.n = '*';
  nums.display();
  button.x = 250;
  button.display();
  nums.x = 239;
  nums.y = 415;
  nums.n = 0;
  nums.display();
  button.x = 325;
  button.display();
  nums.x = 314;
  nums.n = "#";
  nums.display();
}

function draw() {
  fill(0);
  textSize(28);
  text(num, 150, 50);
  if (keyIsPressed) {
    if(key == "1") {
      num = num + "1";
    }
    else if(key == "2") {
      num = num + "2";
    }
    else if(key == "3") {
      num = num + "3";
    }
    else if(key == "4") {
      num = num + "4";
    }
    else if(key == "5") {
      num = num + "5";
    }
    else if(key == "6") {
      num = num + "6";
    }
    else if(key == "7") {
      num = num + "7";
    }
    else if(key == "8") {
      num = num + "8";
    }
    else if(key == "9") {
      num = num + "9";
    }
    else if(key == "0") {
      num = num + "0";
    }
    if (num.length == 13 || num.length == 26) {
      num = num + "\n";
    }
  }
}

function createScreen() {
  fill(255);
  rect(125, 125, 250, 350, 20);
  fill(255);
  rect(125, 15, 250, 120, 20);
  fill(225);
  rect(135, 25, 230, 100, 20);
}

function mousePressed() {
  button.clicked();
}

