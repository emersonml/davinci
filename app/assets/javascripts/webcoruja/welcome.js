

// var xmlHttp;
// if(window.XMLHttpRequest){
//   xmlHttp = new XMLHttpRequest;
// }else{
//   xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
// }

// xmlHttp.onreadystatechange = function(){
//   if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
//     console.log(xmlHttp.responseText);
//   }
// }

// xmlHttp.open('GET', 'dados.html.erb', true);
// xmlHttp.send();

$("#cardActives").load("dados.html.erb")



//////////////////////////////////////////////////////
// var dados = new FormData();
// dados.append('nome', 'Emerson');
// dados.append('idade', 37);
// dados.append('end', 'Rua Lobato');


// $.ajax({
//   url: 'http://5gbrasil.net.br:3003/webcoruja/welcome/dados',
//   method: 'GET',
//   // data: dados,
//   processData: false,
//   contentType: false

// }).done(function(result){
// // window.alert(resposta);
// $('#cardActives').text(result)
// })



// $.ajax({
//   url: "/api/getWeather",
//   data: {
//     zipcode: 97201
//   },
//   success: function( result ) {
//     $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//   }
// });