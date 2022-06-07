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
  router(controller= 'init', mq= 'large');
} else if (mediumTrue === true) {
  router(controller= 'init', mq= 'medium');
} else {
  router(controller= 'init', mq= 'small');
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

//   //////  GATILHO -> OUVINDO CLICK ELEMENTOS CLICADOS CLICK //////////////////////////////////////////////////////////////////////
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




