

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = prompt("Сколько фильмов вы уже посмотрели?");

        while (!this.count || isNaN(this.count)) {
            this.count = prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let film = prompt("Один из просмотренных вами фильмов");
            let rating = prompt("На сколько оцените его?");
        
            if (!film || film.length > 50 || !rating) {
                i--;
                continue;
            }
            personalMovieDB.movies[film] = rating;
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if(this.count >= 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр по номером ${i + 1}`);
            if (genre) {
                personalMovieDB.genres[i] = genre;
            } else {
                i--;
            }  
        }
        this.genres.forEach((g, i) => {
            console.log(`Любимый жанр номер ${i+1} это ${g}`);
        })
    }, 
    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
}



