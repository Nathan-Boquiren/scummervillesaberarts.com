// ===== DOM Elements =====
const classesContainer = document.getElementById("classes-container");

// ===== fetch class data =====

fetch("../assets/class-data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    populateClasses(data);
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

//   create class categories and cards

function populateClasses(categories) {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    createCategory(category);
  }
  addDynamicStyles();
}

function createCategory(category) {
  const categoryContainer = createElement("section", "category-container");
  const name = createElement("h3", "category-name");
  name.innerText = `Explore Classes by ${category.name}`;
  categoryContainer.append(name);
  categoryContainer.append(createElement("hr", "line"));

  const classCardContainer = createElement("div", "card-container");

  for (let i = 0; i < category.classes.length; i++) {
    const classData = category.classes[i];
    classCard = createClassCard(classData);
    classCardContainer.append(classCard);
  }

  categoryContainer.append(classCardContainer);

  classesContainer.append(categoryContainer);
}

function createClassCard(data) {
  const card = createElement("div", "class-card");
  const inner = createElement("div", "card-inner");
  const front = createFront(data.front);
  const back = createBack(data.back);
  inner.append(front, back);
  card.append(inner);
  return card;
}

function createFront(data) {
  const front = createElement("div", "card-front");
  front.innerHTML = `
    <h4>${data.name}</h4>
    <img src=${data.imgUrl} class="card-img" style="shape-outside: url(${data.imgUrl})">
    <div class="difficulty-wrapper">
        <strong>Difficulty:</strong>
        <span class="${data.difficulty} txt-shadow">${data.difficulty}</span>
    </div>
   
    <p class="prev-txt">${data.prevTxt}</p>`;

  return front;
}

function createBack(data) {
  const back = createElement("div", "card-back");
  back.innerHTML = `
    <h5>Overview</h5>
    <hr>
    <p class="overview-txt">${data.overview}</p>
    <p class="skills-list-header">What You'll Learn:</p>
    <ul>
       ${data.skills.map((skill) => `<li>${skill}</li>`).join("")}
    </ul>
    <a href="sign-up.html" class="button">Sign Up</a>`;
  return back;
}

// ===== Dynamic Card Functionality and Styles =====

function addDynamicStyles() {
  const cards = document.querySelectorAll(".card-inner");
  addFlip(cards);

  cards.forEach((c) => {
    styleCardImg(c);
  });
}

function addFlip(cards) {
  document.addEventListener("click", (e) => {
    for (const c of cards) {
      if (c.contains(e.target)) {
        c.classList.toggle("flipped");
      } else {
        setTimeout(() => {
          c.classList.remove("flipped");
        }, 100);
      }
    }
  });
}

function styleCardImg(card) {
  const img = card.querySelector(".card-img");
  img.addEventListener("load", () => {
    img.classList.add(img.height > img.width ? "vertical" : "horizontal");

    const cardBottom = card.clientHeight;
    // prettier-ignore
    const imgBottom = img.getBoundingClientRect().bottom - card.getBoundingClientRect().top;

    const heightDiff = cardBottom - imgBottom;
    img.style.marginTop = `${heightDiff}px`;
  });
}
