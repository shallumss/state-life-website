// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Load Saved Theme
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') document.body.classList.add('dark-theme');
};

// Testimonial Slider
let slideIndex = 0;
let slides;
let autoSlideInterval;

// Show specific slide
function showSlide(n) {
    slides = document.getElementsByClassName('testimonial-card');

    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

// Manual slide change
function manualSlide(n) {
    clearInterval(autoSlideInterval); // Stop auto when user clicks
    slideIndex += n;
    showSlide(slideIndex);
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 4000); // Restart auto after manual
}

// Auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 4000);
}

// Initialize everything
document.addEventListener("DOMContentLoaded", function() {
    showSlide(slideIndex);
    startAutoSlide();
});
