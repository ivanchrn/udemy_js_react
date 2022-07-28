
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films do you saw?", "").trim(); 
       
       while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("How many films do you saw?", "").trim(); 
       }
   
       return personalMovieDB.count;
   },
   rememberFilms() {
    for(let i = 0; i < 2; i++){
        let lastFilm = prompt("Last film you watched?", "").trim();
        let filmRating = prompt("How do you rate this film?", "").trim();
    
        if(lastFilm != null && filmRating != null && lastFilm != '' && filmRating != '' && lastFilm.length < 50 ){
            personalMovieDB.movies[lastFilm] = filmRating;
        } else {
            i--;
        }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log("You are not filmlover");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("You are medium filmlover");
        } else if (personalMovieDB.count >= 30 ) {
            console.log("You are filmlover");
        } else {
            console.log("error");
        }
    },
    showMyDb: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDb: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 0; i < 3; i++){
            let favoriteGenre = prompt(`Your favorite genre ${i+1}` , "");
        
            if(favoriteGenre != null && favoriteGenre != null && favoriteGenre != '' && favoriteGenre != '' && favoriteGenre.length < 50 ){
                personalMovieDB.genres[i] = `${i+1}.${favoriteGenre}`;
            } else {
                i--;
            }
        
        }    
    }


};


// personalMovieDB.start();
// console.log(`You watched ${personalMovieDB.count} films`);
// personalMovieDB.rememberFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDb(personalMovieDB.privat);

// --------------------------------------------------------------------Functions------------------------------------------------------------------------------------------------//
