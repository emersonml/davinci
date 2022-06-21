var asideEstagio = 3;

// iPhone  12/13  390/844

var mq;
var stateAside; // 1=hide 2=compacto 3=full
var stateSpan;
var elemento;
var estagio;
var action = null;
var el = 'js-aside';
var modo = 'standard'

console.log('FUNCTION |ctrlOrigin  <ctrl action mq> stateAside');

var minMedium = "(min-width: 400px)"
var minLarge = "(min-width: 850px)"

//////////   GATILHO -> iNIT WIDTH
const mqIniteMedium = window.matchMedia(minMedium);
const mqInitLarge = window.matchMedia(minLarge);
mediumTrue = mqIniteMedium.matches; // true ou false
largeTrue = mqInitLarge.matches; // true ou false
if (largeTrue == true) {
  router(controller = 'init', mq = 'large');
} else if (mediumTrue === true) {
  router(controller = 'init', mq = 'medium');
} else {
  router(controller = 'init', mq = 'small');
}

//   //////////  GATILHO ->  OUVINDO rENDERIZACAO DE WIDTH
const mqRenderMedium = window.matchMedia(minMedium);
const mqRenderLarge = window.matchMedia(minLarge);

mqRenderMedium.addEventListener('change', (query) => {
  if (query.matches) {
    router(controller = 'render', action = 'smallMedium');
  } else {
    router(controller = 'render', action = 'mediumSmall');
  }
});
mqRenderLarge.addEventListener('change', (query) => {
  if (query.matches) {
    router(controller = 'render', action = 'mediumLarge');
  } else {
    router(controller = 'render', action = 'largeMedium');
  }
});

//   /////////  GATILHO -> OUVINDO CLICK ELEMENTOS CLICADOS CLICK 
// OUVINDO SANDUICHE
const jsSanduiche = document.querySelectorAll('nav .js-sanduiche')
for (const element of jsSanduiche) {
  element.addEventListener('click', function () {
    router(controller = 'click', action = 'js-sanduiche')
  })
}
// OUVINDO UNDO2 VOLTAR
const jsUndo2 = document.querySelectorAll('body .js-undo2')
for (const element of jsUndo2) {
  element.addEventListener('click', function () {
    router(controller = 'click', action = 'js-undo2')
  })
}
// OUVINDO backward2 PARA TRAS
const jsBackward2 = document.querySelectorAll('header .js-backward2')
for (const element of jsBackward2) {
  element.addEventListener('click', function () {
    router(controller = 'click', action = 'js-backward2')
  })
}
// OUVINDO forward3 PARA FRENTE
const jsForward3 = document.querySelectorAll('header .js-forward3')
for (const element of jsForward3) {
  element.addEventListener('click', function () {
    router(controller = 'click', action = 'js-forward3')

  })
}


function router(controller, action) {
  //1S
  switch (controller) {
    case "render": //2
      reset()
      switch (action) {
        case "smallMedium": // msMr
          mq = "medium";
          aside2()
          backward2()
          forward3()
          break; //2.1

        case "mediumLarge": // lmr
          mq = "large";
          aside3()
          backward2()
          break; //2.3
        case "largeMedium": // mlr
          mq = "medium";
          aside2()
          backward2()
          forward3()

          break; //
        case "mediumSmall": // smSr
          mq = "small";
          sanduiche()
          break;

      }
      break;
    case "click":
      /* CLICK **/
      resetBotoes()
      switch (action) {
        case "js-sanduiche":
          switch (mq) {
            case "small": // ssc
              aside3();
              asideFlutuante()
              document.getElementById(el).style.gridColumnEnd = '18'
              undo2()


              break; //
            case "medium": // msc
              aside2()
              backward2()
              forward3()
              break;
            case "large": // lsc
              aside3(
                backward2()
              )
              break; //3.1.3
              console.log('para todos');

          }
          break;
        case "js-undo2": //3.2 path click undo2
          switch (mq) {
            case "small": //321  suc
              aside1()
              sanduiche()
              break;
            case "medium": //muc
              aside2()
              backward2()
              forward3()
              break;
          }
          break;
        case "js-backward2":
          switch (mq) {
            case "medium": // mbc
              aside1()
              sanduiche()
              break;
            case "large":
              if (asideEstagio == 3) {
                aside2()
                backward2()
                forward3()
                asideEstagio = 2
              } else {
                reset()
                aside1()
                sanduiche()
                asideEstagio = 3
              }
              break;
          }
          break;
        case "js-forward3": //3.4 click|js-forward3
          switch (mq) {
            case "medium": // mfc
              aside3()
              asideFlutuante()
              undo2()
              break;
            case "large":
              aside3()
              backward2()
              asideEstagio = 3
              break;
          }


          break;
      }
      break;

  }
}

