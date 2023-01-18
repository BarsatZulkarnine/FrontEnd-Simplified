const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function onSearchChange(event) {
  //   console.log(event.target.value)
  const id = event.target.value;
  renderPost(id);
}

async function renderPost(id) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json();
  console.log(postsData);
  postListEl.innerHTML = postsData.map((post) => postHtml(post)).join("");
}

function postHtml(user) {
  return `
    <div class="post">
       <div class="post__title">
         ${user.title}
       </div>
       <p class="post__body">
         ${user.body}
       </p>
     </div>
     `;
}

renderPost(id);
