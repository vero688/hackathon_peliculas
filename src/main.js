//http://www.omdbapi.com/?i=tt3896198&apikey=c26bee66&s=godfather
//const request = new Request('http://www.omdbapi.com/?i='+imdbId+'&apikey=c26bee66&');

// Filtros



// Top 10 mejor calificadas

const bestRatedImdb = ["tt0068646" , "tt0111161" , "tt0071562" , "tt1375666" , "tt0137523" , "tt0468569" , "tt0050083" , "tt0120737" , "tt0133093" , "tt0114369"];

let bestRated = document.getElementById("btn-bestRated");

bestRated.addEventListener('click', showBestRated);
 
    function showBestRated()
    {bestRatedImdb.map(function(imdbId){
        fetch('http://www.omdbapi.com/?i='+imdbId+'&apikey=c26bee66&')
        .then(result => result.json())
        .then(data => {
            document.getElementById("container").innerHTML +=
            `<div class="bestResult">
            <img class="poster" src=${data.Poster}>
            <h2 class="title">${data.Title}</h2>
            <p class="plot">${data.Plot}</p>
            <p class="actors">${data.Actors}</p>
            <p class="genre">${data.Genre}</p></div>`
        })
    })
}

const mostVotedImdb = ["tt0110912" , "tt0109830" , "tt1345836" , "tt0816692" , "tt0060315" , "tt0172495" , "tt0372784" , "tt0102926" , "tt0361748" , "tt0076759"];

let mostVoted = document.getElementById("btn-mostVoted");

mostVoted.addEventListener('click', showMostVoted);
 
    function showMostVoted()
    {mostVotedImdb.map(function(imdbId){
        fetch('http://www.omdbapi.com/?i='+imdbId+'&apikey=c26bee66&')
        .then(result => result.json())
        .then(data => {
            document.getElementById("container").innerHTML +=
            `<div class="bestResult">
            <img class="poster" src=${data.Poster}>
            <h2 class="title">${data.Title}</h2>
            <p class="plot">${data.Plot}</p>
            <p class="actors">${data.Actors}</p>
            <p class="genre">${data.Genre}</p></div>`
        })
    })
}

const mostAwards = ["tt0120338", "tt0167260" , "tt0052618" , "tt0055614" , "tt0116209" , "tt0051658" , "tt0093389"];

let awards = document.getElementById("btn-mostAwards");

awards.addEventListener('click', showMostAwards);
 
    function showMostAwards()
    {mostAwards.map(function(imdbId){
        fetch('http://www.omdbapi.com/?i='+imdbId+'&apikey=c26bee66&')
        .then(result => result.json())
        .then(data => {
            document.getElementById("container").innerHTML +=
            `<div class="bestResult">
            <img class="poster" src=${data.Poster}>
            <h2 class="title">${data.Title}</h2>
            <p class="plot">${data.Plot}</p>
            <p class="actors">${data.Actors}</p>
            <p class="genre">${data.Genre}</p></div>`
        })
    })
}

