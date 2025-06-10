document.querySelectorAll(".card-inner").forEach((cardInner) => {
  const cardFront = cardInner.querySelector(".card-front");
  const cardBack = cardInner.querySelector(".card-back");

  function flipCard() {
    if (cardInner.style.transform === "rotateX(180deg)") {
      cardInner.style.transform = "rotateX(0deg)";
    } else {
      cardInner.style.transform = "rotateX(180deg)";
    }
  }

  cardFront.addEventListener("click", flipCard);
  cardBack.addEventListener("click", flipCard);
});
