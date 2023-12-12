
let numberOfFilms;

start()

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}



rememberMyFilms();

detectPersonalLevel();






function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

    while (!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let film = prompt("Один из просмотренных вами фильмов");
        let rating = prompt("На сколько оцените его?");
    
        if (!film || film.length > 50 || !rating) {
            i--;
            continue;
        }
        personalMovieDB.movies[film] = rating;
    }
}


function detectPersonalLevel() { 
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        console.log('Вы киноман');
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = prompt(`Ваш любимый жанр по номером ${i + 1}`);
        personalMovieDB.genres[i] = genre;
    }
}