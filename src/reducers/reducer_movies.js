import { GET_MOVIES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_MOVIES:
      let final_arr = [];

      action.payload.map(value => {
        const results = value.data.results;

        const new_arr = Object.keys(results).map(i => {
          return results[i];
        });

        final_arr = [...final_arr, ...new_arr];
      });

      final_arr = final_arr.filter(function(movie) {
        return movie.popularity >= 10;
      });

      return [...state, ...final_arr];
    default:
      return state;
  }
}
