// DOM
const cardContainer = document.querySelector(".blog-post-container");

// ===== fetch blog data =====
fetch("../assets/blog-card-data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    populateBlogCards(data);
    addBtnStorage();
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

function populateBlogCards(data) {
  data.forEach((blog, idx) => {
    // prettier-ignore
    cardContainer.innerHTML += `<div class="card">
            <img src="${blog.coverImgLink}" alt="blog post image">
            <h3>${blog.title}</h3>
                <a href="../pages/posts/blog-post.html" target="_blank" rel="noopener noreferrer" class="post-link-btn" data-post-num="${idx + 1}">Read More</a>
            </div>`;
  });
}

function addBtnStorage() {
  const postBtns = document.querySelectorAll(".post-link-btn");
  postBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const postNum = btn.dataset.postNum;
      localStorage.setItem("blogPostNum", String(postNum));
    });
  });
}
