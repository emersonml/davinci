// iPhone  12/13  390/844

var mq;
var stateSpan;
var elemento;
var modo;


var minMedium = "(min-width: 400px)"
var minLarge = "(min-width: 850px)"

//////////   GATILHO -> iNIT WIDTH
const mqIniteMedium = window.matchMedia(minMedium);
const mqInitLarge = window.matchMedia(minLarge);
mediumTrue = mqIniteMedium.matches; // true ou false
largeTrue = mqInitLarge.matches; // true ou false
if (largeTrue == true) {
  config(controller = 'init', action = 'large');
} else if (mediumTrue === true) {
  config(controller = 'init', action = 'medium');
} else {
  config(controller = 'init', action = 'small');
}

//   //////////  GATILHO ->  OUVINDO rENDERIZACAO DE WIDTH
const mqRenderMedium = window.matchMedia(minMedium);
const mqRenderLarge = window.matchMedia(minLarge);

mqRenderMedium.addEventListener('change', (query) => {
  if (query.matches) {
    config(controller = 'render', action = 'smallMedium');
  } else {
    config(controller = 'render', action = 'mediumSmall');
  }
});
mqRenderLarge.addEventListener('change', (query) => {
  if (query.matches) {
    config(controller = 'render', action = 'mediumLarge');
    console.log('ML PORRA');
  } else {
    config(controller = 'render', action = 'largeMedium');
    console.log('LM PORRA');
  }
});

//   //////  GATILHO -> OUVINDO CLICK ELEMENTOS CLICADOS CLICK //////////////////////////////////////////////////////////////////////
// OUVINDO SANDUICHE
const sanduiche = document.querySelectorAll('nav .js-sanduiche')
for (const element of sanduiche) {
  element.addEventListener('click', function () {
    config(controller = 'click', action = 'js-sanduiche')
  })
}
// OUVINDO UNDO2 VOLTAR
const undo2 = document.querySelectorAll('body .js-undo2')
for (const element of undo2) {
  element.addEventListener('click', function () {
    config(controller = 'click', action = 'js-undo2')
  })
}
// OUVINDO backward2 PARA TRAS
const backward2 = document.querySelectorAll('header .js-backward2')
for (const element of backward2) {
  element.addEventListener('click', function () {
    config(controller = 'click', action = 'js-backward2')
  })
}
// OUVINDO forward3 PARA FRENTE
const forward3 = document.querySelectorAll('header .js-forward3')
for (const element of forward3) {
  element.addEventListener('click', function () {
    console.log('Func=  ' + controller + '|' + action + '|' + mq)

  })
}

//         //////////   FUNCTIONS SWITSCH CASE --- CONTROLE  //////////////////////////////////////////
function config(controller, action) {
  let functionAtual = 'CONFIG';
  //1S
  switch (controller) {
    //1S1C
    case "init": //1
    controllerOrigin = 'init';
      switch (action) {
        case "small": //1.1
          mq = "small"; 
          pwd(functionAtual);
          break; //1.1
        case "medium": //1.2
          mq = "medium"; 
          pwd(functionAtual);

        
          break; //1.2
        case "large": //1.3
          mq = "large"; 
          pwd(functionAtual)
          break; //1.3
      }
      break; //1
      //1S2C
    case "render": //2
    controllerOrigin = 'render';

      switch (action) {
        case "smallMedium": //2.1
          mq = "medium"; 
          pwd(functionAtual)
          aside()
          break; //2.1
        case "mediumSmall": //2.2
          mq = "small"; 
          pwd(functionAtual)
          aside()
          break; //2.2
        case "mediumLarge": //2.3
          mq = "large"; 
          pwd(functionAtual)
          aside()
          break; //2.3
        case "largeMedium": //2.4
          mq = "medium"; 
          pwd(functionAtual)
          aside()

          break; //2.4

      }
      break;
      //1S3C
    case "click": //3 path click 
      switch (action) {
        case "js-sanduiche": //3.1 path click sanduiche
          switch (mq) {
            case "small": //3.1.1
            pwd(functionAtual)
              aside(mq, controllerOrigin) //p1 CONFIG_sanduiche
              break; //3.1.1
            case "medium": //3.1.2
            pwd(functionAtual)
              aside(mq)
              break; //3.1.2
            case "large": //3.1.3
            pwd(functionAtual)
              aside(mq)
              break; //3.1.3
          }
          break;
        case "js-undo2": //3.2 path click undo2
          switch (controllerOrigin, controller, action, mq) {
            case "small": //3.2.1
              aside(mq)
              break;
            case "medium": //3.2.2
              aside()
              break;
          }
          break;
        case "js-backward2": //3.3
          switch (mq) {
            case "medium": //3.3.2
            pwd(functionAtual)
            aside(functionAtual, controllerOrigin, action, mq);
              break;
            case "large": //3.3.2  click backward2 large
            pwd(functionAtual)
              pwd(functionAtual)
              aside()
              break;
          }
          break;
        case "js-forward3": //3.4 click|js-forward3
        pwd(functionAtual)
          // stateAside = aside(state)
          switch (mq) {
            case "medium":
              // case "smallMedium":
              // case "largeMedium":
              aside()
              break;
            case "large":
              pwd(functionAtual)
              aside()
              break;
          }


          break;
        default:
          pwd(functionAtual)
          break;
      }
      break;
      //1SDC
    default:
      pwd(functionAtual)
      break;
      // darkOrLight = "Unknown";

  } // FIN 1S
} // fun config





