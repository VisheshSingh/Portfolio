// Select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("show");
    menuBrand.classList.add("show");
    menuNav.classList.add("show");
    menuBtn.classList.add("close");
    navItems.forEach(item => {
      item.classList.add("show");
    });

    showMenu = true;
  } else {
    menu.classList.remove("show");
    menuBrand.classList.remove("show");
    menuNav.classList.remove("show");
    menuBtn.classList.remove("close");
    navItems.forEach(item => {
      item.classList.remove("show");
    });

    showMenu = false;
  }
}
