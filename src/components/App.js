import React from 'react';
import {moviesData} from '../moviesData';
import MovieItem from './MovieItem';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            movieList: moviesData,
            moviesWillWatch: []
        }
    }

    addItemToMovieList = item => {
        const updatingMoviesWillWatch = [...this.state.moviesWillWatch];
        updatingMoviesWillWatch.push(item);
        this.setState({
            moviesWillWatch: updatingMoviesWillWatch
        });
    };

    removeItemFromMovieList = id => {
        const updatingMoviesWillWatch = [...this.state.moviesWillWatch].filter(function(item) {
            return item.id !== id;
        });
        this.setState({
            moviesWillWatch: updatingMoviesWillWatch
        })
    };

    render() {
        return (
            <div className="container" style={{margin: '40px 0'}}>
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movieList.map(item => {
                                return (
                                    <div className="col-4" key={item.id}>
                                        <MovieItem
                                            item = {item}
                                            addItemToMovieList = {this.addItemToMovieList}
                                            removeItemFromMovieList = {this.removeItemFromMovieList}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <h5>I will watch movies: {this.state.moviesWillWatch.length}</h5>
                        <ul className="list-group">
                            {this.state.moviesWillWatch.map(item => {
                                return <li className="list-group-item d-flex justify-content-between" key={item.id}>
                                    <h6>{item.title}</h6>
                                    <strong>{item.vote_average}</strong>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}

export default App;