// import {aside} from 'home/emerson/projects/dev/5gbrasil/app/assets/javascripts/webcoruja/aside.js'
// = require functions/asidefile


//////////////////////////// FUN ASIDE START ASIDE INIT
///// em obs function aside(state) {
  function aside(controllerOrigin, controller, action, mq) {
    let functionAtual = 'ASIDE';
    id = 'js-aside';
    switch (mq) {
      case 'small': //1
        switch (action) {
          case 'mediumSmall': //small
            document.getElementById(id).style.display = 'none'
            document.getElementById(id).style.gridColumnEnd = '9'
            document.getElementById('js-mainLay1').style.gridColumnStart = '1'
            document.getElementById('js-forward3').style.display = 'none'
            document.getElementById('js-sanduiche').style.display = 'grid'
            document.getElementById('js-sanduiche').style.visibility = 'visible'
            break;
          case 'js-undo2':
            pwd(functionAtual)
            asideFullHide()
            document.getElementById(id).style.display = 'none'
            break;
          case 'js-sanduiche': //p2 CONFIG_sanduiche
            switch (controllerOrigin) {
              case 'init':
                pwd(functionAtual)
                show(elemento = 'aside', modo = '')
                break;
              default:
                asideFullShow()
                asideFullShowSmall()
                span("show")
                document.getElementById(id).style.display = 'grid'
                document.getElementById(id).style.visibility = 'visible'
                break;
            }
            break;
          default:
            pwd(functionAtual)
            if ((valorPropriedadeElement(id, property = 'visibility') === 'hidden')) {
              document.getElementById(id).style.visibility = 'hidden'
              pwd(functionAtual)
            }
            break;
        }
        break; //1
      case "medium": //2
        switch (action) {
          case 'smallMedium': //medium
          pwd(functionAtual)
            asideCompactoShow()
            document.getElementById('js-forward3').style.display = 'grid'
            document.getElementById('js-backward2').style.display = 'grid'
            document.getElementById('js-sanduiche').style.display = 'none'
            document.getElementById('js-undo2').style.display = 'none'
  
            span('hide')
            break;
          case 'largeMedium':
            pwd(functionAtual)
            // document.getElementById('js-span').style.display = 'grid'
            asideCompactoShow()
            document.getElementById('js-forward3').style.display = 'grid'
            document.getElementById('js-sanduiche').style.display = 'none'
  
            break;
          case 'js-undo2': //medium
          pwd(functionAtual)
            asideFullHide()
            document.getElementById(id).style.display = 'none'
            document.getElementById('js-sanduiche').style.display = 'grid'
            document.getElementById('js-sanduiche').style.visibility = 'visible'
            document.getElementById('js-forward3').style.display = 'none'
            break;
          case 'js-sanduiche': //medium
          pwd(functionAtual)
            asideCompactoShow()
            document.getElementById(id).style.display = 'grid'
            document.getElementById(id).style.gridColumnEnd = '2'
            document.getElementById('js-mainLay1').style.gridColumnStart = '2'
            document.getElementById('js-undo2').style.display = 'none'
            document.getElementById('js-sanduiche').style.display = 'none'
            document.getElementById('js-backward2').style.display = 'grid'
            document.getElementById('js-forward3').style.display = 'grid'
            span('hide')
  
  
            // span('show')
            break;
          case 'js-backward2':
            pwd(functionAtual)
  
            asideCompactoHide()
            document.getElementById('js-forward3').style.display = 'none'
            document.getElementById('js-sanduiche').style.display = 'grid'
  
  
            break;
          case 'js-forward3':
            let displayAside = valorPropriedadeElement(id = 'js-aside', property = 'display')
            if (displayAside === 'none') {
              pwd(functionAtual)
              document.getElementById(id).style.visibility = 'visible'
              document.getElementById(id).style.display = 'grid'
              document.getElementById('js-mainLay1').style.gridColumnStart = '2'
              document.getElementById('js-span').style.display = 'grid'
              span(stateSpan = 'hide')
            } else {
              pwd(functionAtual)
              document.getElementById(id).style.gridColumnEnd = '5'
              document.getElementById('js-mainLay1').style.gridColumnStart = '5'
              document.getElementById('js-undo2').style.display = 'grid'
              document.getElementById('js-backward2').style.display = 'none'
              document.getElementById('js-forward3').style.display = 'none'
              document.getElementById('js-sanduiche').style.display = 'grid'
              document.getElementById('js-sanduiche').style.visibility = 'hidden'
              document.getElementById('js-mainLay1').style.gridColumnStart = '1'
  
              span('show')
  
            }
            break;
        }
        break; //2
      case "large": //3
        switch (action) {
          case 'mediumLarge':
            asideFullShow()
            document.getElementById('js-forward3').style.display = 'none'
            document.getElementById('js-sanduiche').style.display = 'grid'
            document.getElementById('js-backward2').style.display = 'grid'
            document.getElementById('js-undo2').style.display = 'none'
            // document.getElementById('js-sanduiche').style.visibility = 'visible'
            // span('show')
  
            break;
          case 'largeMedium':
            pwd(functionAtual)
            // document.getElementById('js-span').style.display = 'grid'
            asideCompactoShow()
            document.getElementById('js-sanduiche').style.display = 'grid'
            // document.getElementById('js-sanduiche').style.visibility = 'grid'
  
            // document.getElementById('js-forward3').style.display = 'none'
  
            break;
          case 'js-sanduiche':
            asideFullShow()
            span('show')
            // document.getElementById('js-span').style.display = 'grid'
            document.getElementById('js-sanduiche').style.visibility = 'hidden'
            break;
          case 'js-backward2':
            pwd(functionAtual)
            if (stateSpan === 'hide') {
              pwd(functionAtual)
              document.getElementById(id).style.display = 'none'
              document.getElementById(id).style.gridColumnEnd = '1'
              document.getElementById('js-mainLay1').style.gridColumnStart = '1'
  
              asideFullHide()
            } else {
              asideCompactoHide()
              document.getElementById('js-sanduiche').style.visibility = 'visible'
  
              document.getElementById('js-sanduiche').style.display = 'grid'
              document.getElementById('js-forward3').style.display = 'none'
            }
  
            break;
          case 'js-forward3': //large
            if (stateSpan === 'hide') {
              pwd(functionAtual)
              asideCompactoShow()
            }
            pwd(functionAtual)
  
            document.getElementById(id).style.gridColumnEnd = '2'
            document.getElementById('js-mainLay1').style.gridColumnStart = '2'
            document.getElementById('js-span').style.display = 'none'
            span('show')
            document.getElementById('js-sanduiche').style.display = 'grid'
            document.getElementById('js-forward3').style.display = 'none'
  
            break;
        }
        break; //3
    } //1switch
  
  } /**  aside end*/
  











