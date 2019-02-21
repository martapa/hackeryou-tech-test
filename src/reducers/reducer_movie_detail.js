import { GET_MOVIE_DETAIL } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
