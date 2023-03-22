var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10 ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
delay: 2500,
disableOnInteraction: false,
},
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{
  navbarLinks.classList.toggle('active')
})

