// Serial.println(readString);  É =  GET /?ligar HTTP/1.1  Host: 45.174.219.194:8000  User-Agen

//Programa: Automacao Residencial com Arduino e Ethernet Shield
//Autor: EMERSON

#include <SPI.h>

#include <Ethernet.h>

String readString;

int pin2 = 2;
int pin2Sinal = 0;
int pin3 = 3;
int pin3Sinal = 0;
int pin4 = 4;
int pin4Sinal = 0;
int pin5 = 5;
int pin5Sinal = 0;
int pin6 = 6;
int pin6Sinal = 0;
int pin7 = 7;
int pin7Sinal = 0;

int sinalReturn;

byte mac[] = { 0xA4, 0x28, 0x72, 0xCA, 0x55, 0x2E }; 
byte ip[] = { 172, 20, 0, 102 };
byte gateway[] = { 172, 20, 0, 1 };
byte subnet[] = { 255, 255, 0, 0 };
EthernetServer server(8000);


void setup() {
  Serial.begin(9600);
  pinMode(pin2, OUTPUT);
  pinMode(pin3, OUTPUT);
  pinMode(pin4, OUTPUT);
  pinMode(pin5, OUTPUT);
  pinMode(pin6, OUTPUT);
  pinMode(pin7, OUTPUT);
  // pinMode(pin3, INPUT_PULLUP);
  Ethernet.begin(mac, ip, gateway, subnet);
  server.begin();
  digitalWrite(pin2, LOW);
  digitalWrite(pin3, LOW);
  digitalWrite(pin4, LOW);
  digitalWrite(pin5, LOW);
  digitalWrite(pin6, LOW);
  digitalWrite(pin7, LOW);
}

void loop() {
  int pin2Sinal = digitalRead(pin2);
  int pin3Sinal = digitalRead(pin3);
  int pin4Sinal = digitalRead(pin4);
  int pin5Sinal = digitalRead(pin5);
  int pin6Sinal = digitalRead(pin6);
  int pin7Sinal = digitalRead(pin7);
  Serial.println("pin2: " + String(pin2Sinal));
  Serial.println("pin3: " + String(pin3Sinal));
  Serial.println("pin4: " + String(pin4Sinal));
  Serial.println("pin5: " + String(pin5Sinal));
  Serial.println("pin6: " + String(pin6Sinal));
  Serial.println("pin7: " + String(pin7Sinal));
  delay(500);

  EthernetClient client = server.available();

  if (!client) {
    return;
  }
  while (client.connected()) {
    if (client.available()) {
      char c = client.read();
      if (readString.length() < 30) {
        readString += c;
      }
      if (c == '\n') {
        Serial.println(readString);
        if (readString.indexOf("?1:1") > 0) {
          digitalWrite(pin2, HIGH);
          sinalReturn = digitalRead(pin2);
          // delay(1);
        } else {
          if (readString.indexOf("?1:0") > 0) {
            digitalWrite(pin2, LOW);
            sinalReturn = digitalRead(pin2);
          }
        }

        if (readString.indexOf("?2:1") > 0) {
          digitalWrite(pin3, HIGH); // rele2=NF  circulto = NAtivo
          sinalReturn = digitalRead(pin3);
          // delay(1);
        } else {
          if (readString.indexOf("?2:0") > 0) {
            digitalWrite(pin3, LOW);
            sinalReturn = digitalRead(pin3);
          }
        }


        if (readString.indexOf("?3:1") > 0) {
          digitalWrite(pin4, HIGH);
          sinalReturn = digitalRead(pin4);
          // delay(1);
        } else {
          if (readString.indexOf("?3:0") > 0) {
            digitalWrite(pin4, LOW);
            sinalReturn = digitalRead(pin4);
          }
        }

        if (readString.indexOf("?4:1") > 0) {
          digitalWrite(pin5, HIGH); // 
          sinalReturn = digitalRead(pin5);
          // delay(1);
        } else {
          if (readString.indexOf("?4:0") > 0) {
            digitalWrite(pin5, LOW);
            sinalReturn = digitalRead(pin5);
          }
        }


        if (readString.indexOf("?5:1") > 0) {
          digitalWrite(pin6, HIGH);
          sinalReturn = digitalRead(pin6);
          // delay(1);
        } else {
          if (readString.indexOf("?5:0") > 0) {
            digitalWrite(pin6, LOW);
            sinalReturn = digitalRead(pin6);
          }
        }

        if (readString.indexOf("?6:1") > 0) {
          digitalWrite(pin7, HIGH); // 
          sinalReturn = digitalRead(pin7);
          // delay(1);
        } else {
          if (readString.indexOf("?6:0") > 0) {
            digitalWrite(pin7, LOW);
            sinalReturn = digitalRead(pin7);
          }
        }




        readString = "";

        client.println("HTTP/1.1 200 OK");
        // client.println("Accept: application/json");
        client.println("Access-Control-Allow-Origin: *");
        client.println("Content-Type: application/json");
        client.println();
        // client.print(""+String(pinOutSttus)+":"+String(pinInSttus)+"" );
        client.print(String(sinalReturn));

        delay(1);
        client.stop();
      }
    }
  }
}