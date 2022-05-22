

// alert("webcoruja")

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
// const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .js-toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    document.getElementById('js-toggle').style.visibility = "visible"
    // nav.classList.add
    // nav.classList.toggle('show')
    // nav.classList.toggle('show')
    // document.getElementsByName
  })
}

const links = document.querySelectorAll('header .js-backward2')

for (const link of links) {
  link.addEventListener('click', function () {
    document.getElementById('js-toggle').style.visibility = "hidden"
    // nav.classList.remove('show')
  })
}