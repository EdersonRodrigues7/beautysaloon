/* Como Criar Objetos?

Abrir par de chaves {} indica a criação de um objeto.
O objeto sempre recebe ao menos uma propriedade e um valor. 
O objeto pode ser atribuído a uma variável (ele se torna um valor).

É possível inserir funções dentro dos objetos. As funções servem para agrupar uma sequência de códigos.

A sintaxe de uma função é sempre um nome seguido de parêntesis (). Primeiro vem o nome da função e depois o seu argumento (o que ela faz?).

Exemplo: const pessoa = {
  name: 'Mayk',
  age: 37,
  falar: function (){
    alert (pessoa.name)
  }
}
pessoa.falar()
*/

//DOM = Document Object Model - "transforma" as tags html em objetos para o javascript
// QuerySelector - procura os "seletores" dentro do html, o que pode incluir tags, classes, ID's

// Abrir e fechar o menu quando clica no ícone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Fechar ou esconder todo o menu quando clica em um link, numa opção
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Mudar Header da página quando der scroll
const header = document.querySelector('header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//Testimonials carousel slider (swipper)
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,

  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*SCROLL REVEAL: Mostra elementos quando usa o scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*BOTÃO VOLTAR AO TOPO*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 580) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU COM LINK ATIVO*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*WHEN SCROLL*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
