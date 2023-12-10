
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let film = prompt("Один из просмотренных вами фильмов")
let rating = prompt("На сколько оцените его?")

let film2 = prompt("Один из просмотренных вами фильмов")
let rating2 = prompt("На сколько оцените его?")

personalMovieDB.movies[film] = rating;
personalMovieDB.movies[film2] = rating2;
