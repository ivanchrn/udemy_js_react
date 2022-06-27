
let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


start();
console.log(`You watched ${numberOfFilms} films`);
rememberFilms();
// detectPersonalLevel();
// writeYourGenres();
showMyDb(personalMovieDB.privat);

// --------------------------------------------------------------------Functions------------------------------------------------------------------------------------------------//

function start() {
     numberOfFilms = +prompt("How many films do you saw?", "").trim(); 
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films do you saw?", "").trim(); 
    }

    personalMovieDB.count = numberOfFilms;
}

function rememberFilms() {
    for(let i = 0; i < 2; i++){
        let lastFilm = prompt("Last film you watched?", "").trim();
        let filmRating = prompt("How do you rate this film?", "").trim();
    
        if(lastFilm != null && filmRating != null && lastFilm != '' && filmRating != '' && lastFilm.length < 50 ){
            personalMovieDB.movies[lastFilm] = filmRating;
        } else {
            i--;
        }
    
    }    
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("You are not filmlover");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("You are medium filmlover");
    } else if (personalMovieDB.count >= 30 ) {
        console.log("You are filmlover");
    } else {
        console.log("error");
    }
}

function showMyDb(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 0; i < 3; i++){
        let favoriteGenre = prompt(`Your favorite genre ${i+1}` , "");
    
        if(favoriteGenre != null && favoriteGenre != null && favoriteGenre != '' && favoriteGenre != '' && favoriteGenre.length < 50 ){
            personalMovieDB.genres[i] = `${i+1}.${favoriteGenre}`;
        } else {
            i--;
        }
    
    }    
}