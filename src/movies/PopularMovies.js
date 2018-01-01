import React from "react";
import fetch from 'isomorphic-fetch';
import MovieComponent from "./MovieComponent";
import createBrowserHistory from "history/createBrowserHistory";
import {BrowserRouter, Route, Link} from "react-router-dom";
import MovieDescription from "./MovieDescription";

const history = createBrowserHistory();

class PopularMovies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        console.log("init Popular movies");
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=10b612f37fb4e2a001c6f5f05f608344')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    movies: (responseJson.results)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        console.log("render");
        return (
            <BrowserRouter history={history}>
                <div>

                    {
                        this.state.movies.map(function (movie, index) {
                            return <Link key={index} movie={movie} to={`/movie/${movie.id}/info`}>
                                <MovieComponent movie={movie}/>
                            </Link>;
                        })
                    }
                    <hr/>
                    <Route path="/movie/:id/info" component={MovieDescription}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default PopularMovies;
