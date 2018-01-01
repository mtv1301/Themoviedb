import React, { Component } from 'react';
import logo from './img/logo1.jpg';
import './css/Navigation.css';
import './css/MoviesFilter.css';
import './css/PopularMovies.css';
import './css/MovieComponent.css';
import './css/MovieDescription.css';


import Navigation from "./router/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
            <Navigation/>
        </div>
      </div>
    );
  }
}

export default App;
