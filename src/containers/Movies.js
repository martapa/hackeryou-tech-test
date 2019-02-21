import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MovieCard from '../containers/MovieCard';
import _ from 'lodash';

class Movies extends Component {
  componentWillMount() {
    this.props.getMovies();
  }

  renderListItem(movie) {
    return <MovieCard movie={movie} key={movie.id} />;
  }

  renderList() {
    if (this.props.movies) {
      return _.map(this.props.movies, this.renderListItem.bind(this));
    }
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps, actions)(Movies);
