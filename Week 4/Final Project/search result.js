const searchResult = document.querySelector(".render__results");
const searchResponse = localStorage.getItem("response");
const searchResults = document.querySelector(".searchResults");

async function renderPosters() {
  const apiUrl = findURL(null);

  const posters = await fetch(apiUrl);
  const posterValue = await posters.json();

  console.log(searchResponse);

  const errorType1 = document.querySelector(".error-type1");
  const errorType2 = document.querySelector(".error-type2");
  const filter = document.getElementById("filter");

  searchResults.innerHTML = renderSearch(searchResponse);

  filter.style.display = "none";
  errorType1.style.display = "none";
  errorType2.style.display = "none";
  document.getElementById("searchbar").style.display = "flex";

  if (posterValue.Response == "False") {
    console.log(posterValue.Response);

    if (posterValue.Error == "Movie not found!") {
      errorType1.style.display = "flex";
    }
    if (posterValue.Error == "Too many results.") {
      errorType2.style.display = "flex";
    }
  } else {
    filter.style.display = "flex";
    searchResult.innerHTML = posterValue.Search.map((post) =>
      renderSearchResult(post)
    ).join("");
  }
}

function renderSearch(response) {
  return `
    <div class="search__result">
              Search results for :
              <span class="searchResults-modifier"> ${response} </span>
            </div>
    `;
}

function renderSearchResult(post) {
  return `
    <div class="render__result">
    <div class="poster__img">
      <img
        src="${post.Poster}"
        alt="notfound"
      />
    </div>
    <div class="poster__name">${post.Title}</div>
    <div class="poster__type">Type: ${post.Type}</div>
    <div class="poster__year-relased">Year Released: ${post.Year}</div>
  </div>
`;
}

/* need to fixed filter part*/

function findURL(event) {
  const searchkey = searchResponse.trim().split(" ").join("+");

  let modifier = "";
  if (event == "MOVIE") {
    modifier = "&type=movie";
  } else if (event == "SERISE") {
    modifier = "&type=series";
  } else {
    modifier = "";
  }
  console.log(event);

  return `https://www.omdbapi.com/?apikey=8c7faaf4&s=${searchkey}${modifier}`;
}

renderPosters();

function onSearchChange(event) {
  const response = event.target.value;
  localStorage.setItem("response", response);
}

function filterBooks(event) {
  findURL(event.target.value);
}

/*localStorage.setItem("NewURL",`https://www.omdbapi.com/?apikey=8c7faaf4&s=${searchkey}${modifier}`)
  console.log(localStorage.getItem("NewURL"))
  return localStorage.getItem("NewURL") */
