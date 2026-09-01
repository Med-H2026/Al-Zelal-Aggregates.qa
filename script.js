//swiper projects
const projectsSwiper = new Swiper(".projects-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 4 },
  },
});

//HERO SLIDER
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: { 
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: { 
    el: '.swiper-pagination', 
    clickable: true 
  },
  navigation: { 
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev' 
  },
  effect: 'fade',
  fadeEffect: { crossFade: true }
});

// PRODUCT FILTER
const tabBtns = document.querySelectorAll('.tab-btn');
const materialCards = document.querySelectorAll('.material-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1. Remove active from all buttons
    tabBtns.forEach(b => b.classList.remove('active'));
    // 2. Add active to clicked button
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    // 3. Show/Hide cards
    materialCards.forEach(card => {
      if(filter === 'all' || card.dataset.category === filter){
        card.style.display = 'flex'; // show
      } else {
        card.style.display = 'none'; // hide
      }
    });
  });
});

// BACK TO TOP BUTTON
const backToTopBtn = document.querySelector('.back-to-top');

// Listem for scroll
window.addEventListener('scroll', () => {
    // Show button after scrolling 300px
    if(window.scrollY > 300){
        backToTopBtn.classList.add('show');//show button
    } else {
        backToTopBtn.classList.remove('show');//hide button
    }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // smooth animation
    });
});

