document.querySelectorAll(".button").forEach((btn) => {
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