function show(elemento, modo) {
  if (elemento === 'compacto') {
    asideCompactoShow()
  } else if (elemento === 'completar') {
    asideFullShow()
  } else {
    document.getElementById(id).style.display = 'grid'
    document.getElementById(id).style.visibility = 'visible'
  }
}

function hide(elemento, modo) {
  if (elemento === 'compacto') {
    asideCompactoHide()
  } else if (elemento === 'completar') {
    asideFullHide()
  } else {
    document.getElementById(id).style.display = 'none'
    document.getElementById(id).style.visibility = 'hidden'
  }
}


function asideCompactoShow() {
  document.getElementById(id).style.display = 'grid'
  document.getElementById(id).style.visibility = 'visible'
  document.getElementById(id).style.gridColumnEnd = '2'
  document.getElementById('js-mainLay1').style.gridColumnStart = '2'
  document.querySelector("header span:nth-child(1)").style.display = 'none'
  document.querySelector("header span:nth-child(3)").style.display = 'none'
  document.querySelector("nav").style.fontSize = '1.3rem'
  document.querySelector("nav ul li").style.display = 'flex'
  document.querySelector("nav ul").style.fontSize = '1.4rem'
  document.querySelector("nav ul:nth-child(2) li:nth-child(1) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(2) li:nth-child(2) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(2) li:nth-child(3) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(2) li:nth-child(4) a span").style.display = 'none'

}

