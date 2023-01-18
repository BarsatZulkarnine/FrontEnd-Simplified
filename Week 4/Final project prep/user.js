
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const postListEl =  document.querySelector('.post-list')

async function main (){
   const id =  localStorage.getItem("id");
   const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
   const postsData = await posts.json();
   console.log(postsData)

    postListEl.innerHTML =  postsData.map( post => userHtml(post)).join("")
}

main();

function userHtml (user) {
    return `
    <div class="post">
       <div class="post__title">
         ${user.title}
       </div>
       <p class="post__body">
         ${user.body}
       </p>
     </div>
     `
}

