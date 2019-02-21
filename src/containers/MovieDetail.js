import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    if (this.props.movieDetail) {
      return (
        <div>
          <h2>Movie Details</h2>
          <h3>Title</h3>
          <p>{this.props.movieDetail.data.original_title}</p>
          {this.props.movieDetail.data.tagline !== '' ? (
            <div>
              <h3>Tag Line</h3>
              <p>{this.props.movieDetail.data.tagline}</p>
            </div>
          ) : (
            <div />
          )}
          <h3>Overview</h3>
          <p>{this.props.movieDetail.data.overview}</p>
          <h3>Length</h3>
          <p>{this.props.movieDetail.data.runtime} mins</p>
          <h3>Genres</h3>
          <ul>
            {this.props.movieDetail.data.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Select a movie from the left to get started!</h2>
          <img
            className="giphy"
            src="https://media.giphy.com/media/E187hGSW3GK7iV75ty/giphy.gif"
            alt="Loader"
          />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail
  };
}

export default connect(mapStateToProps)(MovieDetail);
