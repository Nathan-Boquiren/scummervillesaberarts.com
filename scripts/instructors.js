// ===== DOM Elements =====
const instructorsContainer = document.getElementById("instructor-container");

// ===== fetch class data =====

fetch("../assets/instructor-data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    populateInstructors(data);
  })

  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

// poulate instructor cards
function populateInstructors(data) {
  data.forEach((instructor, idx) => {
    createCard(instructor, idx);
  });
  if (window.innerWidth <= 768) {
    cl("yes");
    addscrollEffect();
  }
}

function createCard(instructor, idx) {
  instructorsContainer.innerHTML += `
    <details class="inst-card" name="instructor" id="inst-${idx}">
        <summary>
            <img src="${instructor.imgUrl}" alt="${instructor.name}">
            <div class="summary-txt">
                <h3 class="inst-name">${instructor.name}</h3>
                <h4 class="inst-rank">${instructor.rank}</h4>
            </div>
        </summary>
        <ul class="info-wrapper">
            <li>
                <h4>Bio</h4>
                <p>${instructor.bio}</p>
            </li>
            <hr>
            <li>
                <h4>Specialties</h4>
                <p>${instructor.specialties}</p>
            </li>
            <hr>
            <li>
                <h4>Quote</h4>
                <p>“${instructor.quote}”</p>
            </li>
        </ul>
    </details>
  `;
}

function addscrollEffect() {
  document.querySelectorAll(".inst-card").forEach((card) => {
    card.addEventListener("toggle", () => {
      if (card.open) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(
            getComputedStyle(card).scrollMarginTop,
            10
          );
          const elementTop = card.getBoundingClientRect().top + window.scrollY;
          const offsetTop = elementTop - scrollMarginTop;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }, 300);
      }
    });
  });
}