function asideCompactoHide() {
  document.querySelector("header span:nth-child(1)").style.display = 'none'
  document.querySelector("header span:nth-child(3)").style.display = 'none'
  document.querySelector("nav").style.fontSize = '1.3rem'
  document.querySelector("nav ul li").style.display = 'flex'
  document.querySelector("nav ul").style.fontSize = '1.4rem'
  document.querySelector("nav ul:nth-child(2) li:nth-child(1) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(2) li:nth-child(2) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(2) li:nth-child(3) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(2) li:nth-child(4) a span").style.display = 'none'
  document.getElementById(id).style.gridColumnEnd = '2'
  document.getElementById('js-mainLay1').style.gridColumnStart = '1'

  document.getElementById(id).style.display = 'none'
  document.getElementById('js-span').style.display = 'none'

}

function asideFullShow() {
  document.getElementById(id).style.display = 'grid'
  document.getElementById(id).style.visibility = 'visible'
  document.getElementById(id).style.gridColumnEnd = '2'
  document.getElementById('js-mainLay1').style.gridColumnStart = '2'
  document.querySelector("nav ul:nth-child(2) li:nth-child(1) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(2) li:nth-child(2) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(2) li:nth-child(3) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(2) li:nth-child(4) a span").style.display = 'grid'
  span('show')
  // document.getElementById('js-span').style.display = 'none'
  // span(stateSpan = 'hide')
}

function asideFullShowSmall() {
  document.getElementById(id).style.gridColumnEnd = '10'

}

function asideFullHide() {
  document.getElementById(id).style.display = 'none'
  document.getElementById(id).style.visibility = 'hidden'
  document.getElementById(id).style.gridColumnEnd = '1'
  document.getElementById('js-mainLay1').style.gridColumnStart = '1'
  // document.getElementById('js-span').style.display = 'none'
  span(stateSpan = 'hide')
}
//////////////////   SPAN
function span(stateSpan) {
  if (stateSpan === 'show') {
    console.log(controller + '|' + action + '|' + mq)

    // console.log('span ===== show');
    document.querySelector("header span:nth-child(1)").style.display = 'grid'
    document.querySelector("header span:nth-child(3)").style.display = 'grid'
    // document.querySelector("nav ul li span:nth-child(2)").style.display = 'grid'
    document.querySelector("nav").style.fontSize = '1.3rem'
    // document.querySelector("nav ul li").style.display = 'flex'
    document.querySelector("nav ul").style.fontSize = '1.4rem'
    document.querySelector("nav ul:nth-child(2) li:nth-child(1) a").style.display = 'flex'
    document.querySelector("nav ul:nth-child(2) li:nth-child(2) a").style.display = 'flex'
    document.querySelector("nav ul:nth-child(2) li:nth-child(3) a").style.display = 'flex'
    document.querySelector("nav ul:nth-child(2) li:nth-child(4) a").style.display = 'flex'
    document.querySelector("nav ul:nth-child(2) li:nth-child(1) a span").style.display = 'grid'
    document.querySelector("nav ul:nth-child(2) li:nth-child(2) a span").style.display = 'grid'
    document.querySelector("nav ul:nth-child(2) li:nth-child(3) a span").style.display = 'grid'
    document.querySelector("nav ul:nth-child(2) li:nth-child(4) a span").style.display = 'grid'


  } else if (stateSpan === 'hide') {
    console.log('stateSpan ======== hide');
    stateSpan = 'hide'
    // document.getElementById('js-span').style.display = 'none'

    document.querySelector("header span:nth-child(1)").style.display = 'none'
    document.querySelector("header span:nth-child(3)").style.display = 'none'
    document.querySelector("nav ul:nth-child(2) li:nth-child(1) a span").style.display = 'none'
    document.querySelector("nav ul:nth-child(2) li:nth-child(2) a span").style.display = 'none'
    document.querySelector("nav ul:nth-child(2) li:nth-child(3) a span").style.display = 'none'
    document.querySelector("nav ul:nth-child(2) li:nth-child(4) a span").style.display = 'none'
  }
}


function valorPropriedadeElement(id, property) {
  var elemento = document.getElementById(id);
  var Result = window.getComputedStyle(elemento, null).getPropertyValue(property);
  return Result;
}

function pwd(functionAtual) {
  console.log(functionAtual+' === '+controllerOrigin+ ' ' + controller + ' ' + action + ' ' + mq)


}