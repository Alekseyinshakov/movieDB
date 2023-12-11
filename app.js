
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


 
// let i = 0;
// while (i < 2) {
//     let film = prompt("Один из просмотренных вами фильмов")
//     if (!film || film.length > 50) {
//         // i--;
//         continue;
//     }
//     let rating = prompt("На сколько оцените его?")
//     personalMovieDB.movies[film] = rating;
//     i++
// }


if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms > 30) {
    console.log('Вы киноман');
}

