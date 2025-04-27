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
    document.addEventListener('DOMContentLoaded', () => {
        console.log("DOM loaded");
        const hamburger = document.getElementById('hamburger-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (hamburger && mobileMenu) {
          hamburger.addEventListener('click', () => {
            console.log("Hamburger clicked"); 
            mobileMenu.classList.toggle('open'); // This line should toggle the menu visibility
            hamburger.classList.toggle('open');
          });
        } else {
          console.error('Hamburger or mobile menu not found!');
        }
        
        // This event listener might be causing issues - let's remove it for now
        /* document.addEventListener('click', (event) => {
          if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            if (mobileMenu.classList.contains('open')) {
              mobileMenu.classList.remove('open');
              hamburger.classList.remove('open');
            }
          }
        }); */
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

// Global testimonial index
let testimonialIndex = 0;

// Function to show specific testimonial by index
function showTestimonial(index) {
  const cards = document.querySelectorAll('.testimonial-card');
  
  if (cards.length === 0) return;
  
  // Hide all testimonials first
  cards.forEach(card => {
    card.style.display = 'none';
  });
  
  // Show the current testimonial
  cards[index].style.display = 'block';
}

// Function for manual navigation with the arrow buttons
function manualSlide(step) {
  const cards = document.querySelectorAll('.testimonial-card');
  
  if (cards.length === 0) return;
  
  // Calculate new index with wraparound
  testimonialIndex = (testimonialIndex + step + cards.length) % cards.length;
  
  // Show the new current testimonial
  showTestimonial(testimonialIndex);
}

// Function to start automatic slideshow
function startTestimonialSlideshow() {
  setInterval(() => {
    manualSlide(1); // Move forward by 1
  }, 5000); // Change every 5 seconds
}

// Initialize testimonials when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Initialize testimonials - show the first one
  showTestimonial(0);
  
  // Start automatic slideshow
  startTestimonialSlideshow();
  
  // Log for debugging
  console.log('Testimonial slideshow initialized');
});


