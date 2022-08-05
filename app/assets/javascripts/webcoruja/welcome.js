////////////////////////////////  option 1

// window.setInterval('aaa()', 30000)

// function aaa() {

// $.ajax({
//   url: 'http://5gbrasil.net.br:3003/webcoruja/welcome/dados',
//   // uri: 'webcoruja/welcome/dados',
//   method: 'GET',
//   // data: dados,
//   processData: false,
//   contentType: false

// }).done(function(result){
// // window.alert(resposta);
// $('#cardActives').text(result)
// })

// }

////////////////////////////////  option 1



////////////////////////////////  option 2
var xmlHttp;
if(window.XMLHttpRequest){
  xmlHttp = new XMLHttpRequest;
}else{
  xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}

// xmlHttp.onreadystatechange = function(){
  //   if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
    //     console.log(xmlHttp.responseText);
    //   }
    // }
    window.setInterval('bbb()', 3000)  //  executar a funcao getUrl a cada tantos milisegundos
    
    function bbb() {
      xmlHttp.open('GET', 'http://5gbrasil.net.br:3000/webcoruja/welcome/dados', false);
      // xmlHttp.open('GET', 'dados', true);
      xmlHttp.send();
      
      
      // $("#cardActives").text(responseText)
      document.getElementById('cardActives').innerHTML = xmlHttp.responseText
    }
    ////////////////////////////////  option 2
    

    





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
