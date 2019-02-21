import React, { Component } from 'react';

import Movies from './containers/Movies';
import MovieDetail from './containers/MovieDetail';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row movie-details">
          <div className="col-sm-6" />
          <div className="col-sm-6">
            <MovieDetail />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 movie-column">
            <Movies />
          </div>
          <div className="col-sm-6" />
        </div>
      </div>
    );
  }
}

export default App;
