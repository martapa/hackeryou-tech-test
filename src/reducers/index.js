import { combineReducers } from 'redux';
import movies from './reducer_movies.js';
import movieDetail from './reducer_movie_detail';

const rootReducer = combineReducers({
  movies,
  movieDetail
});

export default rootReducer;
