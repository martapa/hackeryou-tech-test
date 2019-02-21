import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieDetail } from '../actions/index';

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getMovieDetail(this.props.movie.id);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h2>{this.props.movie.original_title}</h2>
        {this.props.movie.poster_path ? (
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/w500${
              this.props.movie.poster_path
            }`}
            alt={this.props.movie.original_title}
          />
        ) : (
          <p>No Image Found</p>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail
  };
}

export default connect(mapStateToProps, { getMovieDetail })(MovieCard);
