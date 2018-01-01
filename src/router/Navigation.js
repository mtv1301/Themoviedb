import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import MoviesFilter from "../movies/MoviesFilter";

const history = createBrowserHistory ();
const Serials = () => (
    <div>
        <h2>Serials</h2>
    </div>
);
class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <div className="Movies-style">
                    <ul>
                        <li className="Link-style"><Link to="/movies">Movies</Link></li>
                        <li className="Link-style"><Link to="/serials">Serials</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/movies" component={MoviesFilter}/>
                    <Route exact path="/serials" component={Serials}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Navigation;