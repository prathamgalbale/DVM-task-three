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
});
