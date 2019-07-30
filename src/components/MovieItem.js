import React from 'react';

class MovieItem extends React.Component {

    render() {
        const {backdrop_path, poster_path, title, vote_average, overview} = this.props.item;
        return (
            <>
                <img src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`} alt={title}/>
                <h3>{title}</h3>
                <span>Rating: {vote_average}</span>
                <p>{overview}</p>
            </>
        )
    }

}

export default MovieItem;