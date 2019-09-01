"use strict";

// Navbar
const nav = document.querySelector("[data-main-nav]");
const navButton = document.querySelector("[data-nav-button]");

navButton.onclick = function() {
  nav.classList.toggle("nav-open");
};
