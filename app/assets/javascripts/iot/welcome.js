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

// Rails.application.routes.default_url_options = {
//   host: 45.174.216.22,
//   port: 4151
// }

// toggleClass_____Seletor
let argIconNameOld;
let argIconSttusOld;
let argBtnSttusOld;

let jsElemento = [];

let patrimonios = [];

let kindbtns = [];

let kinddevs = [];
let kinddevsQtd;

let circuits = new Array();
let circuitsQtd;

let sttusInvertArr = [];

// ///////GATILHOS
init(); // load page 

window.setInterval(processo2, 20000) //LOOP //window.setTimeout(function(){}, 1000) // SLEEP
function init() { // iniciado no load da pagina
  atualizarObjsArr('patrimonios', patrimonios)
  atualizarObjsArr('kinddevs', kinddevs)
  atualizarObjsArr('kindbtns', kindbtns)
  atualizarObjsArr('circuits', circuits)
  processo1() // atualizar
  eventsOnclick() // event click
} //      init

//////////////////////   init PROCESSO 1
function processo1() {
  atualizarObjsArrProcesso1('circuits', circuits)
  atualizarJsElementosss()
  atualizarJsElementosssStyleENome()
}

function atualizarObjsArr(recurso, objArr) {
  for (i = 1; i <= getTObjQtd(recurso); i++) {
    objArr[i] = requestHttp('GET', apiUrl, recurso + '/', i)
  }
} //     atualizarObjsArr
function atualizarObjArr(recurso, objArr, num) {
    objArr[num] = requestHttp('GET', apiUrl, recurso + '/', num)
} //     atualizarObjsArr
function atualizarObjsArrProcesso1(recurso, objArr) {
  for (i = 1; i <= circuitsQtd; i++) {
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

function atualizarJsElementosss() { // GET ELEMENTOS HTML
  for (i = 1; i <= circuitsQtd; i++) {
    // circuits[i].data.attributes.sttus
    let elemento = document.getElementById('js-circuit' + i);
    jsElemento[i] = {
      button: elemento,
      name: elemento.children[0],
      icon: elemento.children[1],
      btn: elemento.children[2],
      sttus: circuits[i].data.attributes.sttus,
      sttusInvert: circuits[i].data.attributes.sttus ? 0 : 1
    }
  } //for
} //     atualizarJsElementosss
function atualizarJsElemento(i) { // GET ELEMENTOS HTML
  let elemento = document.getElementById('js-circuit' + i);
  jsElemento[i] = {
    button: elemento,
    name: elemento.children[0],
    icon: elemento.children[1],
    btn: elemento.children[2],
    sttus: circuits[i].data.attributes.sttus,
    sttusInvert: circuits[i].data.attributes.sttus ? 0 : 1
  }
} //     atualizarJsElementosss

function atualizarJsElementosssStyleENome() {
  for (i = 1; i <= circuitsQtd; i++) {
    jsElemento[i].name.innerHTML = circuits[i].data.attributes.name
    removeJsElementStyle(i)

    jsElemento[i].icon.classList.add(
      "icon-" + kinddevs[circuits[i].data.relationships.kinddev.data.id].data.attributes.name,
      "icon-sttus-" + jsElemento[i].sttus
    )

    jsElemento[i].btn.classList.add("btn-sttus-" + jsElemento[i].sttus)
    jsElemento[i].sttus ? jsElemento[i].btn.innerHTML = "ON" : jsElemento[i].btn.innerHTML = "OFF"
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

    let kindBtn = kindbtns[circuits[i].data.relationships.kindbtn.data.id].data.attributes.name

    switch (kindBtn) {
      case 'time':
        btnTemporizado(i, '5000')
        break;
      case 'pulso':
        btnTemporizado(i, '50')
        break;
      default:
        requestHttpArduino(i, jsElemento[i].sttusInvert)
        atualizarJsElemento(i) // SEGUNDA UTILIZACAO
        atualizarJsElementStyle(i)
        atualizarTCircuits(i, jsElemento[i].sttusInvert) // dependencia para setInterval
    } //switch
  }) //addEventListener
} //     btnOnclick

function btnTemporizado(i, tempo) {

  requestHttpArduino(i, '1')

  sttus1ElementStyle(i)
  window.setTimeout(function () {
    sttus0ElementStyle(i)
    requestHttpArduino(i, '0')
  }, tempo)
}

function requestHttpArduino(i, pinSttus) { // ARDUINO

  xhr.open('GET', 'http://' + ccHost + ':' + ccPort + '?' + i + ':' + pinSttus, false);
  xhr.setRequestHeader("Accept", ccHost);
  xhr.send();
  // alert('XXX => ' + xhr.responseText);
  return xhr.responseText
} //      requestHttpArduino

function atualizarTCircuits(num, sttus) {
  circuits[num] = {
    data: {
      attributes: {
        sttus: sttus
      }
    }
  } // circuitObj[]
  requestHttp('PATCH', apiUrl, 'circuits', num, circuits[num])
  atualizarObjArr('circuits', circuits, num)
}

//////////////////////    btnOnclick / PROCESSO 2
function processo2(num) {
  atualizarObjsArr('circuits', circuits)
  atualizarJsElementosss()
  atualizarJsElementosssStyleENome()
} //     processo2

function atualizarJsElementStyle(i) { // in processo2
  removeJsElementStyle(i)
  addJsElementStyle(i)
} //      atualizarJsElementStyle

function removeJsElementStyle(i) {
  jsElemento[i].icon.classList.remove(
    "icon-placeholder",
    "icon-sttus-0",
    "icon-sttus-1"
  )
  jsElemento[i].btn.classList.remove(
    "btn-placeholder",
    "btn-sttus-0",
    "btn-sttus-1"
  )
} //     desableJsElementStyle

function addJsElementStyle(i) {
  jsElemento[i].sttusInvert ? sttus1ElementStyle(i) : sttus0ElementStyle(i)
  // jsElemento[i].icon.classList.add("icon-sttus-" + jsElemento[i].sttusInvert)
  // jsElemento[i].btn.classList.add("btn-sttus-" + jsElemento[i].sttusInvert)
} //     addJsElementStyle

function sttus0ElementStyle(i) {
  removeJsElementStyle(i)
  jsElemento[i].icon.classList.add("icon-sttus-0")
  jsElemento[i].btn.classList.add("btn-sttus-0")
  jsElemento[i].btn.innerHTML = "OFF."
} //     addJsElementStyle
function sttus1ElementStyle(i) {

  removeJsElementStyle(i)
  jsElemento[i].icon.classList.add("icon-sttus-1")
  jsElemento[i].btn.classList.add("btn-sttus-1")
  jsElemento[i].btn.innerHTML = "ON."
} //     addJsElementStyle






//   ALERTS
// alert('circuit id      => '+ circuits[i].data.id );
// alert('kind id         => '+ circuits[i].data.relationships.kinddev.data.id );
// alert('dev.name do circ  => '+ kinddevs[circuits[i].data.relationships.kinddev.data.id].data.attributes.name );
// alert('btn.name do circ  => '+ kindbtns[circuits[i].data.relationships.kindbtn.data.id].data.attributes.name );