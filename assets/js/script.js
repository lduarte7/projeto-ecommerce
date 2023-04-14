'use strict'

// Navbar para mobible

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function (){ 
  navbar.classList.toggle("active");

});

// ===========================


// Header active

const header = document.querySelector("[data-header]")
window.addEventListener("scroll", function() {
  window.classList[this.scrollY > 50 ? "add" : "remove"] ("active");


});
