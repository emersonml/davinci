// Serial.println(readString);  É =  GET /?ligar HTTP/1.1  Host: 45.174.219.194:8000  User-Agen



//Programa: Automacao Residencial com Arduino e Ethernet Shield
//Autor: EMERSON
 
#include <SPI.h>  
#include <Ethernet.h>
String readString;
 
int pin2=2;
int pin2Sttus=0;
 
byte mac[] = { 0xA4, 0x28, 0x72, 0xCA, 0x55, 0x2E }; 
byte ip[] = { 172, 20, 0, 102 };
byte gateway[] = { 172, 20, 0, 1 };
byte subnet[] = { 255, 255, 0, 0 };
EthernetServer server(8000);
 
void setup(){
  Serial.begin(9600);
  pinMode(pin2, OUTPUT);
  // pinMode(pin3, INPUT_PULLUP);
  Ethernet.begin(mac, ip, gateway, subnet);
  server.begin();
  digitalWrite(pin2, LOW);
  
}
void loop(){
  // int pin2Sttus = digitalRead(pin2); 
  // Serial.println("pin2: " + String(pin2Sttus));
  // delay(1);

  EthernetClient client = server.available();

  if (!client){ return; }
  while (client.connected()){
    if (client.available()){ 
      char c = client.read();
      if (readString.length() < 40){
        readString += c;
      }
      if (c == '\n'){
        Serial.println(readString);
        if (readString.indexOf("?2:1") > 0){
          digitalWrite(pin2, HIGH); // rele2=NF  circulto = NAtivo
          pin2Sttus = digitalRead(pin2);
          delay(1);
          // pinInSttus = digitalRead(pin3);
        }
        else{
          if (readString.indexOf("?2:0") > 0){
            digitalWrite(pin2, LOW);
            pin2Sttus = digitalRead(pin2);
            delay(1);
          }
        } 
        readString = "";
        client.println("HTTP/1.1 200 OK");
        // client.println("Accept: application/json");
        client.println("Content-Type: application/json");
        client.println("Access-Control-Allow-Origin: *");
        client.println();
        // client.print(""+String(pinOutSttus)+":"+String(pinInSttus)+"" );
        client.print(String(pin2Sttus));

        delay(1);
        client.stop();
      }
    }
  }
  
}