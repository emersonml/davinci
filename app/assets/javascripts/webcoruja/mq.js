var asideEstagio=3;

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
                asideEstagio=2
              }else{
                reset()
                aside1()
                sanduiche()
                asideEstagio=3
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
              asideEstagio=3
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

function aside3() {
  document.getElementById(el).style.gridColumnEnd = '2'
  document.getElementById('js-mainLay1').style.gridColumnStart = '2'
  asideShow()
  asideFull()

}

function asideFull() {
  document.querySelector("header span:nth-child(1)").style.display = 'grid'
  document.querySelector("header span:nth-child(3)").style.display = 'grid'
  document.querySelector("header span:nth-child(1)").style.display = 'grid'
  document.querySelector("header span:nth-child(3)").style.display = 'grid'
  document.querySelector("nav").style.fontSize = '1.3rem'
  document.querySelector("nav ul").style.fontSize = '1.4rem'
  document.querySelector("nav ul:nth-child(2) li:nth-child(1) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(2) li:nth-child(2) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(2) li:nth-child(3) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(2) li:nth-child(4) a").style.display = 'flex'
  document.querySelector("nav ul:nth-child(2) li:nth-child(1) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(2) li:nth-child(2) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(2) li:nth-child(3) a span").style.display = 'grid'
  document.querySelector("nav ul:nth-child(2) li:nth-child(4) a span").style.display = 'grid'
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
  document.getElementById('js-mainLay1').style.gridColumnStart = '1'
  document.getElementById(el).style.gridColumnEnd = '10'
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