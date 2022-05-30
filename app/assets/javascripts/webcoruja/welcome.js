



/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
// const nav = document.querySelector('#header nav')

  //////////   GATILHO -> INIT WIDTH
    const vmedium  = window.matchMedia( '(min-width: 400px)' );
    const vlarge   = window.matchMedia( '(min-width: 800px)' );
    mediumtrue = vmedium.matches;
    largetrue = vlarge.matches;
        if (largetrue == true) {
            configLarge('init ');
          } else if (mediumtrue == true) {
            configMedium('init ');
          } else {
            configSmall('init ');  
            hideAside('init ');
            hideColDirAsideUndo2('init ');
          // mensagem = "Atenção";
        }
        



//   //////////  GATILHO ->  OUVINDO RENDERIZACAO DE WIDTH
const mqMedium  = window.matchMedia( '(min-width: 400px)' );
mqMedium.addEventListener('change', (query) => {
  if(query.matches )   {
    configMedium('renderSM ')
    hideColDirAsideUndo2()
  } else { 
    configSmall('renderMS ')
    hideAside() 
    }
  });
  
  const mqLarge = window.matchMedia( '(min-width: 800px)' );
  mqLarge.addEventListener('change', (query) => {
    if(query.matches )   {
      configLarge('render ')
    } else { 
      configMedium('renderLM ')
    }
  
  });


      

//   //////  GATILHO -> OUVINDO ELEMENTOS CLICADOS CLICK //////////////////////////////////////////////////////////////////////

// SANDUICHE
const sanduiche = document.querySelectorAll('nav .js-sanduiche')
for (const element of sanduiche) {
  element.addEventListener('click', function () {
    configLarge('clickSuduiche ')
    showAside('clickSuduiche ');
    showColDirAsideUndo2('clickSuduiche ');
  })
}
// UNDO2 VOLTAR
const undo2 = document.querySelectorAll('body .js-undo2')
for (const element of undo2) {
  element.addEventListener('click', function () {
    hideAside('clickUndo ');
  })
}
  const forward3 = document.querySelectorAll('header .js-forward3')
  for (const link of forward3) {
    link.addEventListener('click', function () {
      // console.log()
      showAside('forward3 ')
      // showAsideMQLarge();
      // document.getElementById('js-aside').style.visibility = "hidden"
    })
  }
  


//         //////////   FUNCTIONS
        
        
        function configSmall(a){
          console.log(a+'configSmall')
          
          // document.querySelector('aside').style.display = "none"
          // document.querySelector('aside').style.visibility = "hidden"
          
          // document.getElementById('js-aside').style.visibility = "hidden"
          // document.getElementById('js-sanduiche').style.visibility = "visible"
          // document.getElementById('js-forward3').style.visibility = "hidden"

        }
function configMedium(a){
  console.log(a+'configMedium' )
// showAsideMQMedium();
showAside()
// document.querySelector('aside').style.display = "grid"
document.getElementById('js-forward3').style.visibility = "visible"
// document.getElementById('js-undo2').style.display = "none"
document.getElementById('js-sanduiche').style.display = "none"
}
        
        
        //           hiddenSanduiche();
//         }
function configLarge(a){
  console.log(a+'configLarge' )
// document.getElementById('js-forward3' ).style.visibility = "hidden"
// document.getElementById('js-sanduiche').style.visibility = "hidden"
// document.getElementById('js-exit').style.visibility = "visible"
}








function showAside(a){
  console.log(a+'showAside');
  document.getElementById('js-aside').style.display = "grid";
  if(a === "forward3 "  ){
    console.log("sssssss");
  } else{
    console.log("nnnnnnnnnn");

  }
}
function showColDirAsideUndo2(a){
  console.log(a+'showColDirAsideUndo2')
  document.getElementById('js-colDir-Aside-undo2').style.display = "grid"

}


function hideAside(a){
  console.log(a+'hideAside')
  // console.log('js-undo2->showAside')
  document.getElementById('js-aside').style.display = "none"
  document.getElementById('js-colDir-Aside-undo2').style.display = "none"
}
function hideColDirAsideUndo2(a){
  console.log(a+'hideColDirAsideUndo2')
  document.getElementById('js-colDir-Aside-undo2').style.display = "none"
}
//         function showAsideMQMedium(){
//           console.log('showAsideMQLarge')
//           document.getElementById('js-aside').style.visibility = "visible"
//           document.getElementById('js-aside').style.primaryColor
//         }
//         function showAsideMQLarge(){
//           console.log('showAsideMQLarge')
//           // document.getElementById('js-header').style.visibility = "visible"
//           elemente = document.getElementById('js-header').style
//           .marginLeft = "var(--width-aside-large)"
//           elemente.width = "calc 100vw - (var(--width-aside-large))"

//           elemente = document.getElementById('js-aside').style
//           elemente.width = "var(--width-aside-large)"
//           // elemente.background = "red"
//           document.getElementById('js-main').style.marginLeft = "var(--width-aside-large)"
//           // document.getElementById('js-main').style.background = "red"
//           document.getElementById('js-footer').style.marginLeft = "var(--width-aside-large)"
//         }
        
        


//         function hiddenSanduiche(){
//           console.log('hiddenSanduiche');
//           document.getElementById('js-sanduiche').style.visibility = "hidden"
//         }