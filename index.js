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









