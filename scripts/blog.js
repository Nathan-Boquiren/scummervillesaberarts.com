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
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

function populateBlogCards(data) {
  data.forEach((blog) => {
    cardContainer.innerHTML += `<div class="card">
            <img src="${blog.coverImgLink}" alt="blog post image">
            <h3>${blog.title}</h3>
                <a href="${blog.blogPostLink}" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>`;
  });
}
