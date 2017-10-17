int button = 2;
int sw;
const int x_axis = 0;
const int motor = 6;
int x_hiz = 0;
int a = 0;

void setup() {
  Serial.begin(9600);
  pinMode(button, INPUT);
  digitalWrite(button, HIGH);
  pinMode(motor, OUTPUT);
}

void loop() {
  sw = digitalRead(button);
  if(sw == HIGH) {
      a++;
      if(a == 1) {
        while(1) {
          x_hiz = analogRead(x_axis);
          x_hiz = map(x_hiz, 0, 1023, 0, 255);
          analogWrite(motor, x_hiz);

          Serial.println(x_hiz);
          Serial.println(a);
          Serial.println("-----");
          sw = digitalRead(button);
          if(sw == LOW) {
            break;
          }
        }
      }
    if(a == 2) {
      x_hiz = 0;
      analogWrite(motor, x_hiz);
      a = 0;
      
      Serial.println(x_hiz);
      Serial.println(a);
      Serial.println("------------");
    }
  }
}
