// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await users.json();
  console.log(userData);
  const userListEl = document.querySelector(".user-list");

  userListEl.innerHTML = userData
    .map(
      (user) => userHtml(user)
    )
    .join("");
}
  
main();

function showUserPosts(id){
  
  localStorage.setItem("id", id);

  //window.location.href = `${windows.location.origin}/user.html`
  window.location.href = `file:///C:/Users/Barsat/Desktop/Front%20End/FronteEnd%20Simplified/work%20work/Week%204/Final%20project%20prep/user.html`
  //console.log(id)
}

function userHtml(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
  <div class="user-card__container">
    <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
</div>`
}