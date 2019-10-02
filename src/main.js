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
			let movieTitle = document.createElement('div');
			movieTitle.innerText = data.Search[i].Title;
			let movieYear = document.createElement('div');
            movieYear.innerText = data.Search[i].Year;
			let movieType = document.createElement('div');
			movieType.innerText = data.Search[i].Type;
        
        
            
        const btnShowMore = document.createElement('button');
        btnShowMore.textContent = ("+ info");
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
                <p class="genre">${data.Genre}</p>
                <button value="Refresh Page" onClick="window.location.href=window.location.href">Volver</button>
                </div>`
                
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



