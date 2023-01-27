const searchResult = document.querySelector(".render__results");

async function renderPosters() {
  const posters = await fetch(
    "https://www.omdbapi.com/?apikey=8c7faaf4&s=faasda"
  );
  const posterValue = await posters.json();
  
  console.log(posterValue);
  const errorType1 = document.querySelector(".error-type1")
  const errorType2 = document.querySelector(".error-type2")
  if(posterValue.Response != True){
    if(posterValue.Error == "Movie not found!"){
        errorType1.
    }

    
  }

  document.getElementById("searchbar").style.display = "flex";
  
  if (posterValue)

  searchResult.innerHTML = posterValue.Search.map((post) =>
    renderSearchResult(post)
  ).join("");
}

function renderSearchResult(post) {
  return `
    <div class="render__result">
    <div class="poster__img">
      <img
        src="${post.Poster}"
        alt=""
      />
    </div>
    <div class="poster__name">${post.Title}</div>
    <div class="poster__type">${post.Type}</div>
    <div class="poster__year-relased">${post.Year}</div>
  </div>
`;
}

async function onSearchChange(event) {
  //event.target.value
  console.log(event);
}

renderPosters();
