const bestRatedImdb = ["tt0068646" , "tt0111161" , "tt0071562" , "tt1375666" , "tt0137523" , "tt0468569" , "tt0050083" , "tt0120737" , "tt0133093" , "tt0114369"];
const mostVotedImdb = ["tt0110912" , "tt0109830" , "tt1345836" , "tt0816692" , "tt0060315" , "tt0172495" , "tt0372784" , "tt0102926" , "tt0361748" , "tt0076759"];
const mostAwards = ["tt0120338", "tt0167260" , "tt0052618" , "tt0055614" , "tt0116209" , "tt0051658" , "tt0093389"];
let btnFilters = document.getElementsByClassName("btnFilters");
// Búsqueda
document.getElementById('searchBtn').addEventListener('click', function(){
    const byTitle = document.getElementById('search').value;
   const request = new Request('http://www.omdbapi.com/?i=tt0353496&apikey=c26bee66&s='+byTitle);
   fetch(request)
   .then(function(result){
        return result.json();
    }).then(data => {
        let searchMovie = document.getElementById('container');
        let movie = data.Search.length;
        for(let i = 0; i < movie; i++){
            let movieCard = document.createElement('div');
           movieCard.className = 'cards';

           let moviePoster = document.createElement('img');
            moviePoster.src = data.Search[i].Poster;
            moviePoster.className = "movie-preview";

            let movieTitle = document.createElement('div');
            movieTitle.innerText = data.Search[i].Title;
            movieTitle.className = "name-preview";

            let movieYear = document.createElement('div');
            movieYear.innerText = data.Search[i].Year;
            movieYear.className = "year-preview";

            let movieType = document.createElement('div');
            movieType.innerText = data.Search[i].Type;
            movieType.className = "class-preview";

       const btnShowMore = document.createElement('button');
       btnShowMore.textContent = ("+ info");
       btnShowMore.className = "show-more-button";
       
       btnShowMore.addEventListener('click', () => {
           const imdbId = data.Search[i].imdbID;
           fetch('http://www.omdbapi.com/?i='+imdbId+'&plot=full'+'&apikey=c26bee66&')
           .then(result => result.json())
           .then(data => {
               document.getElementById("container").innerHTML +=
               `<div class="bestResult">
               <img class="poster" src=${data.Poster}>
               <p class="runtime"><strong>Duración:</strong> ${data.Runtime}</p>
               <h2 class="title">${data.Title}</h2>
               <p class="plot"><strong>Argumento:</strong> ${data.Plot}</p>
               <p class="actors"><strong>Reparto:</strong> ${data.Actors}</p>
               <p class="genre">${data.Genre}</p></div>`
           })
       })
           movieCard.appendChild(moviePoster);
            movieCard.appendChild(movieTitle);
           movieCard.appendChild(movieYear);
           movieCard.appendChild(movieType);
           movieCard.appendChild(btnShowMore);
           searchMovie.appendChild(movieCard);
        }
   });
});