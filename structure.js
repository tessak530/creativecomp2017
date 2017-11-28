var textInput = ["LESSON\nONE", "LESSON\nTWO", "LESSON\nTHREE", "LESSON\nFOUR",
                "LESSON\nFIVE", "LESSON\nSIX", "LESSON\nSEVEN", "LESSON\nEIGHT",];
var lessonInput = ["ALPHABET", "GREETINGS", "SIGN YOUR NAME"];
var rects =[];
var words =[];
var d;

function basicStructure() {
  this.img = logo,
  this.imgStartX = 70,
  this.imgStartY = 10,
  this.imgSize = 414 / 1.5,

  this.display = function() {
    image(this.img, this.imgStartX, this.imgStartY, this.imgSize);
    var x = 30;
    var y = 135;
    for(var i = 0; i < 4; i++) {
      rects[i] = new Rectangle(x, y);
      y = y + 125;
    }
  
    x = 230;
    y = 135;
    for(var h = 4; h < 8; h++) {
      rects[h] = new Rectangle(x, y);
      y = y + 125;
    }
    
    x = 105;
    y = 170;
    for(var k = 0; k < 8; k++) {
      words[k] = new Text(textInput[k], x, y);
      y = y + 125;
    }
    
    x = 306;
    y = 170;
    for(k = 4; k < 8; k++) {
      words[k] = new Text(textInput[k], x, y);
      y = y + 125;
    }
  }
  this.clicked = function() {
    for(var i = 0; i < rects.length; i++) {
      rects[i].clicked();
      words[i].clicked();
    }
  }
}

function Rectangle(x, y) {
  this.rectX = x;
  this.rectY = y;
  this.w = 150;
  this.h = 85;
  d = dist(mouseX, mouseY, this.rextX, this.rectY);
      
  this.display = function() {
    fill(230);
    rect(this.rectX, this.rectY, this.w, this.h, 20);
  }
  this.clicked = function() {
    rects.splice(0, 8);

    if(d < 24) {
      println("kill me");
      // if(30 < mouseX < 180) {
      //   if(135 < mouseY < 220) {
      //     lessonPlan(0);
      //   }
      //   else if(260 < mouseY < 345) {
      //     lessonPlan(2);
      //   }
      //   else if(385 < mouseY < 470) {
      //     lessonPlan(4);
      //   }
      //   else if(510 < mouseY < 595) {
      //     lessonPlan(6);
      //   }
      // }
      // else if(230 < mouseX < 380) {
      //   if(135 < mouseY < 220) {
      //     lessonPlan(1);
      //   }
      //   else if(260 < mouseY < 345) {
      //     lessonPlan(3);
      //   }
      //   else if(385 < mouseY < 470) {
      //     lessonPlan(5);
      //   }
      //   else if(510 < mouseY < 595) {
      //     lessonPlan(7);
      //   }
      // }
    }
  }
}

function Text(words, x, y) {
  this.wording = words;
  this.xPos = x;
  this.yPos = y;
  this.size = 28;
  
  this.display = function() {
    textFont("Avenir Next", this.size);
    textAlign(CENTER);
    fill(0);
    text(this.wording, this.xPos, this.yPos);
  }
  
  this.clicked = function() {
    //words.splice(0, 8);
  }
}

function LessonPlan(lessonNo) {
  this.lessonName = textInput[lessonNo];
  this.lessonA = "";
  this.lessonB = "";
  this.lessonC = "";
  this.lessonD = "";
  this.lessonE = "";
  this.test = "TEST YOUR SKILLS!";
  this.textX = 40;
  this.textY = 25;
  
  if(this.lessonNo === 0) {
    this.lessonA = lessonInput[0];
    this.lessonB = lessonInput[1];
    this.lessonC = lessonInput[2];
  }
  
  this.display = function() {
    for(var z = 0; z < 5; z++) {
      var words[z] = new Text
    }
  }
}
