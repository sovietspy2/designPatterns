import Movie from './movie';
import decorator from './decorator';

export default () => {

    // adding new properties or methods to the object
    const movie = decorator(new Movie("Boogie Nights","R", 1.2));
    movie.getDetails();
};