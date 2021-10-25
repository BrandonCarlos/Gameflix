$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

const botaoAssistir = document.querySelector('[data-anime="modal"]');
const botaoFechar = document.querySelector('[data-fechar="modal"]');
const modal = document.querySelector('[data-modal]');

function modalToggle(event) {
    event.preventDefault();
    modal.classList.toggle('ativo');
}

function clickForaModal(event) {
    if (event.target === this) {//se o que eu cliquei for igual ao THIS
    //THIS = modal
        modalToggle(event);
    }
}

botaoAssistir.addEventListener('click', modalToggle);
botaoFechar.addEventListener('click', modalToggle);
modal.addEventListener('click', clickForaModal);