function valorPropriedadeElement(el, property) {
  var elemento = document.getElementById(el);
  var Result = window.getComputedStyle(elemento, null).getPropertyValue(property);
  return Result;
}

function aside1() {
  document.getElementById(el).style.display = 'none';
  // document.getElementById(el).style.visibility = 'hidden';
  document.getElementById('js-mainLay1').style.gridColumnStart = '1'
}

function aside2() {
  asideShow()
  document.getElementById(el).style.gridColumnEnd = '2'
  // document.getElementById(el).style.width = '5rem'
  // document.getElementById(el).style.width = '100%'
  document.getElementById('js-mainLay1').style.gridColumnStart = '2'
  document.querySelector("header span:nth-child(1)").style.display = 'none'
  document.querySelector("header span:nth-child(3)").style.display = 'none'
  // document.querySelector("nav").style.fontSize = '1.3rem'
  // document.querySelector("nav ul li").style.display = 'flex'
  // document.querySelector("nav ul").style.fontSize = '1.4rem'
  document.querySelector("nav ul:nth-child(1) li:nth-child(1) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(1) li:nth-child(2) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(1) li:nth-child(3) a span").style.display = 'none'
  document.querySelector("nav ul:nth-child(1) li:nth-child(4) a span").style.display = 'none'
}

function aside3() {
  asideShow()
  document.getElementById(el).style.gridColumnEnd = '4'
  document.getElementById('js-mainLay1').style.gridColumnStart = '4'

  asideFull()

}

function asideFull() {

  document.querySelector("header span:nth-child(1)").style.display = 'grid'
  document.querySelector("header span:nth-child(3)").style.display = 'grid'
  document.querySelector("header span:nth-child(1)").style.display = 'grid'
  document.querySelector("header span:nth-child(3)").style.display = 'grid'
  // document.querySelector("nav").style.fontSize = '1.3rem'
  // document.querySelector("nav ul").style.fontSize = '1.4rem'
  document.querySelector("nav ul:nth-child(1) li:nth-child(1) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(1) li:nth-child(2) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(1) li:nth-child(3) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(1) li:nth-child(4) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(1) li:nth-child(1) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(1) li:nth-child(2) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(1) li:nth-child(3) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(1) li:nth-child(4) a span").style.display = 'grid'

}

function asideShow() {
  document.getElementById(el).style.display = 'grid';
  document.getElementById(el).style.visibility = 'visible';
}

function asideHide() {
  document.getElementById(el).style.display = 'none';
  // document.getElementById(el).style.visibility = 'hidden';
  document.getElementById('js-mainLay1').style.gridColumnStart = '1'
}

function asideStandard() {
  document.getElementById('js-mainLay1').style.gridColumnStart = '2'
}

function asideFlutuante() {
  document.getElementById(el).style.gridColumnEnd = '10'
  document.getElementById('js-mainLay1').style.gridColumnStart = '1'
  // asideFull()
}

//////////////////////////  BOTOES
function sanduiche() {
  document.getElementById('js-sanduiche').style.display = 'grid'
  document.getElementById('js-sanduiche').style.visibility = 'visible'
}

function undo2() {
  document.getElementById('js-undo2').style.display = 'grid'
}

function backward2() {
  document.getElementById('js-backward2').style.display = 'grid'
}

function forward3() {
  document.getElementById('js-forward3').style.display = 'grid'
}
//////////////////////////  RESETS
function reset() {
  asideHide()
  resetBotoes()
}

function resetBotoes() {
  document.getElementById('js-sanduiche').style.display = 'none'
  document.getElementById('js-undo2').style.display = 'none'
  document.getElementById('js-backward2').style.display = 'none'
  document.getElementById('js-forward3').style.display = 'none'

}