alert('romario')

let flag;

let method;
let url;
let port;
let resource;
let action;
let params;
let sync;

let dev1;
let dev1sinal;
let pin2;
let bton1;
let bton2;
let bton3;


// function bodyload() {
  //   initProcessos()
  //   // verificarFlagDeAtualizarPagina()
  // }
  window.setInterval('initProcessos()', 2000)
  
  function initProcessos() {
    // alert("romario")
  definindoParametros()
  atualizarFlag() //altera flag
  
}
function definindoParametros(){
  pin2 = "2"
  dev1 = pin2
  bton1 = dev1
  flag = 1;
  method = 'GET'
  url = 'http://45.174.216.22'
  port = ':4051'
  resource = '/iot/api/'
  action = 'fetch'
  params = 'dev1sinal'
  sync = false

}
function atualizarFlag(){
  dev1sinal = dev1Sinal()
  alert(dev1sinal)
}
function dev1Sinal(){
  respostaHttp = requestHttp(method, url, port, resource, action, params, sync)
  return respostaHttp
}

atualizaValueJsRefBtn1(respostaHttp)
/* GATILHOS DE ACAO */

/* FIM gatilhos de acao */

function verificadores(){
  
  
}
function verificarFlagDeAtualizarPagina(){
  if(flag == 1){
    flag=0; 
    atualizarPagina()
  }
}
function atualizarPagina(){
  atualizarBtn()
    // alert("atualizarPagina")
}




// ///////   DEFININDO VARIAVEIS
function xhrNavegadorClient() {
  if (window.XMLHttpRequest) {
    const xhr = new XMLHttpRequest();
    return xhr
  } else {
    const xhr = new ActiveXObject("Microsoft.XMLHTTP");
    return xhr
  }
}

var xhr = xhrNavegadorClient()
const btn1Celula = document.querySelector('.js-btn1-celula');
const btn1 = document.querySelector('.js-btn1');
const btn2 = document.querySelector('.celula.js-btn2');
const iconLampada1 = document.querySelector('.icon-lampada1');







function requestHttp(method, url, port, resource, action, params, sync) {
  // alert("abc" + params)
  xhr.open(method, url+port+resource+action+params, sync);
  xhr.send();
  return xhr.responseText
}

function atualizaValueJsRefBtn1(pinSinal) {
  valueJsRefBtn1 = document.getElementById('js-ref-btn1').value = pinSinal
  document.getElementById('js-ref-btn1').innerHTML = valueJsRefBtn1
  atualizar()
}
function atualizarBtn() {
  btn1HiddenValue = document.getElementById('js-ref-btn1').value
  if (btn1HiddenValue == 1) {
    toggleClass(iconLampada1, "icon-lampada1-off", "icon-lampada1-on")
    toggleClass(btn1, "btn-off", "btn-on")
    btn1.innerHTML = "off"
  } else {
    btn1.innerHTML = "on"
    toggleClass(iconLampada1, "icon-lampada1-on", "icon-lampada1-off")
    toggleClass(btn1, "btn-on", "btn-off")
  }
}

function toggleClass(seletor, add, remove) {
  seletor.classList.remove(remove)
  seletor.classList.add(add)
}

/* onclick btn1 send url p/ arduino */
btn1.addEventListener('click', function () {
  // event.preventDefault();
  let url = 'http://45.174.219.194:8000/'
  // if(get)
  let params = '?2=1'
  respostaHttp = requestHttp(url, params)
  salvar(respostaHttp)

});

function requestHttp(url = null, params = null) {
  // alert("abc"+params)
  xhr.open('GET', url + params, false);
  xhr.send();
  return xhr.responseText
}

function salvar(respostaHttp) {
  // requestHttp(verbo='GET' url params=respostaHttp sync=false)
  xhr.open('GET', 'http://45.174.216.22:4051/iot/welcome/salvar/?pinRtrnSinal=' + respostaHttp, false);
  xhr.send();
  // alert("ab"+respostaHttp)

}





// /* time em tempo */window.setInterval('atualizaBtns()', 3000) 





// /*  */ function apiResponse() {
//   xhr.open('GET', `http://45.174.216.22:4051/iot/welcome/apiresponse`, false);
//   xhr.send();

// }







// /* atualiza btn */ function reqHttpResp() {
//   xhr.open('GET', `http://45.174.216.22:4051/iot/welcome/api/?pinosSttus=${xhr.responseText}`, false);
//   xhr.send();

//   // btn1HiddenValue = document.getElementById('js-input-hidden1').value = xhr.responseText
//   // document.getElementById('js-input-hidden1').innerHTML = btn1HiddenValue
// }

//////////////////////////
// btn2.addEventListener('click', function(event){
//   event.preventDefault();
//   xhr.open('GET', 'http://45.174.219.194:8000/?pin2off', false);
//   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//   xhr.send();

//   console.log("off");

// });

//////////////////////////



// document.getElementById('responseText').innerHTML = xhr.responseText;
// alert(xhr.responseText);   // console.log("on");
// document.getElementById('js-hidden1').innerHTML = xhr.responseText
// document.getElementById('js-hidden1').value.innerHTML = xhr.responseText



// function prevent(event){

// const ps    = form.querySelector('.peso').value;
// const altr  = form.querySelector('.altura').value;
// peso = Number(ps)
// altura = Number(altr)
// const imc = peso / (altura ** 2)
// // resultado.innerHTML = `${peso} <br/>`
// // resultado.innerHTML += `${altura} <br/>`
// const resultado = classificacaoImc(imc);
// console.log(resultado);

// divResultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} <br/>`
// divResultado.innerHTML += `RESULTADO: ${resultado} <br/>`

// }


////////////////////////////////  option 2

// xmlHttp.onreadystatechange = function(){
//   if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
//     console.log(xmlHttp.responseText);
//   }
// }
// window.setInterval('bbb()', 3000) //  executar a funcao getUrl a cada tantos milisegundos

// function sendUrl() {
//   xmlHttp.open('GET', 'http://45.174.219.194:8000/?pin2on', false);
//   xmlHttp.send();
//   // return xmlHttp.responseText;
//   console.log(1111);
//   // console.log(xmlHttp.responseText);
//   // document.querySelector('.celula.js-btn1').innerHTML = xmlHttp.responseText;
//   // btn1.style.backgroundColor = 'black'
//   // document.querySelector("header span:nth-child(1)").style.display = 'grid'
// }




////////////////////////////////  option 2



////////////////////////////////  option 1



////////////////////////////////  option 1




////////////////////////////////  testes
// var counter = 0
// function refreshDiv() {
//   counter = counter + 1
//   document.getElementById('cardActives').innerHTML = xmlHttp.send() + counter
// }


//////////////////////////////////////////////////////
// var dados = new FormData();
// dados.append('nome', 'Emerson');
// dados.append('idade', 37);
// dados.append('end', 'Rua Lobato');



// $.ajax({
//   url: "/api/getWeather",
//   data: {
//     zipcode: 97201
//   },
//   success: function( result ) {
//     $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//   }
// });





// }
// myScope();