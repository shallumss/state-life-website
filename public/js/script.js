// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Load Saved Theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

// Mobile Nav Toggle
// Mobile Nav Toggle (Upgraded)
// js/script.js

(function() {
    // Wait until the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      const hamburger  = document.getElementById('hamburger-btn');
      const mobileMenu = document.getElementById('mobile-menu');
  
      if (!hamburger || !mobileMenu) {
        console.error('Hamburger button or mobile menu element not found!');
        return;
      }
  
      // Toggle the mobile menu’s visibility and aria-expanded
      hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
      });
    });
  })();
  
  

// Generic Slideshow (if you have on other pages)
function initSlideshow(containerSelector, interval = 3000) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const slides = container.querySelectorAll('.slide');
  let current = 0;

  function show(n) {
    slides.forEach((s, i) => {
      s.style.display = i === n ? 'block' : 'none';
    });
  }

  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  prevBtn?.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    show(current);
  });
  nextBtn?.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    show(current);
  });

  show(current);
  setInterval(() => {
    current = (current + 1) % slides.length;
    show(current);
  }, interval);
}

// About Page Gallery Manual + Auto
let slideIndex = 1;
let galleryInterval;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (slides.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  clearInterval(galleryInterval);
  showSlides(slideIndex += n);
  startGalleryAuto();
}

function startGalleryAuto() {
  galleryInterval = setInterval(() => {
    plusSlides(1);
  }, 4000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initSlideshow('.slideshow', 3000); // If you have slideshow elsewhere
  showSlides(slideIndex);
  startGalleryAuto();
});
