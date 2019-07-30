import React from 'react';
import {moviesData} from '../moviesData';
import MovieItem from './MovieItem';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      movieList: moviesData
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movieList.map(item => {
                return (
                  <div className="col-4" key={item.id}>
                    <MovieItem item = {item} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default App;
