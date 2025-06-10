let cl = console.log;

// Dom Elements
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navbar");

// hamburger menu

document.addEventListener("pointerdown", (e) => {
  const isHamburger = hamburger.contains(e.target);
  const isNavBar = navBar.contains(e.target);

  if (isHamburger) {
    navBar.classList.toggle("open");
  } else if (!isNavBar && navBar.classList.contains("open")) {
    navBar.classList.remove("open");
  }
});

// Button Animation

document.querySelectorAll(".button").forEach((btn) => {
  btn.tabIndex = 0;
  btn.innerHTML = btn.innerText
    .split("")
    .map(
      (ch) => `<span class="btn-ch${ch === " " ? " space" : ""}">${ch}</span>`
    )
    .join("");

  btn.addEventListener("mouseover", () => {
    btn.querySelectorAll(".btn-ch").forEach((ch, idx) => {
      ch.classList.add("hover");
      ch.style.animationDelay = `${idx * 10}ms`;
    });
  });

  btn.addEventListener("mouseout", () => {
    btn
      .querySelectorAll(".btn-ch")
      .forEach((ch) => ch.classList.remove("hover"));
  });
});

// create DOM elements master function
function createElement(type, className) {
  return Object.assign(document.createElement(type), { className: className });
}

// footer newsletter btn

document.getElementById("newsletter-btn").addEventListener("click", () => {
  alert("Now I will send you a ton of annoying emails! HA HA HAAA!");
});
