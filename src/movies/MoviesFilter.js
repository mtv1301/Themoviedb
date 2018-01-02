import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import PopularMovies from "../movies/PopularMovies";
import MovieComponent from "../movies/MovieComponent";
import MovieDescription from "../movies/MovieDescription";
import fetch from 'isomorphic-fetch';

const TopRated = () => (
    <div>
        <h2>Top rated</h2>
    </div>
);
const NowPlaying = () => (
    <div>
        <h2>Now playing</h2>
    </div>
);
const history = createBrowserHistory();

class MoviesFilter extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: []
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {

        let searchQuery = event.target.value.toLowerCase();
        if (searchQuery && searchQuery!=="") {
            fetch('https://api.themoviedb.org/3/search/movie?api_key=10b612f37fb4e2a001c6f5f05f608344&query=' + searchQuery)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson.results);
                    this.updateFilms(responseJson.results);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            this.updateFilms([]);
        }
    }

    updateFilms(movies) {
        this.setState({
            movies: (movies)
        });
    }

    render() {
        return (
            <BrowserRouter history={history}>

                <div>
                    <ul>
                        <li className="menu-style"><Link to="/movies/popular-movies">Popular Movies</Link></li>
                        <li className="menu-style"><Link to="/movies/top-rated">Top rated</Link></li>
                        <li className="menu-style"><Link to="/movies/now-playing">Now playing</Link></li>
                        <input type="text" placeholder="Search" onChange={this.handleSearch}/>
                    </ul>
                    <hr/>
                    <div>
                        {
                            this.state.movies.map(function (movie, index) {
                                return <Link key={index} movie={movie} to={`/movie/${movie.id}/info`}>
                                    <MovieComponent movie={movie}/>
                                </Link>;
                            })
                        }
                        <Route path="/movie/:id/info" component={MovieDescription}/>
                    </div>
                    <Route exact={true} path="/movies/popular-movies" component={PopularMovies}/>
                    <Route exact={true} path="/movies/top-rated" component={TopRated}/>
                    <Route exact={true} path="/movies/now-playing" component={NowPlaying}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default MoviesFilter;
