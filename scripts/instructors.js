const instructorsContainer = document.getElementById("instructor-container");
let instructorCards;
const modal = document.getElementById("inst-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalMetaWrapper = document.getElementById("modal-meta-wrapper");
const modalDetailsWrapper = document.getElementById("modal-details-wrapper");

// ===== fetch data =====

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

// poulate cards
function populateInstructors(data) {
  data.forEach((instructor) => {
    createCard(instructor);
  });

  instructorCards = document.querySelectorAll(".inst-card-container");
  addClickEffect();
}

// desktop modal design
function createCard(instructor) {
  instructorsContainer.innerHTML += `
    <div class="inst-card-container">
        <div class="card">
            <img src="${instructor.imgUrl}" alt="${instructor.name}">
            <div class="card-txt">
                <h3 class="inst-name">${instructor.name}</h3>
                <h4 class="inst-rank">${instructor.rank}</h4>
            </div>
        </div>
        <div class="details-wrapper">
          <ul class="info-wrapper">
              <li><h4>Bio</h4><p>${instructor.bio}</p></li><hr>
              <li><h4>Specialties</h4><p>${instructor.specialties}</p></li><hr>
              <li><h4>Quote</h4><p>“${instructor.quote}”</p></li>
          </ul>
        </div>
    </div>`;
}

// add click expand/open

function addClickEffect() {
  document.addEventListener("click", (e) => {
    const isMobile = window.innerWidth <= 768;
    instructorCards.forEach((c) => {
      if (c.contains(e.target)) {
        if (isMobile) {
          c.classList.toggle("open");
        } else {
          populateModalDetails(c);
          modal.showModal();
        }
      } else if (isMobile) {
        c.classList.remove("open");
      }
    });
    if (!isMobile) {
      closeModalBtn.addEventListener("click", () => modal.close());
    }
  });
}

// populate modal details

function populateModalDetails(card) {
  const metaHtml = card.querySelector(".card").innerHTML;
  const detailsHtml = card.querySelector(".details-wrapper").innerHTML;

  modalMetaWrapper.innerHTML = metaHtml;
  modalDetailsWrapper.innerHTML = detailsHtml;
}
