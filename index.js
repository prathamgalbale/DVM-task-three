const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const centerHeader = document.querySelector(".centerHeader");
const searchBar = document.querySelector(".searchBar");
const header = document.querySelector(".header");
const donate = document.querySelector(".donate");
const language = document.querySelector(".language");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const logo = document.querySelector(".logo");
const hamburgerSearch = document.querySelector(".hamburgerSearch");
const responsiveHamburger = document.querySelector(".responsiveHamburger");
const body = document.querySelector(".body");
const emailBox = document.querySelector(".emailBox");
const footer = document.querySelector(".footer");
const responsiveFooter = document.querySelector(".responsiveFooter");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  header.classList.toggle("active");
  centerHeader.classList.toggle("active");
  searchBar.classList.toggle("active");
  donate.classList.toggle("active");
  language.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  logo.classList.toggle("active");
  hamburgerSearch.classList.toggle("active");
  responsiveHamburger.classList.toggle("active");
  body.classList.toggle("active");
  emailBox.classList.toggle("active");
  footer.classList.toggle("active");
  responsiveFooter.classList.toggle("active");
});

document.getElementById('emailInput').addEventListener('submit', function(event) {
    
    var emailInputByUser = document.getElementById('email').value;
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailCheck.test(emailInputByUser)) {
        alert('Thank you for subscribing!');
    } else {
        alert('The email you entered is not valid.');
    }
});


const mainBottomSpecial = document.querySelector(".mainBottomSpecial");
const bottomLineVideo = document.querySelector(".bottomLineVideo");

document.addEventListener('mousemove', function (e) {
    bottomLineVideo.style.left =  e.clientX  - 500 + 'px';
    bottomLineVideo.style.top = e.clientY  - 500 + 'px';
});

mainBottomSpecial.addEventListener('mouseover', function () {
    bottomLineVideo.style.opacity = '1';
});

mainBottomSpecial.addEventListener('mouseout', function () {
    bottomLineVideo.style.opacity = '0';
});


const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = document.querySelectorAll('.carouselItemOne, .carouselItemTwo');

prevButton.addEventListener('click', () => {
    carouselItems.forEach(item => item.classList.toggle('hidden'));    
});

nextButton.addEventListener('click', () => {
    carouselItems.forEach(item => item.classList.toggle('hidden'));
});





const responsiveCarousel = document.querySelector('.responsiveCarousel');
let currentIndex = 0;

document.querySelector('.responsiveMainBody').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % 2; 
    updateCarousel();
});

function updateCarousel() {
    const newPosition = -currentIndex * 50 + '%';
    responsiveCarousel.style.transform = 'translateX(' + newPosition + ')';
}




const parallaxElements = document.querySelectorAll('.parallaxEffect');
  
function handleParallax() {
    parallaxElements.forEach((element) => {
    const scrollPosition = window.scrollY;
    const elementOffset = element.offsetTop;
    let multiplier = 0.3; 
  
    if (element.classList.contains('stationary')) {
        multiplier = 0.13; 
    }
  
    const distance = (scrollPosition - elementOffset) * multiplier;
  
    element.style.transform = `translateY(${distance}px)`;
    });
}
  
window.addEventListener('scroll', handleParallax);
  
handleParallax();




document.addEventListener("DOMContentLoaded", function () {
    const h2TextElements = document.querySelectorAll('.h2Text');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('translate');
            } else {
                entry.target.classList.remove('translate');
            }
        });
    }, { threshold: 0.5 });

    h2TextElements.forEach(element => {
        observer.observe(element);
    });
});







    
      



  
  







