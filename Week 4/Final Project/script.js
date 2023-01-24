async function apiFetch() {
  const defaultInput = await fetch(
    "https://www.omdbapi.com/?apikey=8c7faaf4&s=fast"
  );
  const defaultInputData = await defaultInput.json();
  const link = defaultInputData.Search[0].Poster;
  const link2 = "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.webp"
  document.querySelector(
    ".show__poster"
  ).innerHTML = `<div class="display__show--img">
    <img src="${link}" alt="">
</div>`;
  console.log(link);


  document.getElementById("search-button").addEventListener("click", function() {
    document.getElementById("search-form").style.display = "block";
  });
}

/*function defaultPoster(link){
    return `  <div class="feature_img">
    <img src="${link}" alt="">
</div>`
}*/

apiFetch();

