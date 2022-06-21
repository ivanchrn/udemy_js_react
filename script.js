let numberOfFilms = +prompt("How many films do you saw?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for(let i = 0; i < 2; i++){
    let lastFilm = prompt("Last film you watched?", "");
    let filmRating = prompt("How do you rate this film?", "");

    if(lastFilm != null && filmRating != null && lastFilm != '' && filmRating != '' && lastFilm.length < 50 ){
        personalMovieDB.movies[lastFilm] = filmRating;
    } else {
        i--;
    }

}

if (personalMovieDB.count < 10){
    console.log("You are not filmlover");
} else if (personalMovieDB >= 10 && personalMovieDB < 30){
    console.log("You are medium filmlover");
} else if (personalMovieDB >= 30 ) {
    console.log("You are filmlover");
} else {
    console.log("error");
}

console.log(personalMovieDB);