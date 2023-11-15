var numberOfFilms = prompt("Сколько фильмов вы уже посомтрели");
console.log(numberOfFilms);

var personalMovieDB = {};
    /*
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};*/

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;


var lastFilm1 = prompt('Какой последний фильм вы смотрели?','');
var top1 = prompt('На сколько его оцениваете?','');
var lastFilm2 = prompt('Какой последний фильм вы смотрели?','');
var top2 = prompt('На сколько его оцениваете?','');
personalMovieDB.movies[lastFilm1] = top1; 
personalMovieDB.movies[lastFilm2] = top2;
personalMovieDB.movies['рокки'] = 4;
console.log(personalMovieDB);