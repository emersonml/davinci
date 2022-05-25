


/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
// const nav = document.querySelector('#header nav')

  //////////   GATILHO -> INIT WIDTH
    const vmedium  = window.matchMedia( '(min-width: 400px)' );
    const vlarge   = window.matchMedia( '(min-width: 800px)' );
    mediumtrue = vmedium.matches;
    largetrue = vlarge.matches;
        if (largetrue == true) {
            configLarge();
          } else if (mediumtrue == true) {
            configMedium();
          } else {
            configSmall();  
          // mensagem = "Atenção";
        }
        



  //////////  GATILHO ->  OUVINDO RENDERIZACAO DE WIDTH
        
// const mqMediumTrue  = window.matchMedia( '(min-width: 400px) && (max-width: 799px)' );
const mqMedium  = window.matchMedia( '(min-width: 400px)' );
mqMedium.addEventListener('change', (query) => {
  if(query.matches )   {
    configMedium();
  } else { configSmall(); }

  });
  
  const mqLarge = window.matchMedia( '(min-width: 800px)' );
  mqLarge.addEventListener('change', (query) => {
    if(query.matches )   {
      configLarge();


    } else { configMedium(); }
  
  });


      
      





  //////  GATILHO -> OUVINDO ELEMENTOS //////////////////////////////////////////////////////////////////////

  const sanduiche = document.querySelectorAll('nav .js-sanduiche')
  for (const element of sanduiche) {
    element.addEventListener('click', function () {
      fSmallTrue();
    })
  }
  const undo2 = document.querySelectorAll('header .js-undo2')
  for (const link of undo2) {
    link.addEventListener('click', function () {
      document.getElementById('js-aside').style.visibility = "hidden"
    })
  }
  const forward3 = document.querySelectorAll('header .js-forward3')
  for (const link of forward3) {
    link.addEventListener('click', function () {
      document.getElementById('js-aside').style.visibility = "hidden"
    })
  }
  


        //////////   FUNCTIONS
      

        function configSmall(){
          console.log('small')
          document.getElementById('js-aside').style.visibility = "hidden"
          document.getElementById('js-sanduiche').style.visibility = "visible"
          document.getElementById('js-forward3').style.visibility = "hidden"
        }
        function configMedium(){
          console.log('medium');
          document.getElementById('js-aside').style.visibility = "visible"
          document.getElementById('js-forward3').style.visibility = "visible"
          hiddenSanduiche();
        }
        function configLarge(){
          console.log('large');
          document.getElementById('js-forward3' ).style.visibility = "hidden"
          // document.getElementById('js-sanduiche').style.visibility = "hidden"
          document.getElementById('js-exit').style.visibility = "visible"
        }
        



        function fSmallTrueHidden(){
          console.log('smallHidden')
          // document.getElementById('js-undo2').style.visibility = "hidden"
          document.getElementById('js-aside').style.visibility = "hidden"
        }
        
        
        function hiddenSanduiche(){
          console.log('hiddenSanduiche');
          document.getElementById('js-sanduiche').style.visibility = "hidden"
        }