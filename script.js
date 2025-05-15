const slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);


window.addEventListener('scroll', () => {
  const btn = document.getElementById('whatsapp-btn');
  if (window.scrollY > 300) {
    btn.classList.remove('hide');
  } else {
    btn.classList.add('hide');
  }
});


const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});