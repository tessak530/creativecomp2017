//help from www.arduino.com

#include <Servo.h>
Servo myservo;
int pos = 0; //variable to store servo position

void setup() {
  myservo.attach(9);
}

void loop() {
  for(pos = 0; pos <= 180; pos +=1) {
    myservo.write(pos);
    delay(5);
  }
  for(pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(5);
  }
}
