function nextStep() {
  const currentSection = document.querySelector(
    '.form-section:not([style*="display: none"])'
  );
  const nextSection = currentSection.nextElementSibling;
  if (nextSection) {
    currentSection.style.display = "none";
    nextSection.style.display = "flex";
  }
}

document.getElementById("phone-input").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "").slice(0, 10);
  const parts = [];

  if (value.length > 0) parts.push(value.slice(0, 3));
  if (value.length > 3) parts.push(value.slice(3, 6));
  if (value.length > 6) parts.push(value.slice(6));

  e.target.value = parts.join("-");
});

// dynamic "no" button movement on hover

let opacity = 1;
let fontSize = 0;
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

noBtn.addEventListener("mouseover", () => {
  const yOff = Math.random() * (Math.random() < 0.5 ? 300 : -400);
  const xOff = Math.random() * (Math.random() < 0.5 ? 300 : -500);

  noBtn.style.transform = `translate(${xOff}px, ${yOff}px)`;
  noBtn.style.opacity = opacity -= 0.03;

  yesBtn.style.fontSize = `calc(clamp(1rem, 2vw, 1.3rem) + ${fontSize++}px)`;
});
