import {combineReducers} from 'redux';

const movieReducer = () => {
  return [
    { title: "Spider-Man", releaseDate: "2002", rating: "4.9" },
    { title: "Avengers Endgame", releaseDate: "2019", rating: "5.0" },
    { title: "The Dark Knight", releaseDate: "2008", rating: "4.8" },
    { title: "Arrival", releaseDate: "2016", rating: "4.2" },
    { title: "Tenet", releaseDate: "2020", rating: "4.99" },
  ];
};

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
    movies: movieReducer,
    selectedMovie: selectedMovieReducer,
})