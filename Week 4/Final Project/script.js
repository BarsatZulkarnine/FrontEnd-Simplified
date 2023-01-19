async function apiFetch() {
  const defaultInput = await fetch(
    "https://www.omdbapi.com/?apikey=8c7faaf4&s=fast"
  );
  const defaultInputData = await defaultInput.json();
  const link = defaultInputData.Search[0].Poster;
  document.querySelector(
    ".feature__img--wrapper"
  ).innerHTML = `  <div class="feature_img">
    <img src="${defaultInputData.Search[0].Poster}" alt="">
</div>`;
  console.log(defaultInputData.Search[0].Poster);
}

/*function defaultPoster(link){
    return `  <div class="feature_img">
    <img src="${link}" alt="">
</div>`
}*/

apiFetch();
