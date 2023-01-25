async function renderPosters (){
    const posters = await fetch ("https://www.omdbapi.com/?apikey=8c7faaf4&s=fast");
    const posterValue = await posters.json();
    
    console.log (posterValue)
    document.getElementById("searchbar").style.display = "flex"

    console.log("aa")
    

}   

async function onSearchChange(event) {
    //event.target.value
    console.log(event)

}



renderPosters()