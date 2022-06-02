// iPhone  12/13  390/844
var minMedium = "(min-width: 400px)"
var minLarge = "(min-width: 850px)"

  //////////   GATILHO -> iNIT WIDTH
    const mqIniteMedium  = window.matchMedia( minMedium );
    const mqInitLarge   = window.matchMedia( minLarge );
    mediumTrue = mqIniteMedium.matches; // true ou false
    largeTrue = mqInitLarge.matches; // true ou false
        if (largeTrue == true) {
            config(controller = 'init', action = 'large' );  
          } else if (mediumTrue == true) {
            config(controller = 'init', action = 'medium' );  
          } else {
            config(controller = 'init', action = 'small' );  
        }

//   //////////  GATILHO ->  OUVINDO rENDERIZACAO DE WIDTH
const mqRenderMedium  = window.matchMedia( minMedium );
const mqRenderLarge   = window.matchMedia( minLarge );

mqRenderMedium.addEventListener('change', (query) => {
  if(query.matches )   {
    config(controller = 'render', action = 'smallMedium' );  
  } else { 
    config(controller = 'render', action = 'mediumSmall' );  
  }
});
mqRenderLarge.addEventListener('change', (query) => {
  if(query.matches )   {
      config(controller = 'render', action = 'mediumLarge' );  
    } else { 
      config(controller = 'render', action = 'largeMedium' );  
    }
  });

//   //////  GATILHO -> OUVINDO CLICK ELEMENTOS CLICADOS CLICK //////////////////////////////////////////////////////////////////////
// SANDUICHE
const sanduiche = document.querySelectorAll('nav .js-sanduiche')
for (const element of sanduiche) {
  element.addEventListener('click', function () {
    config(controller='click', action='js-sanduiche')
  })
}
// UNDO2 VOLTAR
const undo2 = document.querySelectorAll('body .js-undo2')
for (const element of undo2) {
  element.addEventListener('click', function () {
    config(controller='click', action='js-undo2')
  })
}
const backward2 = document.querySelectorAll('header .js-backward2')
for (const element of backward2) {
  element.addEventListener('click', function () {
      config(controller='click', action='js-backward2')
    })
  }

//         //////////   FUNCTIONS CASES
                function config(controller, action ){

                  //1S
                  switch(controller){
                    //1S1C
                    case "init":
                      switch(action){
                        case "small":  console.log(controller+'|'+action ); break;  
                        case "medium": console.log(controller+'|'+action ); break;  
                        case "large": console.log(controller+'|'+action ); break;  
                        }break;
                    //1S2C
                    case "render":
                      switch(action){
                        case "smallMedium":  console.log(controller+'|'+action ) 
                        showRender(id='js-aside')
                        break; 
                        case "mediumLarge":  console.log(controller+'|'+action ) 
                        // hide('js-sanduiche')
                        // show('js-backward2')
                        break; 
                        case "largeMedium":  console.log(controller+'|'+action ) 
                        
                        break;  
                        case "mediumSmall": console.log(controller+'|'+action )
                        hideRender(id='js-aside')
                        break;  
                      }break;           
                    //1S3C
                    case "click":
                      switch(action){
                        case "js-sanduiche": 
                          showRender(id='js-aside')
                        break;
                        case "js-undo2": 
                          hideRender(id='js-aside')
                        break;
                        case "js-backward2": 
                          hideClick(id='js-aside')
                        break;
                        default: console.log('default 1S3C1S'); break;           
                        }break;
                    //1SDC
                    default:
                      console.log('default 1S'); break;  
                        // darkOrLight = "Unknown";
                  }// FIN 1S
                }// fun config



function showRender(id){
  document.getElementById(id).style.visibility = 'visible'
}
function hideRender(id){
  document.getElementById(id).style.visibility = 'hidden'
}
function hideClick(id){
  document.getElementById(id).style.display = 'none'
}


function show(idVisibility, idDisplay){
  console.log(controller+'|'+evento+'|'+idVisibility )


  if(mq === 'small'){
      document.getElementById(idVisibility).style.visibility = 'visible'
      document.getElementById(idDisplay).style.display = 'grid'
  }
  else if(mq === 'smallMedium'){
    console.log(controller+'|'+evento+'|'+idVisibility )
    // document.getElementById(idVisibility).style.visibility = 'visible'
    // document.getElementById(idDisplay).style.display = 'grid'
  }
  else if(mq === 'medium'){
      console.log(controller+'|'+evento+'|'+idVisibility )
      document.getElementById(idVisibility).style.visibility = 'visible'
      document.getElementById(idDisplay).style.display = 'grid'
  }
  else if((mq === 'mediumLarge' ) || (mq === 'Large')){
    console.log(controller+'|'+evento+'|'+idVisibility )
    document.getElementById(idVisibility).style.display = 'grid'
  }
}

function hide(idVisibility){
  console.log(controller+'|'+evento+'|'+idVisibility )
  if(mq === 'small'){
    if(id === 'js-aside') {
      document.getElementById(idVisibility).style.visibility = 'hidden'
      document.getElementById('js-colDirAside').style.display = 'none'
    }
  }else if(mq === 'smallMedium'){
    console.log(controller+'|'+evento+'|'+idVisibility )
    document.getElementById(idVisibility).style.display = 'none'
    
  }else if((mq === 'mediumLarge' ) || (mq === 'Large')){
    console.log(controller+'|'+evento+'|'+idVisibility )
    document.getElementById(idVisibility).style.display = 'none'
  }
}







function hiddenAside(){
  // document.querySelector('aside').style.visibility = "hidden"
  console.log('hiddenAside')
  document.getElementById('js-aside').style.visibility = "hidden"
}
function evento(idVisibility){
  console.log('eventoAside')
  document.getElementById(idVisibility).style.visibility = "visible"
  document.getElementById('js-colDir-Aside').style.display = "grid"
}

function configMedium(a){
  console.log(a+'configMedium' )
// eventoAsideMQMedium();
// document.querySelector('aside').style.display = "grid"
document.getElementById('js-forward3').style.visibility = "visible"
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








// function eventoAside(a){
//   console.log(a+'eventoAside');
//   document.getElementById('js-aside').style.display = "grid";
//   if(a === "forward3 "  ){
//     console.log("sssssss");
//   } else{
//     console.log("nnnnnnnnnn");

//   }
// }
function eventoColDirAsideUndo2(a){
  console.log(a+'eventoColDirAsideUndo2')
  document.getElementById('js-colDir-Aside').style.display = "grid"

}


function hideAside(a){
  console.log(a+'hideAside')
  // console.log('js-undo2->eventoAside')
  document.getElementById('js-aside').style.display = "none"
  document.getElementById('js-colDir-Aside-undo2').style.display = "none"
}
function hideColDirAsideUndo2(a){
  console.log(a+'hideColDirAsideUndo2')
  document.getElementById('js-colDir-Aside-undo2').style.display = "none"
}
