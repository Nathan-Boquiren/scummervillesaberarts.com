// DOM Elements
const postContainer = document.querySelector(".blog-post");
const titleWrapper = document.querySelector(".title");
const dateWrapper = document.querySelector(".date");

const blogNum = localStorage.getItem("blogPostNum");

// ===== fetch blog data =====
fetch(`/assets/blog-posts/post-${blogNum}/post-${blogNum}.json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    populatePost(data);
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

function populatePost(data) {
  document.title = `${data.title} | Scummerville Saber Arts`;
  titleWrapper.innerText = data.title;
  dateWrapper.innerText = data.date;

  data.content.forEach((item) => {
    let element = createPostElement(item);
    postContainer.append(element);
  });
}

function createPostElement(item) {
  let element = document.createElement(item.type);

  if (item.type === "img") {
    element.src = `../../assets/blog-posts/post-${blogNum}/${item.value}`;
  } else if (item.type === "p" || item.type === "h3") {
    element.innerHTML = item.value;
  }
  return element;
}
