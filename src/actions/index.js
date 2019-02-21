import axios from 'axios';
import _ from 'lodash';

import { GET_MOVIES, GET_MOVIE_DETAIL } from './types';

const now = new Date();
const config = {
  apiKey: 'f47f8d8b13843269c4c2a5246c921116',
  primary_release_year: now.getFullYear(),
  sort_by: 'primary_release_date.asc'
};

let pages = null;
//request limit every 10 seconds
let nr_requests = 30;
let index = 0;

export function getMovies() {
  const pages_array = _.range(1, 31);
  const requests_array = _.map(pages_array, function(x) {
    x += index;

    return axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        config.apiKey
      }&sort_by=${config.sort_by}&page=${x}&primary_release_year=${
        config.primary_release_year
      }`
    );
  });

  const request = axios.all(requests_array);

  return function(dispatch) {
    request.then(function(response) {
      dispatch({
        type: GET_MOVIES,
        payload: response
      });

      if (pages === null) pages = response[0].data.total_pages;
      pages -= nr_requests;
      index += 30;

      if (pages >= 30) {
        setTimeout(() => {
          dispatch(getMovies());
        }, 10000);
      } else if (pages > 0) {
        nr_requests = pages;

        setTimeout(() => {
          dispatch(getMovies());
        }, 10000);
      }
    });
  };
}

export function getMovieDetail(id) {
  const request = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${config.apiKey}`
  );

  return function(dispatch) {
    request.then(function(response) {
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: response
      });
    });
  };
}
