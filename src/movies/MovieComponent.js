import React from "react";

class MovieComponent extends React.Component {
    movieUrl = "https://image.tmdb.org/t/p/w500";

    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie
        }
    }

    render() {
        return (
            <div className="movie">

                <img src={this.movieUrl + this.state.movie.backdrop_path}/>
                <div className="movie-title-style">
                    {this.state.movie.title}
                </div>
                <div className="movie-vote-style">
                    {this.state.movie.vote_average}
                </div>
            </div>
        )
    }
}

export default MovieComponent;
