const buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  const text = btn.innerText.split("");
  const characters = text.filter((ch) => ch !== " ");
  btn.innerHTML = "";
  text.forEach((ch) => {
    const btnCh = document.createElement("span");
    btnCh.innerText = ch;
    btnCh.classList.add("btn-ch");
    if (ch === " ") {
      btnCh.classList.add("space");
    }
    btn.append(btnCh);
  });

  btn.addEventListener("mouseover", () => {
    const chs = btn.querySelectorAll(".btn-ch");
    chs.forEach((ch, idx) => {
      ch.classList.add("hover");
      ch.style.animationDelay = `${idx * 10}ms`;
    });
  });
  btn.addEventListener("mouseout", () => {
    const chs = btn.querySelectorAll(".btn-ch");
    chs.forEach((ch) => {
      ch.classList.remove("hover");
    });
  });
});
