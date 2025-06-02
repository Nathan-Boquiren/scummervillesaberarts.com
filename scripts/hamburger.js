let cl = console.log;

// Dom Elements
const hamburger = document.getElementById("hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger-line");
const navBar = document.querySelector(".navbar");

document.addEventListener("pointerdown", (e) => {
  const isHamburger = hamburger.contains(e.target);
  const isNavBar = navBar.contains(e.target);

  if (isHamburger) {
    navBar.classList.toggle("open");
  } else if (!isNavBar && navBar.classList.contains("open")) {
    navBar.classList.remove("open");
  }
});
