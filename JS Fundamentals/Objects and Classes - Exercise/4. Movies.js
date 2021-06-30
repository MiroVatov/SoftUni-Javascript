function movies(moviesData) {
    let moviesArr = [];

    function checkIfMovieExists(movieName) {
        for (let movie of moviesArr){
            if (movie.name === movieName){
                return movie;
            }
        }
        return undefined
    }

    for (let data of moviesData){
        let movieObj = {};
        if (data.includes('addMovie')) {
            let movieName = data.split('addMovie ')[1];
            movieObj["name"] = movieName;
            moviesArr.push(movieObj);
        }
        else if (data.includes('directedBy')){
            data = data.split(' directedBy ');
            let movieName = data[0];
            let movie = checkIfMovieExists(movieName);
            let director = data[1];
            if (movie !== undefined){
                movie.director = director;
            }
        }
        else if (data.includes('onDate')){
            let newData = data.split(' onDate ');
            let movieDate = newData[1];
            let movieName = newData[0];
            let movie = checkIfMovieExists(movieName);
            if (movie !== undefined){
                movie.date = movieDate;
            }
        }
    }
    for (let mObj of moviesArr){
        if (Object.keys(mObj).length === 3) {
            console.log(`${JSON.stringify(mObj)}`)
        }
    }
}

movies(['addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen']);

movies(['addMovie Fast and Furious',
'addMovie Godfather',
'addMovie Batman Forever',
'Batman Forever directedBy Jimmy Jones',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen']);