// creating variables
// let location = "Asaba"
// let age = 20

let hamburgerMenu = document.querySelector(".hamburger-menu");
let navBar = document.querySelector("nav");

// create a function to toggle the navbar
function toggleNav() {
  navBar.classList.toggle("active");
}

// adding an event listener
hamburgerMenu.addEventListener("click", toggleNav);
