async function apiFetch() {

  const defaultInput = await fetch(
    "https://www.omdbapi.com/?apikey=8c7faaf4&s=fast"
  );
  const defaultInputData = await defaultInput.json();
  const link = defaultInputData.Search[0].Poster;
    "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.webp";
  document.querySelector(
    ".featured--show__poster"
  ).innerHTML = defaultPoster(link)
  console.log(link);
}

function defaultPoster(link){
    return  `<div class="display__show--img">
    <img src="${link}" alt="">
</div>`;
}

apiFetch();

function openSearch(){
  document.getElementById("searchbar").style.display = "flex" 
}

function onSearchChange(event){
  const response = event.target.value;
  localStorage.setItem("response", response);
}