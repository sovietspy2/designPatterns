export default (movie) => {
    if (movie.rank === "PG-13") {
        movie.audienceMinimumAge = 13;
    } else if (movie.rank === "R") {
        movie.audienceMinimumAge = 18;
    }

    movie.getDetails = function() {
        console.log(`title: ${this.title} minimum age: ${this.audienceMinimumAge}`);
    };
    return movie;
};