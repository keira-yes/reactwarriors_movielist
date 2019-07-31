import React from 'react';

class MovieItem extends React.Component {

    state = {
       willWatch: false
    };

    render() {
        const {item, addItemToMovieList, removeItemFromMovieList} = this.props;
        return (
            <div className="card" style={{width: '100%', marginBottom: '40px'}}>
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`} alt={item.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Rating: {item.vote_average}</p>
                        <p className="card-text" style={{maxHeight: '100px', overflow: 'hidden'}}>{item.overview}</p>
                        {this.state.willWatch ?
                            <button
                                type={'button'}
                                className="btn btn-success"
                                onClick={() => {
                                    this.setState({willWatch: false});
                                    removeItemFromMovieList(item.id)
                                }}
                            >
                                Remove
                            </button>
                            :
                            <button
                                type={'button'}
                                className="btn btn-secondary"
                                onClick={() => {
                                    this.setState({willWatch: true});
                                    addItemToMovieList(item)
                                }}
                            >
                                Will Watch
                            </button>
                        }
                    </div>
            </div>
        )
    }

}

export default MovieItem;