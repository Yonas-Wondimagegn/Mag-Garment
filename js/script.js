// Toggle navbar visibility on menu button click
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Hide navbar when scrolling
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Change main image in the home section on image click
document.querySelectorAll('.image-slider img').forEach(image => {
    image.onclick = () => {
        let src = image.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// Initialize Swiper for review section with optimal settings
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    },
});

// Add smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
});
