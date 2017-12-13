var apikey = "&appid=3c0233eb728bb3f2315843fc64ca422a";
var url = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "New York";
var units = "&units=metric";
var icon;
var request = url + city + units + apikey;
var dataSet;
var input;
var button;

var perf, other, rain, ok, cold, hot;


function preload() {
  loadJSON(request, getData);

}

function getData(data) {
  dataSet = data;
  //img = createImg("http://openweathermap.org/img/w/"+dataSet.weather[0].icon+".png");
}


function setup() {
  createCanvas(800, 600);
  input = createInput();
  button = createButton("Submit");
  button.mousePressed(getInfo);
  console.log(dataSet);
  perf = loadImage("img/perfect weather.jpg");
  cold = loadImage("img/cold.png");
  hot = loadImage("img/hot.jpg");
  rain = loadImage("img/swim.jpg");
  ok = loadImage("img/a-ok.jpg");
  other = loadImage("img/FFHIJes.jpg");
}

function draw() {
  var descrip = dataSet.weather[0].description;
  background(0, 0, (+dataSet.main.temp * (9 / 5) + 32));
  textSize(40);
  textFont("Avenir Next");
  fill(255);
  if (dataSet) {
    icon = dataSet.weather[0].icon;
    text(city + " forecast today", 170, 100);
    text("Today's meme is for: " + descrip, 125, 250);
    if (descrip === "clear sky") {
      image(perf, 120, 300);
    } 
    else if(descrip === "few clouds" || descrip === "scattered clouds") {
      image(ok, 120, 300);
    }
    else if(descrip === "shower rain" || descrip === "rain" || descrip === "thunderstorm") {
      image(rain, 120, 300);
    }
    else if(descrip === "snow") {
      image(cold, 120, 300);
    }
    else {
      if((+dataSet.main.temp * (9 / 5) + 32) < 50) {
        image(cold, 120, 300);
      }
      else if((+dataSet.main.temp * (9 / 5) + 32) > 90) {
        image(hot, 120, 300);
      }
      image(other, 120, 300);
    }
  }
}

function getInfo() {
  city = input.value();
  request = url + city + units + apikey;
  loadJSON(request, getData);
}