#include <SPI.h> //INCLUSÃO DE BIBLIOTECA
#include <UIPEthernet.h> //INCLUSÃO DE BIBLIOTECA

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED }; 
byte ip[] = { 172, 20, 0, 102 }; 
EthernetServer server(8000); //PORTA EM QUE A CONEXÃO SERÁ FEITA

int ledPin = 8; //PINO DIGITAL UTILIZADO PELO LED
String readString = String(30);
int status = 0; //DECLARAÇÃO DE VARIÁVEL DO TIPO INTEIRA(SERÁ RESPONSÁVEL POR VERIFICAR O STATUS ATUAL DO LED)

void setup(){
  Ethernet.begin(mac, ip);
  server.begin();
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
  }
void loop(){
EthernetClient client = server.available();
  if (client) { // SE EXISTE CLIENTE FAZ
    while (client.connected()) {//ENQUANTO EXISTIR CLIENTE CONECTADO, FAZ
   if (client.available()) { //SE O CLIENTE ESTÁ HABILITADO, FAZ
    char c = client.read();
    if (readString.length() < 100) //SE O ARRAY FOR MENOR QUE 100, FAZ
      {
        readString += c; // "readstring" VAI RECEBER OS CARACTERES LIDO
      }  
        if (c == '\n') { //SE ENCONTRAR "\n" É O FINAL DO CABEÇALHO DA REQUISIÇÃO HTTP, FAZ
          if (readString.indexOf("?") <0){ //SE ENCONTRAR O CARACTER "?", FAZ
          }
          else //SENÃO, FAZ
        if(readString.indexOf("ledParam=1") >0){ //SE ENCONTRAR O PARÂMETRO "ledParam=1", FAZ
             digitalWrite(ledPin, HIGH);
             status = 1; //VARIÁVEL RECEBE VALOR 1(SIGNIFICA QUE O LED ESTÁ LIGADO)
           }else{ //SENÃO, FAZ
             digitalWrite(ledPin, LOW);
             status = 0; //VARIÁVEL RECEBE VALOR 0(SIGNIFICA QUE O LED ESTÁ DESLIGADO)             
           }
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println();
          //AS LINHAS ABAIXO CRIAM A PÁGINA HTML
          client.println("<body style=background-color:#ADD8E6>");
          client.println("<center><font color='blue'><h1>MASTERWALKER SHOP</font></center></h1>");
          client.println("<h1><center>CONTROLE DE LED</center></h1>");
          if (status == 1){ //SE VARIÁVEL FOR IGUAL A 1, FAZ
          //A LINHA ABAIXO CRIA UM FORMULÁRIO CONTENDO UMA ENTRADA INVISÍVEL(hidden) COM O PARÂMETRO DA URL E CRIA UM BOTÃO APAGAR (CASO O LED ESTEJA LIGADO)
          client.println("<center><form method=get name=LED><input type=hidden name=ledParam value=0 /><input type=submit value=APAGAR></form></center>");
          }else{ //SENÃO, FAZ
          //A LINHA ABAIXO CRIA UM FORMULÁRIO CONTENDO UMA ENTRADA INVISÍVEL(hidden) COM O PARÂMETRO DA URL E CRIA UM BOTÃO ACENDER (CASO O LED ESTEJA DESLIGADO)
          client.println("<center><form method=get name=LED><input type=hidden name=ledParam value=1 /><input type=submit value=ACENDER></form></center>");
          }
          client.println("<center><font size='5'>Status atual do LED: </center>");
          if (status == 1){ //SE VARIÁVEL FOR IGUAL A 1, FAZ
              client.println("<center><font color='green' size='5'>LIGADO</center>");
          }else{ //SENÃO, FAZ
              client.println("<center><font color='red' size='5'>DESLIGADO</center>");
          }     
          client.println("<hr />");
          client.println("<hr />");
          client.println("</body></html>");
          readString=""; //A VARIÁVEL É REINICIALIZADA
          client.stop(); //FINALIZA A REQUISIÇÃO HTTP E DESCONECTA O CLIENTE
            }
          }
        }
      }
 }