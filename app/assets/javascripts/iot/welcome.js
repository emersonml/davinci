var xhr = XMLHttpRequestClient()

function XMLHttpRequestClient() {
  if (window.XMLHttpRequest) {
    const xhr = new XMLHttpRequest();
    return xhr
  } else {
    const xhr = new ActiveXObject("Microsoft.XMLHTTP");
    return xhr
  }
}

const ipCc = '45.174.219.194' //central de comando
const urlApi = 'http://45.174.216.22:4151/'
const jsLampada1 = document.querySelector('.icon-lampada1');
const jsBtn1 = document.querySelector('.js-btn1');
const jsBtn1Celula = document.getElementById('js-btn1-celula');
const jsBtn2Celula = document.getElementById('js-btn2-celula');
let btnObj;
let btnSttus;
// let btn2Obj;
// let btn2Sttus;

let circuitObj;
let circuitSttus;
// let circuit2Obj;
// let circuit2Sttus;




///////GATILHOS
init_0(); // atualiza os obj e variaveis

jsBtn1Celula.addEventListener('click', function () { //  CLINK
  btnOnclick()
});
// jsBtn2Celula.addEventListener('click', function () { //  CLINK
//   btnOnclick2()
// });
window.setInterval('init_0()', 2000) // LOOP
// .............. FIM DOS GATILHOS

//INICIO DAS FUNCTIONS ............
function init_0() {
  atualizarCircuits()
  atualizarBtns()
  atualizarJsBtnCelulas()
  atualizarArduino()

  function atualizarArduino() {
    // alert('circuitSttus => '+ circuitSttus);

    xhr.open('GET', 'http://' + ipCc + ':8000/?2:' + circuitSttus, false);
    xhr.setRequestHeader("Accept", ipCc);
    // xhr.setRequestHeader("Accept", "*/*");
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*/*');
    xhr.send();
    // return xhr.responseText  // nao é necessario pois o potao atualiza o circuit 

    // alert('XXX => '+ xhr.responseText);
  }

  function atualizarBtns() {

    btnObj = getEntidade('btns/', '1')
    btnSttus = btnObj.data.attributes.sttus
    
    // btnsObj = getEntidade('btns/', '2')
    // btnsSttus = btnsObj.data.attributes.sttus
  }

  function atualizarCircuits() {

    circuitObj = getEntidade('circuits/', '1')
    circuitSttus = circuitObj.data.attributes.sttus

    // circuit2Obj = getEntidade('circuits/', '2')
    // circuit2Sttus = circuit2Obj.data.attributes.sttus
  }

  // function isCircuitAtualizado(){
  //   if ( circuits.data.attributes.sttus !== getEntidade('circuits/1').sttus ){
  //     alert('atual');
  //   }

  // }

  function atualizarJsBtnCelulas() {
    if (circuitSttus === 1) {
      jsBtnSetOn()
    } else {
      btnSetOff()
    }

  }

  function getEntidade(resource, id) {
    return requestHttpGet(resource, id)

  }
  // function circuitSttusAtualizar(){
  //    requestHttp()
  // }
  function jsBtnSetOn() {
    toggleClass(jsLampada1, "icon-lampada1-off", "icon-lampada1-on") //or**4
    toggleClass(jsBtn1, "btn-off", "btn-on") //**5
    jsBtn1.innerHTML = "ON"
  }

  function btnSetOff() {
    toggleClass(jsLampada1, "icon-lampada1-on", "icon-lampada1-off") //or**4
    toggleClass(jsBtn1, "btn-on", "btn-off") //**5
    jsBtn1.innerHTML = "OFF"
  }

  function toggleClass(seletor, remove, add) {
    seletor.classList.remove(remove)
    seletor.classList.add(add)
  }





} /// FIM Init0

/////////////////////////////////////////////////////// FUNCTIONS GATILHO ONCLICK
function btnOnclick() {
  let circuitSttus = requestHttpGet('circuits/', '1').data.attributes.sttus
  circuitSttusInvert = circuitSttus ? "0" : "1" // inverte valor do circuitSttus
  requestHttpPatch('circuits/', '1', circuitSttusInvert)
};
function btnOnclick2() {
  let circuitSttus = requestHttpGet('circuits/', '2').data.attributes.sttus
  circuitSttusInvert = circuitSttus ? "0" : "1" // inverte valor do circuitSttus
  requestHttpPatch('circuits/', '2', circuitSttusInvert)
};


function requestHttpGet(resource = '', id = '') { //
  xhr.open('GET', 'http://45.174.216.22:4151/' + resource + id, false);
  xhr.setRequestHeader("Accept", "application/vnd.api+json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
  var obj = JSON.parse(xhr.responseText);
  return obj


  // (dados !== null)? alert('yes') : alert('no')

  //   circuits = {"data": {attributes: {sttus:}}}
  // alert('parse => '+ obj);
}

function requestHttpPatch(resource = '', id = '', dados = null) { //
  xhr.open('PATCH', 'http://45.174.216.22:4151/' + resource + id, false);
  xhr.setRequestHeader("Accept", "application/vnd.api+json");
  xhr.setRequestHeader("Content-Type", "application/json");

  if (dados !== null) {
    circuitObj = {
      data: {
        attributes: {
          sttus: dados
        }
      }
    }
    xhr.send(JSON.stringify(circuitObj));
    // alert('RESPOSTA requestHttpPatch => '+ xhr.responseText);   //NAO APAGAR
  } else {
    alert('requestHttpPatch, nenhum dado');
  }

}


// function dbjose(recurso, circuit) { //pro1
//   // alert('123 consultar_db_dev_sttus dev1  => '+ dev1.cod);
//   method = 'GET'
//   // url = api.url+recurso'/?table='+circuit.dev.table+'&col='+circuit.dev.name+'&celula='+circuit.dev.sttus
//   // url = 'http://45.174.216.22:4151/c'
//   //  respostaHttp 
//   let responseHttp = requestHttp(method, url, sync) //pro1
//   alert('responseHttp rtn dev1=> ' + responseHttp);
//   return responseHttp
// }


// // ///////   DEFININDO VARIAVEIS





// function atualizaValueJsRefBtn1(pinnameSinal) {
//   valueJsRefBtn1 = document.getElementById('js-ref-btn1').value = pinnameSinal
//   document.getElementById('js-ref-btn1').innerHTML = valueJsRefBtn1
// }


// /* atualiza btn */ function reqHttpResp() {
//   xhr.open('GET', `http://45.174.216.22:4051/iot/welcome/api/?pinnameosSttus=${xhr.responseText}`, false);
//   xhr.send();

//   // btn1HiddenValue = document.getElementById('js-input-hidden1').value = xhr.responseText
//   // document.getElementById('js-input-hidden1').innerHTML = btn1HiddenValue
// }

//////////////////////////
// btn2.addEventListener('click', function(event){
//   event.preventDefault();
//   xhr.open('GET', 'http://45.174.219.194:8000/?pinname2off', false);
//   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//   xhr.send();

//   console.log("off");

// });

//////////////////////////