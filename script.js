let numberOfFilms = +prompt("How many films do you saw?", "");
let lastFilm = prompt("Last film you watched?", "");
let filmRating = prompt("How do you rate this film?", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm] = filmRating;

console.log(personalMovieDB);
