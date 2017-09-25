//aid from instructables.com
const int trig = 11;
const int echo = 12;

void setup() {
  Serial.begin(9600);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);

  digitalWrite(2, HIGH);
  digitalWrite(3, HIGH);
  digitalWrite(4, HIGH);
  digitalWrite(5, HIGH);
  digitalWrite(6, HIGH);
  digitalWrite(7, HIGH);
  delay(500);
  digitalWrite(2, LOW);
  digitalWrite(3, LOW);
  digitalWrite(4, LOW);
  digitalWrite(5, LOW);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
}

void loop() {
  //establish variables for duration of pin and distance result
  long duration, inches, cm;
  
  //sensor triggered by HIGH pulse of 10+ microseconds
  //give short LOW pulse beforehard to ensure clean HIGH pulse
  pinMode(trig, OUTPUT);
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  //read signal from sensor
  pinMode(echo, INPUT);
  duration = pulseIn(echo, HIGH);

  //convert time to distance
  inches = microsecondsToInches(duration);

  //turn lights on to appropriate distance
  if(inches < 60) {
    digitalWrite(3, HIGH);
  }
  if(inches > 60) {
    digitalWrite(3, LOW);
  }
  if(inches < 48) {
    digitalWrite(4, HIGH);
  }
  if(inches > 48) {
    digitalWrite(4, LOW);
  }
  if(inches < 36) {
    digitalWrite(5, HIGH);
  }
  if(inches > 36) {
    digitalWrite(5, LOW);
  }
  if(inches < 24) {
    digitalWrite(6, HIGH);
  }
  if(inches > 24) {
    digitalWrite(6, LOW);
  }
  if(inches < 12) {
    digitalWrite(7, HIGH);
  }
  if(inches > 12) {
    digitalWrite(7, LOW);
  }
}

long microsecondsToInches(long microseconds) {
  return microseconds / 74 / 2;
}

