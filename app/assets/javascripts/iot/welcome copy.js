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

const apiUrl = 'http://45.174.216.22:4151/api/'
const ccHost = '45.174.219.194' //central de comando
const ccPort = '8000' //central de comando
const ccPath = ccHost + ':' + ccPort
const ccUrn = ccHost + ':' + ccPort

// toggleClass_____Seletor
let argIconNameOld;
let argIconSttusOld;
let argBtnSttusOld;

let jsComponentesArr = [];
let jsElemento = [];

let patrimonioObj;
let patrimoniosObjArr = [];

let circuitsObjArr = new Array();
let circuitsQtd;
let circuitsSttusArr = [];

let kinddevsObjArr = [];
let kinddevsQtd;

let sttusInvertArr = [];

// ///////GATILHOS
init(); // load page 


function init() { // iniciado no load da pagina
  processo1() // atualizar
  eventsOnclick() // event click
  window.setInterval(processo1, 5000)//LOOP //window.setTimeout(function(){}, 1000) // SLEEP
} //      init

//////////////////////   init PROCESSO 1
function processo1() {
  atualizarObjsArr('patrimonios', patrimoniosObjArr)
  atualizarObjsArr('kinddevs', kinddevsObjArr)
  atualizarObjsArr('circuits', circuitsObjArr)
  atualizarJsElementosss()
  atualizarJsElementosssStyleENome()
}

function atualizarObjsArr(recurso, objArr) {
  for (i = 1; i <= getTObjQtd(recurso); i++) {
    objArr[i] = requestHttp('GET', apiUrl, recurso + '/', i)
  }
} //     atualizarObjsArr

function getTObjQtd(recurso) {
  // console.log('busca na tab = ' + recurso);
  let objQtd = requestHttp('GET', apiUrl, recurso).data.length
  if (recurso == 'circuits') {
    circuitsQtd = objQtd
  }
  return objQtd
} //     getTObjQtd

function requestHttp(method = 'GET', url, resource = '', id = '', dadosJson = 'null') { //
  xhr.open(method, url + resource + '/' + id, false);
  xhr.setRequestHeader("Accept", "application/vnd.api+json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(JSON.stringify(dadosJson));
  var obj = JSON.parse(xhr.responseText);
  return obj
} //     requestHttp

function atualizarJsElementosss() {// GET ELEMENTOS HTML
  for (i = 1; i <= circuitsQtd; i++) {
    // circuitsObjArr[i].data.attributes.sttus
    let elemento = document.getElementById('js-circuit' + i);
    jsElemento[i] = {
      button: elemento,
      name: elemento.children[0],
      icon: elemento.children[1],
      btn: elemento.children[2],
      sttus: circuitsObjArr[i].data.attributes.sttus,
      sttusInvert: circuitsObjArr[i].data.attributes.sttus ? 0 : 1
    }
  } //for
}//     atualizarJsElementosss
function atualizarJsElemento(i) {// GET ELEMENTOS HTML
    let elemento = document.getElementById('js-circuit' + i);
    jsElemento[i] = {
      button: elemento,
      name: elemento.children[0],
      icon: elemento.children[1],
      btn: elemento.children[2],
      sttus: circuitsObjArr[i].data.attributes.sttus,
      sttusInvert: circuitsObjArr[i].data.attributes.sttus ? 0 : 1
    }
}//     atualizarJsElementosss

function atualizarJsElementosssStyleENome() {
  for (i = 1; i <= circuitsQtd; i++) {
    jsElemento[i].name.innerHTML = circuitsObjArr[i].data.attributes.name
    jsElemento[i].icon.classList.remove(
      "icon-placeholder",
      "icon-sttus-0",
      "icon-sttus-1"
    )
    jsElemento[i].icon.classList.add(
      "icon-" + kinddevsObjArr[circuitsObjArr[i].data.relationships.kinddev.data.id].data.attributes.name,
      "icon-sttus-" + jsElemento[i].sttus
    )
    jsElemento[i].btn.classList.remove(
      // "btn-sttus-" + jsElemento[1].sttusInvert,
      "btn-placeholder",
      "btn-sttus-0",
      "btn-sttus-1"
    )
    jsElemento[i].btn.classList.add(
      "btn-sttus-" + jsElemento[i].sttus
    )
    jsElemento[i].sttus ? jsElemento[i].btn.innerHTML = "ON." : jsElemento[i].btn.innerHTML = "OFF."
  } //for
} //     atualizarJsElementosssStyleENome

/////////////////////    init EVENSONCLICK
function eventsOnclick() {
  for (i = 1; i <= circuitsQtd; i++) {
    btnOnclick(i)
  } //for
} //     btnsOnclick

function btnOnclick(i) {
  jsElemento[i].button.addEventListener('click', function () {
    requestHttpArduino(i, jsElemento[i].sttusInvert)
    atualizarTCircuits(i, jsElemento[i].sttusInvert) // dependencia para setInterval
    atualizarJsElemento(i) // SEGUNDA UTILIZACAO
    atualizarJsElementStyle(i)
    
    // processo2(i) // atualizar
  })
} //     btnOnclick

function requestHttpArduino(rele, pinSttus) { // ARDUINO
  xhr.open('GET', 'http://' + ccHost + ':' + ccPort + '?' + rele + ':' + pinSttus, false);
  xhr.setRequestHeader("Accept", ccHost);
  xhr.send();
  // alert('XXX => ' + xhr.responseText);
  return xhr.responseText
} //      requestHttpArduino

function atualizarTCircuits(num, sttus) {
  circuitsObjArr[num] = {
    data: {
      attributes: {
        sttus: sttus
      }
    }
  } // circuitObj[]
  requestHttp('PATCH', apiUrl, 'circuits', num, circuitsObjArr[num])
  atualizarObjsArr('circuits', circuitsObjArr)
}

//////////////////////    btnOnclick / PROCESSO 2
function processo2(num) {
    if (jsElemento[i].sttus !== circuitsObjArr[i].data.attributes.sttus) {
      atualizarJsElemento(num) // SEGUNDA UTILIZACAO
      atualizarJsElementStyle(num)
    }else{
      console.log('Nenhum alteracaao');
    }
}//     processo2

function atualizarJsElementStyle(i) {// in processo2
  jsElemento[i].icon.classList.remove(
    "icon-placeholder",
    "icon-sttus-0",
    "icon-sttus-1"
  )
  // console.log('XXX => '+ kinddevsObjArr[circuitsObjArr[i].data.relationships.kinddev.data.id].data.attributes.name );
  jsElemento[i].icon.classList.add(
    // "icon-" + kinddevsObjArr[circuitsObjArr[i].data.relationships.kinddev.data.id].data.attributes.name,
    "icon-sttus-" + jsElemento[i].sttus
  )
  jsElemento[i].btn.classList.remove(
    // "btn-sttus-" + jsElemento[1].sttusInvert,
    "btn-placeholder",
    "btn-sttus-0",
    "btn-sttus-1"
  )
  jsElemento[i].btn.classList.add(
    "btn-sttus-" + jsElemento[i].sttus
  )
  jsElemento[i].sttus ? jsElemento[i].btn.innerHTML = "ON." : jsElemento[i].btn.innerHTML = "OFF."
} //       atualizarJsElementStyle


// PROCESSO DO APRENDIZADO
// let iconName = kinddevsObjArr[circuitsObjArr[i].data.relationships.kinddev.data.id].data.attributes.name
