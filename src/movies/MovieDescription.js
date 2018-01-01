import React from "react";

class MovieDescription extends React.Component {
    movieUrl = "https://image.tmdb.org/t/p/w500";

    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.match.params.id);
        this.state = {
            movie: {},
            movieId: props.match.params.id
        }
    }

    componentDidMount() {
        console.log("init Popular movies");
        fetch('https://api.themoviedb.org/3/movie/' + this.state.movieId + '?api_key=10b612f37fb4e2a001c6f5f05f608344')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    movie: (responseJson)
                });
                console.log(this.state.movie);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        console.log("render");
        return (

            <div>
                <img  src={this.movieUrl + this.state.movie.backdrop_path}/>
                <div className="movie-information-title">
                    {this.state.movie.title}
                </div>
                <div className="movie-information-title">
                    {this.state.movie.vote_average}
                </div>
                <div>
                    {this.state.movie.overview}

                </div>

            </div>
        )
    }
}

export default MovieDescription;
